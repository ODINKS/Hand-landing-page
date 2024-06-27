import Link from "next/link";
import React from "react";
import { navData } from "./utils/data";
import NavButton from "./molecules/NavButton";
import Logo from "./molecules/Logo";

function Header() {
  return (
    <header className="w-full fixed inset-x-0 top-0 flex justify-around text-xs md:text-sm lg:text-base px-2 md:px-0 py-4 bg-[#F5F4F6]">
      <Logo />
      <nav className="self-center hidden md:block">
        <ul className="flex gap-5">
          {navData.map((nav, index) => {
            return (
              <li key={index}>
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <NavButton content="Start a Project" />
    </header>
  );
}

export default Header;
