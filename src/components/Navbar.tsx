"use client";
import React, { useState } from "react";
import { BiArrowBack, BiBell } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import NavAction from "./UI/Buttons/NavAction";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);
  return (
    <div
      className={` md:relative absolute h-screen duration-500 z-50 ${
        navOpen ? "md:w-[50rem] w-1/2" : "w-0"
      }  bg-blue-900 border  text-white`}
    >
      <div className="absolute -right-5 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="bg-blue-600 opacity-25 hover:opacity-100 duration-500 rounded text-white"
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

      <section className="flex items-center justify-around min-h-16">
        <RxAvatar className="w-8 h-8" />
        <p>
          Hello, <strong>User</strong>
        </p>
        <BiBell className="w-6 h-6" />
      </section>
    </div>
  );
};

export default Navbar;
