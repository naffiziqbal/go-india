import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Stories from "@/components/Stories";
import { getData } from "@/utils/getData";
import React from "react";

const page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-row *:duration-500">
      <Navbar />
      <div className="flex md:flex-row flex-col gap-6 *:duration-500 h-screen overflow-hidden justify-between w-full mx-auto">
        <Card data={data} />
        <Stories />
      </div>
    </div>
  );
};

export default page;
