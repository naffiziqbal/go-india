import Image from "next/image";
import React from "react";

const Stories = () => {
  const stories = [
    {
      image: "https://unsplash.it/400",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto veniam excepturi corrupti molestias nihil corporis.Accusantium, corporis cum provident ipsa facilis fugiat possimus, utdolore suscipit sit, impedit ratione?",
    },
    {
      image: "https://unsplash.it/400",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto veniam excepturi corrupti molestias nihil corporis.Accusantium, corporis cum provident ipsa facilis fugiat possimus, utdolore suscipit sit, impedit ratione?",
    },
    {
      image: "https://unsplash.it/400",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto veniam excepturi corrupti molestias nihil corporis.Accusantium, corporis cum provident ipsa facilis fugiat possimus, utdolore suscipit sit, impedit ratione?",
    },
    {
      image: "https://unsplash.it/400",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto veniam excepturi corrupti molestias nihil corporis.Accusantium, corporis cum provident ipsa facilis fugiat possimus, utdolore suscipit sit, impedit ratione?",
    },
  ];
  return (
    <div className="md:max-w-2xl max-h-screen overflow-auto min-w-fit">
      <h2 className="md:block hidden uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
        Market Stories
      </h2>

      {/* Posts ================*/}

      <div className="flex flex-col justify-center items-center gap-6 *:shadow *:py-1 hover:*:shadow-md hover:*:shadow-slate-400 *:duration-300 *:rounded w-full *:border my-4">
        {stories.map((stroy, idx) => (
          <div key={idx} className="[&:nth-child(1)]:px-0 md:w-80 w-full ">
            <Image
              src={stroy.image}
              height={800}
              className="w-full"
              width={800}
              alt="image"
            />
            <h3 className="font-semibold my-2 px-3">{stroy.title}</h3>
            <p className="line-clamp-4 px-3">{stroy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
