import React from "react";
import { imageData } from "./utils/data";
import ImageCard from "./molecules/ImageCard";

function Team() {
  return (
    <section className="border border-black flex flex-col gap-6 lg:gap-20 px-10 py-16 lg:px-20 lg:py-28">
      <h1 className="text-3xl lg:text-3xl lg:font-bold self-center">
        Meet the heroes behind the magic
      </h1>
      <div className="flex gap-14 self-center">
        {imageData.map((image, index) => {
          return (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              fullName={image.fullName}
              role={image.role}
              className="border border-black w-56 h-56"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Team;
