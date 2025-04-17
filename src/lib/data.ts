import Thundertrails from "../../public/images/thunder.jpg";
// import Chuxly from "../../public/images/chuxly.png";
// import Honey from "../../public/images/honey.jpg";
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
      "Surf, sun and style; the three passions that nudged the founder of Hang Eleven to start the brand in 2019. Since then, the brand has been clothing the modern, fashion-forward men of the Netherlands and has ambitions to go further afield. But before they could take on the international scene, a new webshop was needed to refresh and elevate the online presence.",
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
    h1: "Launching a refreshed webshop for Thundertrails to grow internationally",
    year: 2025,
    platform: "Wix E-commerce with Next.js",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Hang Eleven’s previous website was slow, inflexible, and quite basic when it came to functionality. And though they always had great products and a brand story, it wasn’t translating in the most cohesive and inspiring way. That’s where we came in to help guide them into a more mature and future-proof website. ",
      },
      {
        id: 1.2,
        challengeDetail:
          "We redesigned the website to showcase the brand more appealingly. Changing layouts and fonts was a big part of sharpening the look and feel. We creatively organised product pages to enhance the brand identity and shopping experience, for example, using subtle animations and consistent presentation of product content.",
      },
      {
        id: 1.3,
        challengeDetail:
          "The brand had always cared about its content, but the existing website didn’t showcase the campaigns how they imagined. The new website allowed more space for their visual content, therefore serving customers more storytelling elements to build a stronger brand connection and loyalty.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "The migration has made the webshop faster and features far more extensive functionalities to improve customer experience. The loading time decreased by over 60% compared to the previous webshop (loading time based on Largest Contentful Paint (LCP) - Google Core Web Vitals metrics). The average order value increased by 4% and the total sales increased by 88% compared to the previous year.",
      },
      {
        id: 1.5,
        resultDetail:
          "The overall look and feel of the brand is more in line with how they want to present themselves to their customer base locally and internationally.",
      },
    ],
    gallery: [
      {
        id: 1.6,
        src: ERREntals,
      },
      {
        id: 1.7,
        src: ERREntals,
      },
      {
        id: 1.8,
        src: ERREntals,
      },
      {
        id: 1.9,
        src: ERREntals,
      },
      {
        id: 2.99,
        src: ERREntals,
      },
      {
        id: 2.98,
        src: ERREntals,
      },
      {
        id: 2.97,
        src: ERREntals,
      },
      {
        id: 2.96,
        src: ERREntals,
      },
      {
        id: 2.95,
        src: ERREntals,
      },
    ],
  },
] as const;
