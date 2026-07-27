// highlight
// ==========================================================================
// 📈 LIGHT MATRIX 4-POINT LIVE COUNT-UP ENGINE
// ==========================================================================
function initMatrixCounters() {
  const counters = document.querySelectorAll('.dw-matrix-counter');
  
  if (counters.length === 0) return;

  const matrixObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // जैसे ही सेक्शन स्क्रीन पर 20% दिखाई देगा, एनीमेशन ट्रिगर होगा
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let current = 0;
        // एनीमेशन की स्मूथनेस और ड्यूरेशन सेटिंग्स
        const duration = 2000; // 2 सेकंड में पूरा काउंट होगा
        const frameRate = 1000 / 60; // 60fps स्मूथनेस
        const totalFrames = Math.round(duration / frameRate);
        const stepIncrement = target / totalFrames;

        let frame = 0;

        function updateCount() {
          frame++;
          current += stepIncrement;

          if (frame >= totalFrames) {
            // एनीमेशन समाप्त होने पर फाइनल फिक्स वैल्यू सेट करना
            el.textContent = `${prefix}${target}${suffix}`;
          } else {
            // नंबर्स को राउंड फिगर में लाइव दिखाना
            el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            requestAnimationFrame(updateCount);
          }
        }

        // एनीमेशन चालू करें
        requestAnimationFrame(updateCount);
        // एक बार एनीमेशन चलने के बाद ऑब्जर्वर हटा दें ताकि बार-बार स्क्रॉल पर लोड न पड़े
        matrixObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => matrixObserver.observe(counter));
}

// डोम रेडी होने पर इंजन एक्टिवेट करें
document.addEventListener('DOMContentLoaded', () => {
  initMatrixCounters();
});



// onwer about
// ==========================================================================
// 📈 FOUNDER PORTRAIT FOOTER TRIPLE-NODE LIVE COUNT ENGINE
// ==========================================================================
function initOwnerCounters() {
  const ownerCounters = document.querySelectorAll('.owner-live-counter-o');
  if (ownerCounters.length === 0) return;

  const ownerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let current = 0;
        const duration = 1800; // 1.8 सेकंड रनिंग टाइम
        const totalFrames = 60; 
        const stepIncrement = target / totalFrames;
        let frame = 0;

        function countUp() {
          frame++;
          current += stepIncrement;

          if (frame >= totalFrames) {
            el.textContent = `${prefix}${target}${suffix}`;
          } else {
            el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            requestAnimationFrame(countUp);
          }
        }
        requestAnimationFrame(countUp);
        ownerObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  ownerCounters.forEach(c => ownerObserver.observe(c));
}

// DOM रेडी हुक बाइंडिंग
document.addEventListener('DOMContentLoaded', () => {
  initOwnerCounters();
});



// brand section
if (typeof applyCursorHooks === "function") {
  const ecosystemPads = document.querySelectorAll('.partner-logo-pad-e');
  ecosystemPads.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
  });
}


// testimonial section
// ==========================================================================
// 🎡 WHATSAPP TESTIMONIALS ZIG-ZAG LOOP RUNNER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const testimonialData = [
    {
      id: 1,
      name: "Mani Brand",
      status: "Online",
      className: "card-angle-left",
      messages: [
        { type: "received", text: "How is the performance this month?" },
        { type: "sent", text: "Sir, we hit a 4.5x ROAS today! Growth is consistent." },
        { type: "received", text: "Brilliant work team! Keep it up. 🚀" }
      ]
    },
    {
      id: 2,
      name: "Ekatra Founder",
      status: "last seen today",
      className: "card-angle-right",
      messages: [
        { type: "received", text: "Organic traffic is skyrocketing after the SEO audit." },
        { type: "sent", text: "Yes! Impression scale almost doubled this week." },
        { type: "received", text: "Shark Tank pitch went amazing, thanks to the visibility! 🦈" }
      ]
    },
    {
      id: 3,
      name: "Gudmishri",
      status: "Online",
      className: "card-angle-left-subtle",
      messages: [
        { type: "received", text: "The new e-commerce storefront UI UX looks beautiful." },
        { type: "sent", text: "Thank you! Conversion rates should improve now." },
        { type: "received", text: "Already seeing 20% more checkouts today! 🔥" }
      ]
    },
    {
      id: 4,
      name: "Homearte",
      status: "Online",
      className: "card-angle-right-subtle",
      messages: [
        { type: "received", text: "Are the performance ads active?" },
        { type: "sent", text: "Live since morning. Leads are dropping in at lowest CPA." },
        { type: "received", text: "Amazing, let's scale the budget! 📈" }
      ]
    }
  ];

  const track = document.getElementById('testimonialTrack');
  if (!track) return;

  // इनफिनिट स्क्रॉल लूप को बिना किसी लैग के चलाने के लिए ओरिजिनल डेटा का डुप्लीकेट (Clone) सेट बनाना
  const repeatedData = [...testimonialData, ...testimonialData, ...testimonialData];

  // HTML रेंडरिंग ब्लॉक
  track.innerHTML = repeatedData.map(item => {
    const msgHTML = item.messages.map(m => `<div class="wp-msg ${m.type}">${m.text}</div>`).join('');
    const statusHTML = item.status ? `<span class="wp-chat-status">${item.status}</span>` : '';
    
    return `
      <div class="wp-chat-card ${item.className}">
        <div class="wp-chat-header">
          <span class="wp-chat-name">${item.name}</span>
          ${statusHTML}
        </div>
        <div class="wp-chat-body">
          ${msgHTML}
        </div>
      </div>
    `;
  }).join('');
});

// navbar logo section 

// ==========================================================================
// 👾 DIGITAL WHOPPER PAC-MAN LOGO INTERACTIVE ENGINE
// ==========================================================================
function initLogoChomperEngine() {
  const logo = document.getElementById('dwLogoTrigger');
  if (!logo) return;

  let isAnimating = false;

  logo.addEventListener('mouseenter', () => {
    // अगर एनीमेशन पहले से चल रहा है तो दोबारा ट्रिगर न हो
    if (isAnimating) return;
    isAnimating = true;

    const chars = logo.querySelectorAll('.logo-char');
    
    // Step 1: $90^\circ$ राइट रोटेट करें
    logo.classList.add('anim-rotating');

    // Step 2: 400ms बाद मुंह चलाना और आगे बढ़ना शुरू करें
    setTimeout(() => {
      logo.classList.add('anim-chomping');
      logo.classList.add('anim-moving');

      // Step 3: जैसे-जैसे Pac-Man आगे बढ़ेगा, एक-एक करके अक्षरों को खाएगा
      chars.forEach((char, index) => {
        setTimeout(() => {
          char.classList.add('eaten');
        }, (index * 130) + 100); // 130ms के गैप पर एक-एक अक्षर गायब होगा
      });

    }, 400);

    // Step 4: पूरा नाम खाने के बाद (2.8 सेकंड बाद) सब कुछ वापस नॉर्मल (Reset) करें
    setTimeout(() => {
      // एनीमेशन क्लासेस हटाएं
      logo.classList.remove('anim-chomping', 'anim-moving', 'anim-rotating');
      
      // अक्षरों को वापस लाएं
      chars.forEach(char => {
        char.classList.remove('eaten');
      });
      
      // एनीमेशन लॉक खोलें
      isAnimating = false;
    }, 2800);
  });
}

// DOM लोड होने पर इंजन एक्टिवेट करें
document.addEventListener('DOMContentLoaded', () => {
  initLogoChomperEngine();
});


// logo animation

// ---- AUTO TRIGGER ANIMATION ON PAGE LOAD ----
window.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.getElementById('logoEaterBtn');

  if (logoContainer) {
    // Reload par preloader hatne ke thode der baad animation trigger hoga
    setTimeout(() => {
      logoContainer.classList.add('auto-eat-active');
    }, 800); // 800ms delay taaki page visual load ho sake
  }
});

// tablet and laptop me project section 
// 🎯 Projects Render Engine
function renderWorkProjects() {
  // Check if screen is 900px or below (Mobile & Small Tablets)
  const isSmallScreen = window.innerWidth <= 900;

  // 1. 900px ya usse kam par SIRF 10 Projects dikhenge.
  // 2. 901px se upar (Large Tablets & Laptops) par ALL Projects dikhenge.
  const visibleProjects = isSmallScreen ? allProjects.slice(0, 10) : allProjects;

  // Projects render karne ka aapka main function
  displayProjects(visibleProjects);

  // 'Load More' button sirf 900px se kam wali screen par 10 se zyada projects hone par dikhega
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = isSmallScreen && allProjects.length > 10 ? 'block' : 'none';
  }
}

// Window resize aur Load hone par auto-trigger karein
window.addEventListener('resize', renderWorkProjects);
document.addEventListener('DOMContentLoaded', renderWorkProjects);

// प्रोजेक्ट्स की स्टेट ट्रैक करने के लिए वेरिएबल
let isExpanded = false; 

function renderWorkProjects() {
  // 1. अगर isExpanded true है तो सारे प्रोजेक्ट्स दिखाओ, वर्ना सिर्फ़ 10 प्रोजेक्ट्स दिखाओ
  const visibleProjects = isExpanded ? allProjects : allProjects.slice(0, 10);

  // प्रोजेक्ट्स को DOM में रेंडर करने का फ़ंक्शन
  displayProjects(visibleProjects);

  // 2. 'Read More / Load More' बटन का लॉजिक
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    // अगर कुल प्रोजेक्ट्स 10 से ज़्यादा हैं और अभी एक्सपैंड नहीं हुए हैं तो बटन दिखाओ
    if (allProjects.length > 10 && !isExpanded) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

// 3. 'Read More' बटन पर क्लिक इवेंट जोड़ें
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    isExpanded = true; // स्टेट अपडेट करें
    renderWorkProjects(); // दोबारा रेंडर करें ताकि सारे प्रोजेक्ट्स दिखने लगें
  });
}

// Window load पर एक्ज़ीक्यूट करें
document.addEventListener('DOMContentLoaded', renderWorkProjects);