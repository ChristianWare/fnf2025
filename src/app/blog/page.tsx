import { prisma } from "@/lib/prisma";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/blog.jpg";
import PostCard from "@/components/PostCard/PostCard";
import OtherThings from "@/components/OtherThings/OtherThings";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Contact2 from "@/components/Contact2/Contact2";

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: { title: true, slug: true, createdAt: true },
  });

  return (
    <main>
      <PageIntro
        title='Insights & Resources'
        introTitle='Blog'
        src={Img1}
        copy='Stay updated with the latest e‑commerce trends, tips, and best practices to help grow your online business.'
      />

      <section className='post-grid'>
        {posts.map((p) => (
          <PostCard
            key={p.slug}
            title={p.title}
            slug={p.slug}
            date={p.createdAt}
          />
        ))}
      </section>

      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
