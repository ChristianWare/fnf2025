import Thundertrails from "../../public/images/thunder.jpg";
import Chuxly from "../../public/images/chuxly.png";
import Honey from "../../public/images/honey.jpg";
import ERREntals from "../../public/images/erRentals.png";
import Thunder from "../../public/icons/lightning.svg";
import Headphones from "../../public/icons/headphones.svg";
import Bee from "../../public/icons/bee2.svg";
import Rentals from "../../public/icons/rentals.svg";

export const pricing = [
  {
    id: 1,
    title: "Starter Store",
    description: "For new brands or entrepreneurs with a small product line.",
    price: "5,900",
    timeframe: "4–6 weeks",
    features:
      "Custom design on Shopify, WooCommerce, or Wix, mobile‑responsive layout, up to 25 products, basic payments, standard shipping & tax, core SEO, launch support.",
  },
  {
    id: 2,
    title: "Growth Store",
    description:
      "For established shops that need richer features and a larger catalog.",
    price: "7,500",
    timeframe: "8–10 weeks",
    features:
      "Everything in Starter plus advanced UX, up to 100 products, extra payment gateways, complex shipping rules, product filters, wish‑lists, basic CRM and email setup, 30‑day post‑launch support.",
  },
  {
    id: 3,
    title: "Enterprise Solution",
    description: "For high‑volume or highly customised e‑commerce operations.",
    price: "10,000",
    timeframe: "12–16 weeks",
    features:
      "Everything in Growth plus premium UI, unlimited products, custom features, full ERP/CRM integration, multi‑currency, advanced analytics, personalisation, CRO tweaks, 60‑day post‑launch support.",
  },
  // {
  //   id: 4,
  //   title: "Specialized E-commerce Solutions",
  //   description:
  //     "Businesses with specific e-commerce models or unique requirements that need customized solutions.",
  //   price: "Custom",
  //   timeframe: "Varies",
  //   features:
  //     "Tailored solutions for specialized e-commerce models including B2B portals, multi-vendor marketplaces, subscription-based platforms, digital product stores, service booking systems, and rental e-commerce platforms. Each solution includes customized features specifically designed for your unique business model and requirements.",+
  // },
] as const;

export const pricingii = [
  {
    id: 1,
    title: "Booking Launch Plan",
    description:
      "For solo operators or very small teams that need a simple, reliable booking site.",
    price: "350 / month",
    timeframe: "6‑month minimum term",
    features:
      "Custom mobile‑ready booking site, 4 developer hours per month, Stripe deposits, automated reminders, 24‑hour support reply, monthly performance report.",
  },
  {
    id: 2,
    title: "Booking Growth Plan",
    description:
      "For service brands with up to fifteen staff who want richer UX and basic marketing automations.",
    price: "425 / month",
    timeframe: "6‑month minimum term",
    features:
      "All Launch features plus 8 monthly dev hours, multi‑staff calendar sync, gift‑card and package builder, abandoned‑booking emails, same‑day support, quarterly A/B test.",
  },
  {
    id: 3,
    title: "Booking Scale Plan",
    description:
      "For multi‑location salons, luxury fleets, or rental portfolios that need custom integrations.",
    price: "500 / month",
    timeframe: "12‑month term (setup fee waived)",
    features:
      "All Growth features plus 12 monthly dev hours, custom API link to PMS/ERP, dynamic pricing rules, 4‑hour support reply, advanced analytics dashboard.",
  },
] as const;


export const projects = [
  {
    id: 1,
    title: "Thundertrails",
    slug: "thundertrails",
    src: Thundertrails,
    icon: Thunder,
    video: "/videos/thunder.mp4",
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
    platform: "Wix E-commerce",
    tech: "Next.js",
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
    stats: [
      { id: 1, title: "Decrease in page‑load time", desc: "‑65%" },
      { id: 2, title: "Lift in conversion rate", desc: "+38%" },
      { id: 3, title: "Increase in average order value", desc: "+42%" },
      { id: 4, title: "Growth in year‑over‑year sales", desc: "+92%" },
    ],
  },
  {
    id: 2,
    title: "Chuxly",
    slug: "chuxly",
    src: Chuxly,
    icon: Headphones,
    video: "/videos/chuxly.mp4",
    description:
      "Founded by audio engineers with a passion for exceptional sound quality, Chuxly emerged in 2021 as a boutique brand dedicated to creating premium headphones and portable speakers. Combining cutting-edge acoustic technology with elegant, minimalist design, Chuxly quickly gained recognition among audiophiles and style-conscious consumers alike. As demand for their products grew beyond their flagship store, Chuxly needed an online platform that could communicate the unique sensory experience of their products while handling their expanding inventory and customer base.",
    tags: [
      {
        id: 2.98,
        tag: "Ecommerce",
      },
      {
        id: 2.99,
        tag: "Audio Equipment",
      },
    ],
    h1: "Elevating the digital experience for Chuxly's premium audio equipment",
    year: 2025,
    platform: "Shopify",
    tech: "Next.js",
    href: "https://www.chuxly.com/",
    challenge: [
      {
        id: 2.1,
        challengeDetail:
          "Chuxly faced the unique challenge of selling high-end audio products online where customers couldn't physically experience the sound quality. Their initial website lacked the immersive elements needed to convey the exceptional audio experience and craftsmanship that justified the premium pricing. The site also struggled with inventory management as their product line expanded, resulting in frustrating out-of-stock situations and missed sales opportunities.",
      },
      {
        id: 2.2,
        challengeDetail:
          "We reimagined the entire customer journey to create a virtual showroom that emphasizes the sensory qualities of Chuxly's products. The redesigned platform features interactive 3D product models, audio demonstrations with comparative sound samples, and detailed acoustic specifications presented through intuitive visualizations. Each product page tells the story of the design philosophy and engineering precision behind the item, helping customers understand the value proposition beyond mere specifications.",
      },
      {
        id: 2.3,
        challengeDetail:
          "To build credibility and foster community engagement, we developed an integrated content hub featuring expert reviews, listening guides, and artist collaborations. The platform now includes a subscription-based exclusive content section where members get early access to limited edition releases and personalized audio profiles. The robust backend system connects seamlessly with their inventory and manufacturing systems, providing real-time stock updates and production timelines for custom orders.",
      },
    ],
    results: [
      {
        id: 2.4,
        resultDetail:
          "The enhanced digital experience has transformed Chuxly's online sales performance. The immersive product presentations and technical demonstrations have reduced return rates by 47% and increased conversion rates by 58% for their highest-priced items. Overall, online revenue has increased by 126% within six months of launch, with the average time spent on product pages increasing from 45 seconds to over 3 minutes.",
      },
      {
        id: 2.5,
        resultDetail:
          "The content strategy has established Chuxly as a thought leader in the audio space, with their listening guides and technical articles generating significant organic traffic and social media engagement. The membership program has exceeded expectations with over 10,000 subscribers in the first quarter, creating a reliable revenue stream and valuable customer insights. With the robust and scalable architecture in place, Chuxly is now expanding into international markets with localized content and payment options.",
      },
    ],
    stats: [
      { id: 1, title: "Reduction in product return rate", desc: "‑47%" },
      { id: 2, title: "Conversion lift on flagship items", desc: "+58%" },
      { id: 3, title: "Increase in online revenue", desc: "+126%" },
      { id: 4, title: "Avg. time on product page", desc: "3 min 05 s" },
    ],
  },
  {
    id: 3,
    title: "Golden Drips",
    slug: "golden-drips",
    src: Honey,
    icon: Bee,
    video: "/videos/honey.mp4",
    description:
      "Golden Drips began as a family-owned apiary in 2018, producing small-batch, artisanal honey varieties from carefully selected floral sources. Their commitment to sustainable beekeeping practices and exceptionally pure, unprocessed honey products quickly earned them a devoted following at farmers' markets and specialty food stores. As demand for their premium honey and bee pollen products surged, Golden Drips recognized the need to expand their reach beyond local markets while maintaining the artisanal quality and personal connection that defined their brand.",
    tags: [
      {
        id: 3.98,
        tag: "Ecommerce",
      },
      {
        id: 3.99,
        tag: "Artisanal Food",
      },
    ],
    h1: "Crafting a luxurious digital storefront for Golden Drips' premium honey collection",
    year: 2025,
    platform: "WooCommerce",
    tech: "Next.js",
    href: "https://golden-tau-ten.vercel.app/",
    challenge: [
      {
        id: 3.1,
        challengeDetail:
          "Golden Drips' existing online presence consisted of a basic informational website and third-party marketplace listings that failed to communicate the premium nature of their products or the story behind their sustainable beekeeping practices. The brand struggled to differentiate themselves in the growing artisanal honey market and lacked the digital infrastructure to handle direct-to-consumer sales efficiently, especially for their subscription offerings and gift packages.",
      },
      {
        id: 3.2,
        challengeDetail:
          "We developed a richly textured digital experience that captures the sensory aspects of Golden Drips' honey varieties through high-definition macro photography, color profiles, and detailed tasting notes. The custom-designed product pages highlight the specific floral sources, harvesting locations, and seasonal characteristics that make each honey variety unique. An interactive flavor wheel helps customers discover products based on their taste preferences, while the sustainable practices section immerses visitors in the brand's environmental commitments through video documentaries and illustrated guides.",
      },
      {
        id: 3.3,
        challengeDetail:
          "To enhance the gifting experience, we created a custom gift builder that allows customers to create personalized honey collections with custom labels and packaging options. The subscription management system provides flexible delivery schedules and seasonal product rotations based on customer preferences. Behind the scenes, the platform integrates with their inventory and production systems to manage the seasonality of their products and ensure availability aligns with harvesting cycles.",
      },
    ],
    results: [
      {
        id: 3.4,
        resultDetail:
          "Golden Drips has successfully transitioned from a primarily wholesale business model to a thriving direct-to-consumer brand. Online sales now account for 65% of total revenue, with a 173% increase in year-over-year growth. The average order value has increased by 89% compared to their previous marketplace listings, and the subscription program now has over 5,000 active members with a remarkable 92% retention rate after six months.",
      },
      {
        id: 3.5,
        resultDetail:
          "The brand storytelling elements have significantly strengthened Golden Drips' market positioning, with engagement metrics showing that 78% of first-time visitors explore the sustainability content before making a purchase. Their educational content on bee conservation has generated substantial media coverage and partnership opportunities with environmental organizations. The platform's scalability has enabled Golden Drips to expand their product line to include limited edition seasonal releases and collaborations with other artisanal food producers, further cementing their reputation as leaders in the premium honey market.",
      },
    ],
    stats: [
      { id: 1, title: "Year‑over‑year online growth", desc: "+173%" },
      { id: 2, title: "Revenue now DTC (direct‑to‑consumer)", desc: "65%" },
      { id: 3, title: "Increase in average order value", desc: "+89%" },
      { id: 4, title: "Subscription program retention", desc: "92%" },
    ],
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: ERREntals,
    icon: Rentals,
    video: "/videos/rentals.mp4",
    description:
      "Elite Retreat Rentals was established in 2022 by a team of hospitality veterans with a vision to transform the vacation rental experience in Phoenix, Arizona. Their portfolio features three meticulously designed luxury properties, each offering a unique aesthetic and amenities while maintaining consistent high standards of comfort and service. As the Phoenix tourism market became increasingly competitive, Elite Retreat Rentals sought to break away from dependency on third-party booking platforms by creating a direct booking system that would showcase their properties' distinctive features and allow for a more personalized guest experience.",
    tags: [
      {
        id: 4.98,
        tag: "Hospitality",
      },
      {
        id: 4.99,
        tag: "Booking Platform",
      },
    ],
    h1: "Designing a seamless direct booking experience for Elite Retreat Rentals' luxury properties",
    year: 2025,
    platform: "n/a",
    tech: "Next.js + MongoDB + Node.js",
    href: "https://case-study-one-git-main-christianwares-projects.vercel.app/",
    challenge: [
      {
        id: 4.1,
        challengeDetail:
          "Elite Retreat Rentals was losing substantial revenue to third-party booking fees while struggling with the limitations these platforms imposed on property presentation and guest communication. Their existing website was primarily informational with basic contact forms, requiring manual reservation management and payment processing. Without a proper calendar synchronization system, they frequently encountered double-booking issues and missed opportunities during peak seasons when managing listings across multiple platforms.",
      },
      {
        id: 4.2,
        challengeDetail:
          "We developed a comprehensive direct booking platform that showcases each property through immersive virtual tours, 4K video walkthroughs, and interactive floor plans that allow potential guests to visualize their stay before booking. The intuitive booking engine features real-time availability, dynamic pricing based on seasonality and demand, and a streamlined checkout process with multiple payment options. Each property listing highlights its unique character through neighborhood guides, curated experience recommendations, and comprehensive amenity details.",
      },
      {
        id: 4.3,
        challengeDetail:
          "To enhance the guest experience beyond the booking process, we implemented a secure guest portal where visitors can manage their reservations, access digital guidebooks, arrange additional services, and communicate directly with property managers. The backend system integrates with their property management software, cleaning service schedules, and smart home systems to ensure seamless operations. A sophisticated analytics dashboard provides insights into booking patterns, revenue optimization opportunities, and guest satisfaction metrics.",
      },
    ],
    results: [
      {
        id: 4.4,
        resultDetail:
          "The direct booking platform has fundamentally transformed Elite Retreat Rentals' business model and profitability. Direct bookings now account for 78% of all reservations, representing a 210% increase compared to their previous third-party-dependent approach. The elimination of commission fees has increased profit margins by 32% while allowing for more competitive pricing strategies during off-peak seasons. The average stay duration has increased by 2.4 nights, and the enhanced presentation has contributed to a 45% increase in premium add-on services.",
      },
      {
        id: 4.5,
        resultDetail:
          "The improved guest communication system has resulted in a 98% satisfaction rating and a 67% repeat booking rate within the first year. The detailed analytics have enabled more effective marketing strategies, with targeted promotions increasing occupancy rates during traditionally slower periods by 41%. With the success of their direct booking model, Elite Retreat Rentals is now expanding their portfolio with two additional luxury properties in Scottsdale, all seamlessly integrated into their existing platform. Their reputation as a premier luxury accommodation provider in the Phoenix metropolitan area continues to grow, with features in several travel publications highlighting their innovative approach to the vacation rental experience.",
      },
    ],
    stats: [
      { id: 1, title: "Bookings made directly", desc: "78%" },
      { id: 2, title: "Profit‑margin increase", desc: "+32%" },
      { id: 3, title: "Increase in avg. stay length", desc: "+2.4 nights" },
      { id: 4, title: "Occupancy lift in slow periods", desc: "+41%" },
    ],
  },
] as const;
