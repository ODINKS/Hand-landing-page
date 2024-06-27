import React from "react";
import { LogoProps } from "../utils/types";

function Logo({ className }: LogoProps) {
  return (
    <span className={`font-semibold text ${className}`}>Hand</span>
  );
}

export default Logo;
