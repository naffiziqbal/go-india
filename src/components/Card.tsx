// spell-checker:disable
import { ICard } from "@/types/interface";
import Image from "next/image";
import React from "react";
import { BiComment, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import Heart from "./Ui/Heart";

const Card = () => {
  const data = [
    {
      id: 1,
      image:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      title: "This is a Title of Forum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, natus minus. Rem cumque ea consectetur aspernatur repellendus dolorem voluptate cum reprehenderit ab maiores maxime explicabo repudiandae, perspiciatis delectus ad velit.",
      creationTime: "2mins Ago",
      comments: 2,
      likes: 2,
      shareAbleLink: "something.com",
      views: 4,
      tag: "sector 2",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      title: "This is a Title of Forum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, natus minus. Rem cumque ea consectetur aspernatur repellendus dolorem voluptate cum reprehenderit ab maiores maxime explicabo repudiandae, perspiciatis delectus ad velit.",
      creationTime: "2mins Ago",
      comments: 2,
      likes: 2,
      shareAbleLink: "something.com",
      views: 4,
      tag: "sector 2",
    },
    {
      id: 3,
      image:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      title: "This is a Title of Forum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, natus minus. Rem cumque ea consectetur aspernatur repellendus dolorem voluptate cum reprehenderit ab maiores maxime explicabo repudiandae, perspiciatis delectus ad velit.",
      creationTime: "2mins Ago",
      comments: 2,
      likes: 2,
      shareAbleLink: "something.com",
      views: 4,
      tag: "sector 2",
    },
    {
      id: 4,
      image:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      title: "This is a Title of Forum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, natus minus. Rem cumque ea consectetur aspernatur repellendus dolorem voluptate cum reprehenderit ab maiores maxime explicabo repudiandae, perspiciatis delectus ad velit.",
      creationTime: "2mins Ago",
      comments: 2,
      likes: 2,
      shareAbleLink: "something.com",
      views: 4,
      tag: "sector 2",
    },
    {
      id: 5,
      image:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      title: "This is a Title of Forum",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, natus minus. Rem cumque ea consectetur aspernatur repellendus dolorem voluptate cum reprehenderit ab maiores maxime explicabo repudiandae, perspiciatis delectus ad velit.",
      creationTime: "2mins Ago",
      comments: 2,
      likes: 2,
      shareAbleLink: "something.com",
      views: 4,
      tag: "sector 2",
    },
  ];

  return (
    <div className="px-3 w-full h-screen overflow-auto">
      <h2 className="md:block hidden uppercase text-red-500 font-semibold  py-4 bg-slate-100 w-fit px-4 text-2xl">
        Disscussion Forum
      </h2>

      {/* Card=========================== */}
      {data?.map((data: ICard) => (
        <div
          key={data.id}
          className="flex  mb-12 mt-5 flex-1 min-h-20 shadow-[4px_2px_10px_1px_rgba(0,0,0,0.5)]  hover:shadow-slate-900 duration-500  rounded-md md:px-3 md:p-3 py-3 max-w-2xl"
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
                <p className="capitalize text-nowrap md:text-sm text-xs py-1 bg-blue-700 rounded-full text-white h-fit px-3">
                  {data.tag}
                </p>
              </span>
              <span className="text-nowrap text-blue-700 font-semibold text-end w-fit md:text-sm text-xs">
                {data.creationTime}
              </span>
            </div>
            <p className="max-w-2xl text-sm md:text-lg">{data.description}</p>

            {/* Actions ==================================== */}
            <div className="flex justify-around my-3 *:text-lg *:cursor-pointer">
              <span className="flex items-center">
                <Heart likes={data.likes} />
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
