import Card from "@/components/Card";
import Stories from "@/components/Stories";
import { getData } from "@/utils/getData";
import React from "react";

const page = async () => {
  const data = await getData();
  return (
    <div className="flex md:flex-row flex-col gap-6">
      <Card data={data} />
      <Stories />
    </div>
  );
};

export default page;
