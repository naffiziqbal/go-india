// spell-checker:disable
import { ICard } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { BiComment, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const Card = ({ data }: any) => {
  return (
    <div className="px-3 w-full h-screen overflow-auto">
      <h2 className="md:block hidden uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
        Disscussion Forum
      </h2>

      {/* Card=========================== */}
      {data?.map((data: ICard) => (
        <div
          key={data.id}
          className="flex my-5 flex-1 min-h-20 shadow  hover:shadow-slate-300 duration-500 hover:shadow-2xl rounded-md md:px-3 md:p-3 py-3 max-w-2xl"
        >
          <Image
            className="w-fit h-fit mix-blend-screen bg-white rounded-full"
            src={data?.image}
            alt="some"
            width={30}
            height={30}
          />
          <div className="w-full px-3">
            <div className="flex md:items-center items-start gap-3 w-full mb-3">
              <span className="flex justify-between w-full">
                <h3 className="md:text-xl font-semibold w-fit">
                  {data?.title}
                </h3>
                <p className="capitalize text-nowrap md:text-sm text-xs py-1 bg-blue-500 rounded-full text-white h-fit px-3">
                  {data.tag}
                </p>
              </span>
              <span className="text-nowrap text-blue-500 font-semibold text-end w-fit md:text-sm text-xs">
                {data.creationTime}
              </span>
            </div>
            <p className="max-w-2xl text-sm md:text-lg">{data.description}</p>

            {/* Actions ==================================== */}
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
