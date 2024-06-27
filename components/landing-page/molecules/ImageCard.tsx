import Image from "next/image";
import React from "react";
import { ImageCardProps } from "../utils/types";

function ImageCard({ src, alt, className, fullName, role }: ImageCardProps) {
  return (
    <div className="px-5 py-4 flex flex-col gap-6 rounded-lg shadow-lg shadow-slate-300 pb-7 border border-gray-100">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className={`bg-cover ${className}`}
      /><div className="flex flex-col gap-1">
        <p className="font-bold text-lg">{fullName}</p>
        <p className="text-gray-500 text-sm font-medium">{role}</p>
      </div>
    </div>
  );
}

export default ImageCard;
