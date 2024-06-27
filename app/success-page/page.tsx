import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";

function SuccessPage() {
  return (
    <section className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="relative border border-slate-300 bg-gray-200 flex flex-col gap-5 items-center w-[30vw] h-[60vh] shadow-lg rounded-md justify-center overflow-hidden">
        <div className="w-20 h-20 flex justify-center items-center bg-white rounded-full">
          <Icons.check className="w-10 h-10 text-green-600" strokeWidth={4} />
        </div>
        <p className="italic font-medium">Proposal sent successfully!</p>
        <Link href={"/"} className="flex gap-3">
          <Icons.arrowLeft /> <span>Go back</span>
        </Link>
        <div className="w-32 h-32 absolute -top-4 -left-4 rounded bg-yellow-500 rounded-br-full"></div>
        <div className="w-32 h-32 absolute -bottom-4 -right-4 rounded bg-black rounded-tl-full"></div>
      </div>
    </section>
  );
}

export default SuccessPage;
