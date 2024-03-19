import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="md:max-w-2xl max-h-screen overflow-auto min-w-fit">
      <h2 className="md:block hidden uppercase text-blue-500 font-semibold  py-4 bg-slate-100 w-fit px-4 ">
        Market Stories
      </h2>

      {/* Posts ================*/}

      <div className="flex flex-col justify-center items-center gap-6 *:shadow *:py-1 hover:*:shadow-md hover:*:shadow-slate-400 *:duration-300 *:rounded w-full ">
        <div className="[&:nth-child(1)]:px-0 px-3 w-80">
          <Image
            src={"https://unsplash.it/400"}
            height={400}
            width={400}
            alt="image"
          />
          <h3 className="font-semibold my-2 px-3">The Coldest Sunset</h3>
          <p className="line-clamp-4 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto veniam excepturi corrupti molestias nihil corporis.
            Accusantium, corporis cum provident ipsa facilis fugiat possimus, ut
            dolore suscipit sit, impedit ratione?
          </p>
        </div>
        <div className="[&:nth-child(1)]:px-0 px-3 w-80">
          <Image
            src={"https://unsplash.it/400"}
            height={400}
            width={400}
            alt="image"
          />
          <h3 className="font-semibold my-2 px-3">The Coldest Sunset</h3>
          <p className="line-clamp-4 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto veniam excepturi corrupti molestias nihil corporis.
            Accusantium, corporis cum provident ipsa facilis fugiat possimus, ut
            dolore suscipit sit, impedit ratione?
          </p>
        </div>
        <div className="[&:nth-child(1)]:px-0 px-3 w-80">
          <Image
            src={"https://unsplash.it/400"}
            height={400}
            width={400}
            alt="image"
          />
          <h3 className="font-semibold my-2 px-3">The Coldest Sunset</h3>
          <p className="line-clamp-4 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            architecto veniam excepturi corrupti molestias nihil corporis.
            Accusantium, corporis cum provident ipsa facilis fugiat possimus, ut
            dolore suscipit sit, impedit ratione?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
