import AboutSection from "@/component/AboutSection";
import TechSkillsNav from "@/component/TechSkillsNav";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Discover more about my professional journey and expertise.`,
};

export default function About() {
  return (
    <>
      <AboutSection />
      <TechSkillsNav />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> 
      Got an exciting idea? Let's collaborate! Connect with me 📧 via <Link href="/contact" className="!underline underline-offset-2">this link</Link> and let's bring your vision to life.
      </h2>
    </>
  );
}
