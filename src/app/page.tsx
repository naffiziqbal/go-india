import Card from "@/components/Card";
import Navbar from "@/components/Nav/Navbar";
import Stories from "@/components/Stories";
import { Tabs } from "@/components/Tabs/Tabs";
import React from "react";

const page = async () => {
  //* =========Tab Options
  const tabs = [
    {
      id: "tab1",
      title: (
        <h2 className="uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
          Discussion Forum
        </h2>
      ),
      content: <Card />,
    },
    {
      id: "tab2",
      title: (
        <h2 className="uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
          Stories
        </h2>
      ),
      content: <Stories />,
    },
  ];
  return (
    <div className="flex flex-row *:duration-500 m-0 p-0 w-full">
      <div className="md:hidden w-full h-screen overflow-auto">
        <Tabs tabs={tabs} defaultSelectedTab="tab1" />
      </div>
      <div className="md:flex hidden md:flex-row flex-col gap-6 *:duration-500 md:h-screen overflow-hidden justify-between w-full mx-auto">
        <Card />
        <Stories />
      </div>
    </div>
  );
};

export default page;
