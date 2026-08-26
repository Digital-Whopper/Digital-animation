// 🌟 CENTRAL SERVICES MASTER DATABASE
const DW_SERVICES_DATA = [
  {
    id: 0,
    slug: "seo-dominance",
    title: "SEO Dominance",
    menuTitle: "SEO & SMO Optimisation",
    icon: "🔍",
    classColor: "color-c1",
    badge: "Organic Traffic Growth",
    subtext: "Outrank your competitors with data-driven SEO strategies.",
    desc: "Outrank your competitors. We build a strong organic foundation that ranks your brand on top across Google search and AI answers. We strategically target high-intent keywords, optimize content and deliver quality that only the best SEO Company in Jaipur can execute.",
    solutions: [
      {
        type: "c-blue",
        icon: "🔍",
        title: "On-Page SEO",
        desc: "Optimizing website content, meta tags, and internal architecture for search engine friendliness.",
        items: ["Keyword Research", "Content Optimization", "Meta Tags & Headings", "URL Optimization"]
      },
      {
        type: "c-green",
        icon: "🔗",
        title: "Off-Page SEO",
        desc: "High-quality link building and authority signals to boost domain power and visibility.",
        items: ["Quality Backlinks", "Guest Posting", "Brand Mentions", "Local Citations"]
      },
      {
        type: "c-purple",
        icon: "⚙️",
        title: "Technical SEO",
        desc: "Fast, secure, mobile-friendly and easily crawlable infrastructure for ranking dominance.",
        items: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "Crawl & Indexing"]
      }
    ]
  },
  {
    id: 1,
    slug: "performance-ads",
    title: "Performance Ads",
    menuTitle: "Performance Marketing",
    icon: "🚀",
    classColor: "color-c2",
    badge: "High ROAS Acquisition",
    subtext: "Scale conversions and maximize returns with precision advertising.",
    desc: "Maximize your enterprise ROAS. We create high-velocity ads and full-funnel strategies that capture leads and drive sales, maximizing your ROAS. As your performance marketing agency, we actively scale your bottom line and ensure that your media spend gives you high-margin profit.",
    solutions: [
      {
        type: "c-blue",
        icon: "📈",
        title: "Meta Ads Architecture",
        desc: "Advanced CBO strategies and high-converting ad creative funnels on Facebook & Instagram.",
        items: ["Audience Profiling", "Creative Matrix Testing", "CBO Scaling Protocols", "Pixel Retargeting"]
      },
      {
        type: "c-green",
        icon: "🎯",
        title: "Google Search & Shopping",
        desc: "Capturing bottom-of-the-funnel buyer intent with high-intent search and PMax campaigns.",
        items: ["Search Ads Funnels", "PMax Campaigns", "Negative Keyword Control", "ROAS Optimization"]
      },
      {
        type: "c-purple",
        icon: "📊",
        title: "Conversion Tracking",
        desc: "Server-side tracking and analytics ensuring every rupee spent delivers high-margin returns.",
        items: ["Server-Side CAPI", "GA4 Attribution", "Funnel Leak Fixes", "LTV Multipliers"]
      }
    ]
  },
  {
    id: 2,
    slug: "web-development",
    title: "Web Development",
    menuTitle: "Web Design & Development",
    icon: "💻",
    classColor: "color-c3",
    badge: "Bespoke Engineering",
    subtext: "Fast, high-converting digital storefronts built for modern brands.",
    desc: "Architect high-converting digital storefronts. We engineer custom, professional, responsive websites that engage your visitors and drive real conversions. As a leading web development company in Jaipur, our core focus is on mobile-first responsiveness and seamless user journey.",
    solutions: [
      {
        type: "c-blue",
        icon: "⚡",
        title: "Custom Frontend",
        desc: "Speed-optimized, pixel-perfect user interfaces designed to turn visitors into customers.",
        items: ["Clean HTML/CSS/JS", "Core Web Vitals 95+", "Mobile-First Design", "Micro-Interactions"]
      },
      {
        type: "c-green",
        icon: "🛡️",
        title: "Full-Stack Architecture",
        desc: "Secure, scalable backend integrations capable of handling high concurrency traffic.",
        items: ["API Integrations", "Database Architecture", "CMS Customization", "SSL & Cloud Security"]
      },
      {
        type: "c-purple",
        icon: "🎨",
        title: "Conversion UI/UX",
        desc: "Data-backed layouts that minimize friction and maximize instant user actions.",
        items: ["Wireframing & Figma", "A/B Layout Testing", "Instant Checkouts", "User Journey Flow"]
      }
    ]
  },
  {
    id: 3,
    slug: "ecommerce-marketing",
    title: "Ecommerce Marketing Services",
    menuTitle: "Ecommerce Marketing",
    icon: "🛍️",
    classColor: "color-c4",
    badge: "Marketplace Dominance",
    subtext: "Scale across Amazon, Flipkart, Etsy, and global storefronts.",
    desc: "Whoop up your ecom business. We optimize your digital storefront across major retail platforms – Amazon, Flipkart, Shopify, and Etsy, turning one-time shoppers into repeat buyers. From streamlining product funnels to lowering cart abandonment, we guarantee unmatched growth.",
    solutions: [
      {
        type: "c-blue",
        icon: "🏷️",
        title: "Marketplace Listing SEO",
        desc: "Optimizing catalog metadata and search indexing on Amazon, Flipkart, and Etsy.",
        items: ["Keyword Cataloging", "Title & Bullet Points", "Backend Search Terms", "Competitor Hijack Fix"]
      },
      {
        type: "c-green",
        icon: "🎨",
        title: "A+ Content & Brand Store",
        desc: "Immersive visual storytelling and custom brand stores that skyrocket conversion rates.",
        items: ["A+ Enhanced Modules", "Brand Storefront", "Lifestyle Banners", "Visual Comparison Charts"]
      },
      {
        type: "c-purple",
        icon: "📢",
        title: "Marketplace Ads (PPC)",
        desc: "Sponsored product and brand campaigns designed to maintain profitable ACOS.",
        items: ["Sponsored Products", "Sponsored Brands", "Targeted Keyword PPC", "ACOS Management"]
      }
    ]
  },
  {
    id: 4,
    slug: "social-media-management",
    title: "Social Media Management",
    menuTitle: "Social Media Management",
    icon: "🎨",
    classColor: "color-c5",
    badge: "Viral Reach & Engagement",
    subtext: "Lead trends, build high recall, and cultivate active communities.",
    desc: "Lead trends and lock recall. Your search for the best social media marketing company in Jaipur ends here. We master platform dynamics across Facebook, Instagram, LinkedIn, and YouTube, executing custom strategies that help your brand thrive.",
    solutions: [
      {
        type: "c-blue",
        icon: "🎬",
        title: "Short-Form Video Playbooks",
        desc: "High-retention Reels, Shorts, and TikTok style videos engineered for algorithmic push.",
        items: ["Script Hook Blueprints", "High-Retention Editing", "Audio Trend Matching", "Call-to-Actions"]
      },
      {
        type: "c-green",
        icon: "✨",
        title: "Brand Aesthetic Identity",
        desc: "Striking grid architecture, carousel design, and consistent branding across channels.",
        items: ["Brand Guidelines", "Carousel Design", "Story Frameworks", "Interactive Posts"]
      },
      {
        type: "c-purple",
        icon: "🤝",
        title: "Influencer & Community",
        desc: "Connecting your brand with relevant creators and building loyal community fans.",
        items: ["Creator Outreach", "Collaboration Kits", "Engagement Protocols", "Sentiment Monitoring"]
      }
    ]
  },
  {
    id: 5,
    slug: "cro-analytics",
    title: "360° CRO Analytics",
    menuTitle: "360° CRO & Analytics",
    icon: "📱",
    classColor: "color-c6",
    badge: "Data-Driven CRO",
    subtext: "Extract maximum revenue per click by eliminating friction points.",
    desc: "Unlock maximum value per click. We simplify lead management, fix drop-offs, and boost conversions, getting you maximum ROI from every single click. Be it tracking real-time user behavior or running A/B tests for improvements, we cover every angle.",
    solutions: [
      {
        type: "c-blue",
        icon: "🔥",
        title: "Behavioral Heatmaps",
        desc: "Tracking scrolls, taps, and dead clicks to understand user frustration points.",
        items: ["Session Recordings", "Heatmap Audits", "Drop-off Analysis", "Form Friction Audits"]
      },
      {
        type: "c-green",
        icon: "🧪",
        title: "A/B Split Testing",
        desc: "Testing headlines, CTAs, and checkout sequences to prove winning variations.",
        items: ["Multivariate Tests", "Headline Variations", "CTA Repositioning", "Micro-Copy Testing"]
      },
      {
        type: "c-purple",
        icon: "📈",
        title: "Funnel Optimization",
        desc: "Streamlining product purchase funnels to compound Lifetime Customer Value (LTV).",
        items: ["Checkout Leak Fixes", "Cart Funnel Tuning", "Attribution Models", "Cohort Analytics"]
      }
    ]
  },
  {
    id: 6,
    slug: "ui-ux-architecture",
    title: "UI/UX Architecture",
    menuTitle: "UI/UX Architecture",
    icon: "🎨",
    classColor: "color-c7",
    badge: "Tactile Storytelling",
    subtext: "Conversion-first user interfaces with striking digital aesthetics.",
    desc: "Design slick digital experiences. We craft conversion-first user interfaces with striking aesthetics that keep users hooked. Our psychology-backed designs and tactile visual storytelling will leave a lasting impression of your brand on your customer’s mind.",
    solutions: [
      {
        type: "c-blue",
        icon: "📐",
        title: "Wireframing & Prototypes",
        desc: "Low-to-high fidelity interactive wireframes testing user interactions seamlessly.",
        items: ["Figma Design Systems", "Interactive Prototypes", "Component Libraries", "User Journey Flow"]
      },
      {
        type: "c-green",
        icon: "🧠",
        title: "Behavioral UX Design",
        desc: "Psychology-backed layouts designed to lower cognitive load and speed up conversions.",
        items: ["Micro-Copy Testing", "Visual Hierarchy", "Frictionless Forms", "Accessibility Testing"]
      },
      {
        type: "c-purple",
        icon: "📱",
        title: "Mobile-First Design",
        desc: "Pixel-perfect touch experiences built for sub-second responses across smartphone screens.",
        items: ["Gesture Controls", "Dynamic Viewports", "Fast Asset Layouts", "Retina Asset Sync"]
      }
    ]
  },
  {
    id: 7,
    slug: "pitch-consulting",
    title: "Pitch Consulting",
    menuTitle: "Shark Tank Pitch Consulting",
    icon: "🦈",
    classColor: "color-c8",
    badge: "Shark Tank Ready",
    subtext: "Empowering visionary founders to secure institutional funding.",
    desc: "From seed to scale. As the best digital marketing company in Jaipur, we empower ambitious founders to build irresistible pitch decks for institutional funding milestones. Dreaming of Shark Tank India? Join us. Together we’ll work out a pitch that secures deals.",
    solutions: [
      {
        type: "c-blue",
        icon: "📑",
        title: "Investor Pitch Decks",
        desc: "Formulating compelling investor storytelling, unit economics, and growth roadmaps.",
        items: ["Narrative Structuring", "Financial Modeling", "Market Sizing (TAM)", "Milestone Mapping"]
      },
      {
        type: "c-green",
        icon: "🦈",
        title: "Shark Tank Preparation",
        desc: "Tactile pitch rehearsals, valuation logic, and Q&A battle-testing for live presentations.",
        items: ["Mock Pitch Sessions", "Valuation Defense", "Traction Highlights", "Product Staging"]
      },
      {
        type: "c-purple",
        icon: "🎨",
        title: "Interactive Prototyping",
        desc: "Showcasing high-fidelity clickable Figma designs that validate market readiness.",
        items: ["Figma Prototypes", "Visual Storytelling", "Design Systems", "Investor Demos"]
      }
    ]
  }
];