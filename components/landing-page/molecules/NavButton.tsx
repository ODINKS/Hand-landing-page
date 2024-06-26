import React from "react";
import { NavButtonProps } from "../utils/types";

function NavButton({ content = "Add content", className }: NavButtonProps) {
  return (
    <button className={`px-6 py-2 bg-[#0B0B0B] text-white rounded-lg ${className}`}>{content}</button>
  );
}

export default NavButton;
