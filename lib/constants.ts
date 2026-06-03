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
  { label: "Sobre Mim", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processo", href: "#process" },
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
    "Sou web developer com paixão por criar experiências digitais belas e funcionais. Com mais de 6 anos de experiência na tecnologia, ajudei pessoas a elevar sua presença digital por meio de um design pensado e um desenvolvimento robusto. Minha abordagem é centrada no usuário, garantindo que cada projeto não apenas pareça incrível, mas também ofereça uma experiência intuitiva e envolvente.",
  
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
  title: "Portfolio",
  description: "Alguns cases recentes mostrando meus trabalhos e resultados",
  projects: [
    {
      id: 1,
      title: "Website para Psicologa",
      description:
        "Redesign completo de uma plataforma de uma profissional de psicologia",
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
    title: "Descoberta & Estratégia",
    description:
      "Entendimento da sua visão, metas e público-alvo por meio de consultoria aprofundada",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Design & Prototipagem",
    description:
      "Criando wireframes detalhados, mockups e protótipos interativos",
    icon: "✏️",
  },
  {
    id: 3,
    title: "Desenvolvimento & QA",
    description:
      "Desenvolvendo código pronto para produção e garantindo qualidade rigorosa",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Lançamento e Suporte",
    description:
      "Deploy, optimização, and suporte com manutençao para o seu sucesso",
    icon: "🚀",
  },
];

// FAQ Section
export const FAQ = [
  {
    id: 1,
    question: "Qual a timeline de um projeto? ",
    answer:
      "Vão variar dependendo do escopo e complexidade. A maioria dos projetos varia de 4-12 semanas. Durante nossa consulta inicial, eu fornecerei uma linha do tempo detalhada para suas necessidades específicas.",
  },
  {
    id: 2,
    question: "Você oferece suporte contínuo após o lançamento?",
    answer:
      "Sim! Ofereço pacotes de suporte pós-lançamento abrangentes, incluindo manutenção, atualizações e otimização. Podemos discutir opções que sejam adequadas ao seu orçamento.",
  },
  {
    id: 3,
    question: "Qual é o seu processo de design?",
    answer:
      "Meu processo inclui descoberta, estratégia, design, prototipagem, desenvolvimento, testes e lançamento. Eu enfatizo colaboração e feedback ao longo de cada fase.",
  },
  {
    id: 4,
    question: "Você pode trabalhar com meu sistema de design existente?",
    answer:
      "Absolutamente! Posso integrar com sistemas de design existentes e fluxos de trabalho de desenvolvimento para garantir consistência e eficiência.",
  },
  {
    id: 5,
    question: "Quais são os valores?",
    answer:
      "Os valores vão depender da complexidade do projeto, mas geralmente começam em R$2,000 para projetos básicos. Durante nossa consulta inicial, posso fornecer uma cotação personalizada com base nas suas necessidades específicas.",
  },

  {
    id: 6,
    question: "Como você trabalha com revisões?",
    answer:
      "Todos os pacotes incluem um número definido de rodadas de revisão. Revisões adicionais podem ser adicionadas com base nas suas necessidades.",
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/luanaschuler/", icon: "👔" },
    { label: "Instagram", href: "https://www.instagram.com/luanaschuler/", icon: "📸" },
    { label: "GitHub", href: "https://github.com/luanaschuler", icon: "💻" },
  ],
};

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: "5547997411988",
  message: "Oi Luana. Gostaria de discutir um projeto com você.",
  link: `https://wa.me/5547997411988?text=${encodeURIComponent("Oi Luana. Gostaria de discutir um projeto com você.")}`,
};
