import About from "@/components/landing-page/About";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import Team from "@/components/landing-page/Team";

export default function LandingPage() {
  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <About />
      <Team />
    </main>
  );
}
