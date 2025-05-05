import ParticleBackground from "@/components/ParticleBackground";
import { NavigationBar } from "@/components/NavigationBar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <ParticleBackground />
      </div>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
