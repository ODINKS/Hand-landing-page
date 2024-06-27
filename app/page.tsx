"use client";

import { Icons } from "@/components/icons";
import About from "@/components/landing-page/About";
import Contact from "@/components/landing-page/Contact";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import Stat from "@/components/landing-page/Stat";
import Team from "@/components/landing-page/Team";
import { navData } from "@/components/landing-page/utils/data";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(true);
  }
  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <main className="pt-20">
      {isOpen && (
        <aside className="fixed inset-0 z-20 flex flex-col items-center h-screen justify-center gap-10 bg-white/80">
          <button onClick={closeMenu}>
            <Icons.cancel />
          </button>
          <nav className="flex flex-col gap-5">
            {navData.map((nav, index) => {
              return (
                <Link href={nav.href} key={index} className="font-semibold">
                  {nav.name}
                </Link>
              );
            })}
          </nav>
        </aside>
      )}
      <Header onClick={openMenu} />

      <Hero />
      <About />
      <Team />
      <Stat />
      <Contact />
      <Footer />
    </main>
  );
}
