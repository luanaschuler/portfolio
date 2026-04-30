import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        // O gradiente ajuda a integrar a imagem com sua paleta de cores (Navy, Deep Purple e Gold)
        backgroundImage: `url('/mainbg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed", // Isso cria um efeito de profundidade elegante ao rolar
      }}
    >
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
