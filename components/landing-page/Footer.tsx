import React from "react";
import Logo from "./molecules/Logo";
import NavButton from "./molecules/NavButton";
import { Icons } from "../icons";

function Footer() {
  return (
    <footer className="bg-gray-200 flex flex-col gap-10 px-10 py-16 lg:px-20 lg:pt-20 lg:pb-8 w-full">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between pb-4">
        {/* Left */}
        <div className="flex flex-col items-center gap-4">
          <Logo className="self-center md:self-start" />
          <p className="text-xs md:text-sm">We love what we do and create partnerships</p>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4">
          <NavButton content="Start a project" className="self-center md:self-end" />
          <p className="self-center text-sm">hello@devseal.tech</p>
          <div className="flex flex-col md:flex-row gap-4 ">
            <span className="bg-gray-400 rounded-full p-1.5 self-center">
              <Icons.x className="w-5 h-5" />
            </span>
            <span className="bg-gray-400 rounded-full p-1.5 self-center">
              <Icons.linkedIn className="w-5 h-5" />
            </span>
            <span className="bg-gray-400 rounded-full p-1.5 self-center">
              <Icons.facebook className="w-5 h-5" />
            </span>
            <span className="bg-gray-400 rounded-full p-1.5 self-center">
              <Icons.instagram className="w-5 h-5" />
            </span>
            <Logo className="self-center" />
          </div>
        </div>
      </div>

      <div className="w-full md:px-28">
        <hr className="border border-slate-700" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between w-full text-xs md:text-base">
        <p>&copy; 2024 hand. All Rights Reserved</p>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
          <p>Privacy Policy</p>
          <p>Media Kit</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
