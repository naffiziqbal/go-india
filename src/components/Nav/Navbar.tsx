"use client";
import React, { useState } from "react";
import { BiArrowBack, BiBell } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); //? Nav Action
  return (
    <div
      className={` lg:relative absolute h-screen duration-500 z-50 ${
        navOpen ? "md:w-1/3  w-1/2" : "w-0"
      }  bg-blue-500 text-white border `}
    >
      {/* Action Button ========================================== */}

      <div className="absolute -right-5 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="bg-blue-600  opacity-25 hover:opacity-100 duration-500 rounded text-white"
        >
          <BiArrowBack
            className={` rounded ${
              navOpen
                ? "w-6 h-16 rotate-0 duration-500"
                : "w-6 h-16 rotate-180 duration-500"
            }`}
          />
        </button>
      </div>

      {/* Users ========================================== */}

      <section
        className={`flex items-center justify-around min-h-16 hover:bg-blue-900 *:cursor-pointer duration-300 ${
          navOpen ? "" : "hidden"
        }`}
      >
        <span className="flex items-center gap-2">
          <RxAvatar className="w-8 h-8" />
          Hello, <strong>User</strong>
        </span>
        <BiBell className="w-6 h-6" />
      </section>
      <hr className="" />
      {/* Nav Links========================================== */}
      <section className={`${navOpen ? "" : "hidden"} duration-300`}>
        <Navlinks />
      </section>
    </div>
  );
};

export default Navbar;
