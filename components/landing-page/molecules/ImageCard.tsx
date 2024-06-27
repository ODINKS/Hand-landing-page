import Image from "next/image";
import React from "react";
import { ImageCardProps } from "../utils/types";

function ImageCard({ src, alt, className, fullName, role }: ImageCardProps) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className={`${className}`}
      />
      <div>
        <p>{fullName}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default ImageCard;
