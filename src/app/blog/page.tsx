import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from '../../../public/images/blog.jpg'

export default function BlogPage() {
  return (
    <main>
      <PageIntro
        title='Insights & Resources'
        introTitle='Blog'
        src={Img1}
        copy='Stay updated with the latest e-commerce trends, tips, and best practices to help grow your online business.'
      />
    </main>
  );
}
