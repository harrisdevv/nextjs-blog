'use client'
import { motion } from "framer-motion";

const techSkills = [
  "Figma",
  "JavaScript",
  "TypeScript",
  "Styled Components",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Generative AI",
  "PostgreSQL",
  "Supabase",
  "Docker",
];

const TechSkillsNav = () => {
  return (
    <section
      className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light"
    >
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        I'm comfortable with...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center  xs:justify-start">
        {techSkills.map((item, index) => (
          <motion.li
            key={index}
            className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 cursor-pointer dark:font-normal"
            whileHover={{
              scale: 1.05,
              rotate: 360,
              transition: { duration: 0.5 },
            }}
            style={{
              color: `hsl(${index * (360 / techSkills.length)}, 100%, 50%)`,
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default TechSkillsNav;
