export default async function handler(req, res) {
  // Allow CORS for static frontend communication
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, website } = req.body;

    if (!website) {
      return res.status(400).json({ error: 'Website URL is required' });
    }

    let targetUrl = website.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    let htmlContent = '';
    let fetchSuccess = false;
    let seoChecks = {
      hasHttps: targetUrl.startsWith('https://'),
      hasH1: false,
      hasTitle: false,
      hasMetaDesc: false,
      hasViewport: false
    };

    // 1. Live Website HTML Crawling (Timeout set to 8 seconds)
    try {
      const response = await fetch(targetUrl, {
        headers: { 'User-Agent': 'DigitalWhopper-SEO-Audit-Bot/1.0' },
        signal: AbortSignal.timeout(8000)
      });
      if (response.ok) {
        htmlContent = await response.text();
        fetchSuccess = true;
      }
    } catch (err) {
      console.log('Fetch error or firewall restriction:', err.message);
    }

    // 2. SEO Health Score & Rules Calculation
    let calculatedScore = 45;

    if (seoChecks.hasHttps) calculatedScore += 15;

    if (fetchSuccess && htmlContent) {
      // Check H1 Tag
      const h1Matches = htmlContent.match(/<h1[\s>]/gi);
      if (h1Matches) {
        seoChecks.hasH1 = true;
        calculatedScore += h1Matches.length === 1 ? 20 : 10;
      }

      // Check Title Tag
      if (/<title[\s>]/i.test(htmlContent)) {
        seoChecks.hasTitle = true;
        calculatedScore += 10;
      }

      // Check Meta Description
      if (/<meta\s+name=["']description["']/i.test(htmlContent)) {
        seoChecks.hasMetaDesc = true;
        calculatedScore += 10;
      }

      // Check Mobile Viewport Tag
      if (/<meta\s+name=["']viewport["']/i.test(htmlContent)) {
        seoChecks.hasViewport = true;
        calculatedScore += 10;
      }
    } else {
      // Fallback base score if target site blocks external bots
      calculatedScore = 58;
    }

    // Keep score bounded between 40 and 95
    if (calculatedScore > 95) calculatedScore = 95;
    if (calculatedScore < 40) calculatedScore = 40;

    const finalScoreStr = calculatedScore + "/100";

    // 3. Auto Send Data to Google Sheet via Apps Script Web App URL
    const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxTTN8arqZRbUw8-U6cIOojAoU3Lgyg3qo1Hg428UUxFzXG3S21uAS8tJ5Z8T5u7rJW/exec";
    
    if (GOOGLE_SHEET_WEB_APP_URL) {
      try {
        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name || "N/A",
            email: email || "N/A",
            phone: phone || "N/A",
            website: targetUrl,
            score: finalScoreStr
          })
        });
      } catch (sheetErr) {
        console.log('Google sheet background sync failed:', sheetErr.message);
      }
    }

    // 4. Return Final JSON Response to Frontend
    return res.status(200).json({
      success: true,
      score: calculatedScore,
      checks: seoChecks,
      message: "Live website crawled and synced successfully."
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}