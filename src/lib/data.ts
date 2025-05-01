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
  // {
  //   id: 4,
  //   title: "Specialized E-commerce Solutions",
  //   description:
  //     "Businesses with specific e-commerce models or unique requirements that need customized solutions.",
  //   price: "Custom",
  //   timeframe: "Varies",
  //   features:
  //     "Tailored solutions for specialized e-commerce models including B2B portals, multi-vendor marketplaces, subscription-based platforms, digital product stores, service booking systems, and rental e-commerce platforms. Each solution includes customized features specifically designed for your unique business model and requirements.",
  // },
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
  {
    id: 2,
    title: "Chuxly",
    slug: "chuxly",
    src: Chuxly,
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
    platform: "Shopify Plus with React",
    href: "https://chuxly-audio.vercel.app/",
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
    gallery: [
      {
        id: 2.6,
        src: ERREntals,
      },
      {
        id: 2.7,
        src: Chuxly,
      },
      {
        id: 2.8,
        src: Honey,
      },
      {
        id: 2.9,
        src: ERREntals,
      },
      {
        id: 3.99,
        src: Chuxly,
      },
      {
        id: 3.98,
        src: Honey,
      },
      {
        id: 3.97,
        src: ERREntals,
      },
      {
        id: 3.96,
        src: Chuxly,
      },
      {
        id: 3.95,
        src: Honey,
      },
    ],
  },
  {
    id: 3,
    title: "Golden Drips",
    slug: "golden-drips",
    src: Honey,
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
    platform: "WooCommerce with WordPress",
    href: "https://golden-drips-honey.vercel.app/",
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
    gallery: [
      {
        id: 3.6,
        src: ERREntals,
      },
      {
        id: 3.7,
        src: Chuxly,
      },
      {
        id: 3.8,
        src: Honey,
      },
      {
        id: 3.9,
        src: ERREntals,
      },
      {
        id: 4.99,
        src: Chuxly,
      },
      {
        id: 4.98,
        src: Honey,
      },
      {
        id: 4.97,
        src: ERREntals,
      },
      {
        id: 4.96,
        src: Chuxly,
      },
      {
        id: 4.95,
        src: Honey,
      },
    ],
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: ERREntals,
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
    platform: "Next.js with Stripe integration",
    href: "https://elite-retreat-rentals.vercel.app/",
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
    gallery: [
      {
        id: 4.6,
        src: ERREntals,
      },
      {
        id: 4.7,
        src: Chuxly,
      },
      {
        id: 4.8,
        src: Honey,
      },
      {
        id: 4.9,
        src: ERREntals,
      },
      {
        id: 5.99,
        src: Chuxly,
      },
      {
        id: 5.98,
        src: Honey,
      },
      {
        id: 5.97,
        src: ERREntals,
      },
      {
        id: 5.96,
        src: Chuxly,
      },
      {
        id: 5.95,
        src: Honey,
      },
    ],
  },
] as const;
