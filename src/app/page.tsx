import Image from "next/image";
// import {blogs} from "contentlayer/generated";
import blogs from "@/app/FakeBlogs"
import HomeCoverSection from "@/component/HomeCoverSection";
import FeaturedPosts from "@/component/FeaturedPosts";
import RecentPosts from "@/component/RecentPosts";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <FeaturedPosts blogs={blogs} />
      <RecentPosts blogs={blogs} />
    </main>
  );
}
