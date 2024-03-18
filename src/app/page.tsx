import Card from "@/components/Card";
import { getData } from "@/utils/getData";
import React from "react";

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default page;
