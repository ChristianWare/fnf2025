import Thundertrails from "../../public/images/thunder.jpg";
import Chuxly from "../../public/images/chuxly.png";
import Honey from "../../public/images/honey.jpg";
import ERREntals from "../../public/images/erRentals.png";

export const pricing = [
  {
    id: 1,
    title: "Starter Store",
    description:
      "Small businesses launching their first e-commerce presence or entrepreneurs with straightforward product catalogs.",
    price: "5,900",
    timeframe: "4-6 weeks",
    features:
      "Custom design on your chosen platform (Shopify, WooCommerce, or Wix) with a mobile-responsive layout. Includes setup for up to 25 products, basic payment gateway integration, standard shipping configuration, essential SEO implementation, and comprehensive launch support to ensure your store starts strong.",
  },
  {
    id: 2,
    title: "Growth Store",
    description:
      "Established businesses requiring more sophisticated e-commerce functionality or those with larger product catalogs.",
    price: "7,500",
    timeframe: "8-10 weeks",
    features:
      "All Starter Store features plus advanced user experience design and support for up to 100 products. Includes multiple payment gateways, complex shipping rules, advanced product filtering, wishlist functionality, basic CRM integration, email marketing setup, and 30 days of dedicated post-launch support to optimize your store's performance.",
  },
  {
    id: 3,
    title: "Enterprise Solution",
    description:
      "Larger businesses with complex requirements, extensive product catalogs, or specialized e-commerce needs.",
    price: "10,000",
    timeframe: "12-16 weeks",
    features:
      "Everything in the Growth Store plus premium UX/UI design and unlimited product support. Includes custom functionality development, full systems integration (ERP, CRM, inventory), multi-currency support, advanced analytics, personalization features, conversion optimization, and 60 days of comprehensive post-launch support and training for your team.",
  },
  {
    id: 4,
    title: "Specialized E-commerce Solutions",
    description:
      "Businesses with specific e-commerce models or unique requirements that need customized solutions.",
    price: "Custom",
    timeframe: "Varies",
    features:
      "Tailored solutions for specialized e-commerce models including B2B portals, multi-vendor marketplaces, subscription-based platforms, digital product stores, service booking systems, and rental e-commerce platforms. Each solution includes customized features specifically designed for your unique business model and requirements.",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Thundertrails",
    slug: "thundertrails",
    src: Thundertrails,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
    tags: [
      {
        id: 1.98,
        tag: "Ecommerce",
      },
      {
        id: 1.99,
        tag: "Online Shop",
      },
    ],
    h1: "Revolutionizing Thundertrails' online presence with a cutting-edge ecommerce platform",
    year: 2025,
    platform: "Wix E-commerce with Next.js",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Thundertrails' previous website was outdated, with limited functionality and poor performance that failed to showcase their premium bike collection properly. The slow loading times and clunky navigation were frustrating customers and limiting online sales potential. The brand needed a robust digital solution that could handle complex product configurations while delivering an exceptional user experience.",
      },
      {
        id: 1.2,
        challengeDetail:
          "We completely overhauled the website architecture and design to create an immersive digital showroom for their bikes and accessories. The new design incorporates dynamic product visualization, interactive bike customization tools, and seamless integration with their inventory management system. Every aspect of the user interface was crafted to highlight the technical specifications and quality that Thundertrails' products are known for.",
      },
      {
        id: 1.3,
        challengeDetail:
          "Beyond products, Thundertrails has always been deeply connected to the mountain biking community, sponsoring events and producing trail guides. The previous website couldn't effectively feature this content. We developed a content strategy that integrates their blog, event calendar, and trail maps with the shopping experience, strengthening customer engagement and establishing Thundertrails as an authority in the mountain biking world.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "The new ecommerce platform dramatically improved performance metrics across the board. Page load times decreased by 65% (based on Largest Contentful Paint measurements), while the conversion rate increased by 38%. The enhanced product visualization and customization features contributed to a 42% increase in average order value, and overall sales grew by 92% compared to the previous year.",
      },
      {
        id: 1.5,
        resultDetail:
          "Thundertrails has successfully elevated its brand positioning in the digital space, aligning with its premium in-store experience. The integrated content strategy has boosted organic traffic by 55% and increased newsletter signups by 143%. The platform's scalable architecture now provides Thundertrails with the foundation they need to expand their online presence nationally while maintaining the personalized service their customers expect.",
      },
    ],
    gallery: [
      {
        id: 1.6,
        src: ERREntals,
      },
      {
        id: 1.7,
        src: Chuxly,
      },
      {
        id: 1.8,
        src: Honey,
      },
      {
        id: 1.9,
        src: ERREntals,
      },
      {
        id: 2.99,
        src: Chuxly,
      },
      {
        id: 2.98,
        src: Honey,
      },
      {
        id: 2.97,
        src: ERREntals,
      },
      {
        id: 2.96,
        src: Chuxly,
      },
      {
        id: 2.95,
        src: Honey,
      },
    ],
  },
] as const;
