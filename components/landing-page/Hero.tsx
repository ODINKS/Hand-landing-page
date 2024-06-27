import React from "react";

function Hero() {
  return (
    <section className="min-h-[87vh] bg-[url('/hero_img.png')] bg-cover md:bg-contain bg-center flex justify-center py-20 px-2">
      <h1 className="font-bold text-3xl lg:text-6xl flex flex-col gap-3">
        Let&apos;s create something great together.
      </h1>
    </section>
  );
}

export default Hero;
