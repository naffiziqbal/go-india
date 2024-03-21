"use client";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";

const Heart = ({ likes }: any) => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex items-center " onClick={() => setLike(!like)}>
      {like ? (
        <BiHeart className="text-red-500 fill-red-500 duration-200" />
      ) : (
        <BiHeart />
      )}
      {likes}K
    </div>
  );
};

export default Heart;
