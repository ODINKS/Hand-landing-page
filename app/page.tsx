import About from "@/components/landing-page/About";
import Contact from "@/components/landing-page/Contact";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import Stat from "@/components/landing-page/Stat";
import Team from "@/components/landing-page/Team";

export default function LandingPage() {
  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <About />
      <Team />
      <Stat />
      <Contact />
      <Footer />
    </main>
  );
}
