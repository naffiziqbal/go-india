"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Tabs = ({ tabs, defaultSelectedTab }: any) => {
  const [selectedTab, setSelectedTab] = useState(
    defaultSelectedTab || tabs[0].id
  );

  return (
    <div className="w-full">
      <ul className=" flex items-center justify-center w-full">
        {tabs.map((tab: any) => (
          <li
            key={tab.id}
            className={`w-full h-full flex justify-center duration-500  ${
              selectedTab === tab.id
                ? "active bg-blue-950 w-full border-b-4 border-b-red-500 "
                : "bg-blue-900 w-full h-full border-b-4"
            }`}
          >
            <button
              className="w-full h-full"
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {/* Tab Content ============================== */}
      <div>
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            className={` ${
              selectedTab === tab.id
                ? "active flex justify-center items-center"
                : "hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
