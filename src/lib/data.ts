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
    src: Thundertrails,
  },
  {
    id: 2,
    title: "Chuxly",
    src: Chuxly,
  },
  {
    id: 3,
    title: "Golden Drips",
    src: Honey,
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    src: ERREntals,
  },
] as const;
