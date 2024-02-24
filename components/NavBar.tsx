import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";


const NavBar = () => {
  const menu = ["Home", "History", "Help"];

  return (
    <div className="flex items-center justify-between px-10 border">
      <div className="flex">
        <Image src={"/logo.png"} alt="logo" width={160} height={160} />
        <div className="hidden md:flex items-center">
          {menu.map((item, index) => {
            return (
              <button key={index} className="hover:bg-slate-300 text-2xl mx-5 p-3 rounded-md transition ease-in-out duration-350">
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
