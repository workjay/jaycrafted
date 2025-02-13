import AboutMe from "@/components/sections/AboutMe";
import ContactUs from "@/components/sections/ContactUs";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Works />
      <ContactUs />
    </>
  );
}
