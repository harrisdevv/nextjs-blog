"use client";
import ContactForm from "@/component/ContactForm";
import siteMetadata from "@/util/SourceMetaData";
import Image from "next/image";
import { motion } from "framer-motion";
import { metadata } from "@/app/contactMetadata";

export default function Contact() {
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft}
      transition={{ duration: 1 }}
    >
      <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
          <Image
            src={"/connect-with-me.gif"}
            alt="Let's connect with me"
            className="w-full object-cover"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
          <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
            Let's Connect!
          </h2>
          <ContactForm />
        </div>
      </section>
    </motion.div>
  );
}
