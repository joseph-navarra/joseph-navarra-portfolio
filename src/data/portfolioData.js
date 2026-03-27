export const portfolioData = {
  personal: {
    name: "Joseph Navarra",
    title: "Full Stack Developer",
    tagline: "Crafting high-performance digital experiences.",
    subtitle:
      "Frontend Specialist expert in Vue.js and modern web technologies with full-stack support capabilities.",
    location: "Pasay, Philippines",
    email: "joseph.agustin.navarra@gmail.com",
    phone: "+639778029311",
    github: "https://github.com/joseph-navarra",
    linkedin: "www.linkedin.com/in/navarrajosh",
    cvUrl: "#",
    resumeUrl: "#",
  },

  about: {
    description: `I am a Software Engineer specializing in building scalable, secure, and user-centric web applications. With expert-level proficiency in Vue.js, HTML5, CSS3, and JavaScript, I architect robust frontend systems that drive nationwide financial platforms. My experience includes integrating complex payment gateways and automating financial workflows, supported by foundational knowledge in Laravel and Node.js to ensure seamless end-to-end functionality.`,
    shortBio:
      "Frontend Expert dedicated to bridging the gap between sophisticated design and technical performance. I leverage a deep mastery of Vue.js and core web standards, complemented by emerging experience in Node.js and Laravel, to deliver reliable software solutions.",
  },

  skills: [
    { name: "CSS", level: 92, category: "specialized" },
    { name: "HTML", level: 92, category: "specialized" },
    { name: "Vue.js", level: 85, category: "frontend" },
    { name: "Nuxt.js", level: 55, category: "frontend" },
    { name: "React.js", level: 55, category: "frontend" },
    { name: "PHP / Laravel", level: 45, category: "backend" },
    { name: "Node JS", level: 40, category: "backend" },
    { name: "PostgreSQL", level: 80, category: "backend" },
    { name: "State Management", level: 92, category: "specialized" },
    { name: "Docker", level: 60, category: "devops" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "Git", level: 88, category: "devops" },
  ],

  projects: [
    {
      id: 1,
      title: "Cash-In/Out Module",
      description:
        "Allows users to add funds to their account or withdraw money using various channels such as bank transfers, e-wallets, or over-the-counter transactions.",
      tech: ["Vue.js", "Laravel", "Node.js"],
      status: "live",
      icon: "Wallet",
    },
    {
      id: 2,
      title: "Transaction Inquiry",
      description:
        "Enables users to view and track their past and current transactions, including status, details, and history",
      tech: ["Vue.js", "Laravel", "Node.js"],
      status: "live",
      icon: "Search",
    },
    {
      id: 3,
      title: "Payment Gateway",
      description:
        "A system that processes online payments securely by connecting users, merchants, and financial institutions for transactions.",
      tech: ["Vue.js", "Laravel", "Node.js"],
      status: "live",
      icon: "CreditCard",
    },
    {
      id: 4,
      title: "E-Load Gateway",
      description:
        "Facilitates the purchase and distribution of prepaid mobile load or digital credits across different telecom providers.",
      tech: ["Vue.js", "Laravel", "Node.js"],
      status: "live",
      icon: "Smartphone",
    },
    {
      id: 5,
      title: "KMS Request Signing",
      description:
        "GCP Cloud KMS integration for secure request signing and response verification. Implements cryptographic signing of API requests and validation of signed responses for enhanced transaction security.",
      tech: ["GCP", "Node.js", "KMS API"],
      status: "live",
      icon: "Key",
    },
  ],

  experience: [
    {
      company: "Petnet Inc",
      role: "Frontend Developer",
      period: "2024 - Present",
      description:
        "PETNET Inc. is a leading fintech company and financial services provider in the Philippines that operates the extensive PERA HUB network. As a subsidiary of City Savings Bank and part of the Aboitiz Equity Ventures group, it focuses on driving financial inclusion through a nationwide ecosystem of over 186 company-owned branches and thousands of sub-agent locations.",
    },
  ],

  gatewayNames: ["PayMaya", "GCash", "DragonPay", "BPI"],
};
