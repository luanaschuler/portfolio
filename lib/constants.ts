import { image } from "framer-motion/client";

// Site Metadata
export const SITE_TITLE = "Luana Schüler - Web Developer";
export const SITE_DESCRIPTION =
  "Desenvolvimento de websites modernos e funcionais";
export const SITE_KEYWORDS =
  "design, development, portfolio, UI/UX, web design";

// Navigation
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

// Hero Section
export const HERO = {
  headline: "Do",
  part1: "conceito",
  part2: "ao",
  part3: "código",
  subheadline:
    "Design estratégico e desenvolvimento frontend de alta performance, unidos para criar experiências digitais impecáveis e centradas no usuário.",
  cta_primary: "Acesse o PORTFOLIO",
  cta_secondary: "Entre em contato",
};

// About Section
export const ABOUT = {
  title: "Sobre Mim",
  description:
    "Sou uma designer e desenvolvedora de produtos com paixão por criar experiências digitais belas e funcionais. Com mais de 8 anos de experiência, ajudei marcas a elevar sua presença digital por meio de um design pensado e um desenvolvimento robusto.",
  highlights: [
    "50+ Projects Completed",
    "20+ Global Clients",
    "8+ Years Experience",
    "Award-Winning Work",
  ],
  cta_primary: "Acesse o PORTFOLIO"
};

// Services Section
export const SERVICES = [
  {
    id: 1,
    title: "Product Design",
    description:
      "End-to-end design solutions from concept to pixel-perfect mockups",
    icon: "🎨",
    image: "/cute.png",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, responsive websites built with latest technologies",
    icon: "💻",
    image: "/folhaa.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversions",
    icon: "✨",
    image: "/mountainss.png",
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Complete branding packages tailored to your vision",
    icon: "🎯",
    image: "/rocks.png",
  },
  {
    id: 5,
    title: "Mobile Apps",
    description: "Native and cross-platform app design and development",
    icon: "📱",
    image: "/round.png",
  },
  {
    id: 6,
    title: "Consulting",
    description: "Strategic digital transformation and growth consulting",
    icon: "💡",
    image: "/fios.png",
  },
];

// Portfolio Section
export const PORTFOLIO = {
  title: "Featured Work",
  description: "A selection of projects that showcase my expertise and passion",
  projects: [
    {
      id: 1,
      title: "Website para Psicologa",
      description:
        "Redesign completo de uma plataforma de serviços de saúde, resultando em aumento de 45% nas taxas de conversão",
      image: "/iniciais-bg.png",
      category: "Saúde e Bem-estar",
      link: "#",
    },
    {
      id: 2,
      title: "Website para Psicologo",
      description:
        "Redesign completo de uma plataforma de serviços de saúde, resultando em aumento de 45% nas taxas de conversão",
      image: "/folha.png",
      category: "Saúde e Bem-estar",
      link: "#",
    },
    {
      id: 3,
      title: "Portfólio para Midia Social",
      description:
        "Site focado na estética e no visual dos trabalhos realizados da social midia, com o objetivo de atrair clientes e mostrar os trabalhos realizados",
      image: "/folha.png",
      category: "Creative Portfolio",
      link: "#",
    },
    {
      id: 4,
      title: "Mobile Health App",
      description:
        "Created an intuitive mobile health application used by 100k+ users",
      image: "/iniciais-bg.png",
      category: "Mobile",
      link: "#",
    },
  ],
};

// Testimonials Section
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Anderson",
    title: "CEO at TechVenture",
    quote:
      "Luana's work transformed our digital presence. Her attention to detail and creative excellence is unmatched.",
    image: "/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Founder at InnovateCo",
    quote:
      "Working with Luana was seamless. She delivered a product that exceeded our expectations and our users love it.",
    image: "/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    title: "Product Manager at CreativeStudio",
    quote:
      "Luana brings both artistry and technical excellence. A true professional that I'd recommend to anyone.",
    image: "/testimonial-3.jpg",
  },
];

// Process Section
export const PROCESS = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "Understanding your vision, goals, and target audience through in-depth consultation",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Creating detailed wireframes, mockups, and interactive prototypes",
    icon: "✏️",
  },
  {
    id: 3,
    title: "Development & Testing",
    description:
      "Building production-ready code and rigorous quality assurance",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Launch & Support",
    description:
      "Deployment, optimization, and ongoing support for your success",
    icon: "🚀",
  },
];

// FAQ Section
export const FAQ = [
  {
    id: 1,
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. Most projects range from 4-12 weeks. During our initial consultation, I'll provide a detailed timeline for your specific needs.",
  },
  {
    id: 2,
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! I offer comprehensive post-launch support packages including maintenance, updates, and optimization. We can discuss options that fit your budget.",
  },
  {
    id: 3,
    question: "What is your design process?",
    answer:
      "My process includes discovery, strategy, design, prototyping, development, testing, and launch. I emphasize collaboration and feedback throughout each phase.",
  },
  {
    id: 4,
    question: "Can you work with my existing design system?",
    answer:
      "Absolutely! I can integrate with existing design systems and development workflows to ensure consistency and efficiency.",
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, TailwindCSS, and various backend solutions. I'm always learning new tools.",
  },
  {
    id: 6,
    question: "How do you handle revisions?",
    answer:
      "All project packages include a set number of revision rounds. Additional revisions can be added based on your needs.",
  },
];

// CTA Section
export const CTA = {
  headline: "Ready to Transform Your Digital Presence?",
  description:
    "Let's create something amazing together. Get in touch today and let's discuss your project.",
  button: "Start Your Project",
};

// Contact Section
export const CONTACT = {
  title: "Entre em contato!",
  description: "Tem um projeto em mente? Vamos conversar sobre ele! ",
  whatsapp_number: "5547997411988", // Format: country code + number without +
  email: "luanaschuler@gmail.com",
  phone: "+55 (47) 99741-1988",
};

// Footer
export const FOOTER = {
  copyright: `© 2026 Luana Schüler. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#", icon: "👔" },
    { label: "Instagram", href: "#", icon: "📸" },
    { label: "GitHub", href: "#", icon: "💻" },
  ],
};

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: "5547997411988",
  message: "Oi Luana. Gostaria de discutir um projeto com você.",
  link: `https://wa.me/5547997411988?text=${encodeURIComponent("Oi Luana. Gostaria de discutir um projeto com você.")}`,
};
