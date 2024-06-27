import React from "react";

function Hero() {
  return (
    <section className="min-h-[87vh] bg-[url('/hero_img.png')] bg-contain bg-center flex justify-center py-20">
      <h1 className="font-bold text-6xl flex flex-col gap-3">
        <span>Let&apos;s create something </span>
        <span>great together.</span>
      </h1>
    </section>
  );
}

export default Hero;
