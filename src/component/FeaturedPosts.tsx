"use client";
import { sortBlogsByPublishedDate } from "@/util";
import FirstLayoutBlog from "./FirstLayoutBlog";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import React, { useEffect } from "react";

import SecondLayoutBlog from "./SecondLayoutBlog";
import { motion } from "framer-motion";

interface FeaturedPostsProps {
  blogs: any[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ blogs }) => {
  const sortedBlogs = sortBlogsByPublishedDate(blogs);
  const [ref, inView] = useInView({ triggerOnce: true }); // Hook to track if the component is in view

  useEffect(() => {
    if (inView) {
      // When the component enters the viewport, trigger the animation
      // You can define your animation variants here
    }
  }, [inView]); // Run the effect whenever inView changes

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      ref={ref} // Assign the ref to the container div
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
      variants={slideInFromLeft}
      transition={{ duration: 1, delay: 1 }} // Adjust animation duration and delay
    >
      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Featured Posts
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
          <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
            <FirstLayoutBlog blog={sortedBlogs[1]} />
          </article>
          <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
            <SecondLayoutBlog blog={sortedBlogs[2]} />
          </article>
          <article className="col-span-2 sm:col-span-1 row-span-1 relative">
            <SecondLayoutBlog blog={sortedBlogs[3]} />
          </article>
        </div>
      </section>
    </motion.div>
  );
};

export default FeaturedPosts;
