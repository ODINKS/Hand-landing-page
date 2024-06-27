import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="border border-black h-[87vh]">
      <Image src={"next.svg"} alt="Hand" width={1000} height={1000} className="w-full h-full" />
    </section>
  );
}

export default Hero;
