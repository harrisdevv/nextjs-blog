"use client";
import { sortBlogsByPublishedDate } from "@/util";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import FirstLayoutBlog from "./FirstLayoutBlog";
import { motion } from "framer-motion";

const RecentPosts = ({ blogs }: { blogs: any[] }) => {
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
      transition={{ duration: 1, delay: 0.5 }} // Adjust animation duration and delay
    >
      <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
        <div className="w-full flex  justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Recent Posts
          </h2>
          <Link
            href="/categories/all"
            className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
          >
            view all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
          {sortedBlogs.slice().map((blog, index) => {
            return (
              <article key={index} className="col-span-1 row-span-1 relative">
                {/* <BlogLayoutThree blog={blog} /> */}
                <FirstLayoutBlog blog={blog} />
              </article>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default RecentPosts;
