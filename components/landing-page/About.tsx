import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="flex flex-col gap-6 lg:gap-20 px-10 py-16 lg:px-20 lg:py-24">
      <div className="flex flex-col gap-6 lg:gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-start">Who we are</h1>
        <p className="text-xl">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      <Image
        src={"about_img.svg"}
        alt="Orange fruit background"
        width={1000}
        height={1000}
        className="w-full lg:h-screen"
      />
    </section>
  );
}

export default About;
