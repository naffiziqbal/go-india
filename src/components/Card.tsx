// spell-checker:disable
import { ICard } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { BiComment, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const Card = ({ data }: any) => {
  return (
    <div className="px-3 w-full">
      <h2 className="uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
        Disscussion Forum
      </h2>
      {data?.map((data: ICard) => (
        <div
          key={data.id}
          className="flex  my-5 flex-1 min-h-20 shadow  hover:shadow-slate-300 duration-500 hover:shadow-2xl rounded-md px-3 p-3 max-w-2xl"
        >
          <Image
            className="w-fit h-fit mix-blend-screen bg-white rounded-full"
            src={data?.image}
            alt="some"
            width={30}
            height={30}
          />
          <div className="w-full px-3">
            <div className="flex items-center gap-3 w-full mb-3">
              <h3 className="md:text-xl font-semibold text-nowrap">
                {data?.title}
              </h3>
              <p className="capitalize text-nowrap px-3 text-sm py-1 bg-blue-500 rounded-full text-white">
                {data.tag}
              </p>
              <span className="text-nowrap text-blue-500 font-semibold text-end w-full">
                {data.creationTime}
              </span>
            </div>
            <p className="max-w-2xl text-sm md:text-lg">{data.description}</p>
            <div className="flex justify-around my-3 *:text-lg *:cursor-pointer">
              <span className="flex items-center">
                <BiHeart /> {data.likes}K
              </span>
              <span className="flex items-center">
                <BsEye /> {data.likes}K
              </span>
              <span className="flex items-center">
                <BiComment />
                {data.likes}K
              </span>
              <span className="flex items-center">
                <BiShare /> {data.likes}K
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;