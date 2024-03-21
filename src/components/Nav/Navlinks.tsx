import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="flex flex-col justify-around gap- *:w-full *:px-5 *:py-2 my-5 font-semibold  hover:*:bg-slate-900  rounded-1 *:duration-300">
      <Link href={"/"}>Discussion Forum</Link>
      <Link href={"/"}>Market Stories</Link>
      <Link href={"/"}>Sentiment</Link>
      <Link href={"/"}>Markets</Link>
      <Link href={"/"}>Sectors</Link>
      <Link href={"/"}>Watchlist</Link>
      <Link href={"/"}>Events</Link>
      <Link href={"/"}>News/Interview</Link>
    </div>
  );
};

export default Navlinks;
