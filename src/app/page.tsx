import Image from "next/image";
// import {allBlogs} from "contentlayer/generated";
import allBlogs from "@/app/FakeBlogs"
import HomeCoverSection from "@/component/HomeCoverSection";
import FeaturedPosts from "@/component/FeaturedPosts";
import RecentPosts from "@/component/RecentPosts";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
