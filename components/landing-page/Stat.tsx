import React from "react";
import { statData } from "./utils/data";

function Stat() {
  return (
    <section className="bg-[#101010] flex justify-around text-white py-8 px-4">
      {statData.map((stat, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-yellow-400 text-xl lg:text-3xl font-semibold">{stat.stat}</p>
            <p className="text-sm">{stat.desc}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Stat;
