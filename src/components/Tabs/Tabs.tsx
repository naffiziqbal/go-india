"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Tabs = ({ tabs, defaultSelectedTab }: any) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(
    defaultSelectedTab || tabs[0].id
  );

  const handleClick = (id: any) => {
    setSelectedTab(id);
  };

  return (
    <div className="w-full">
      <ul className=" flex justify-between">
        {tabs.map((tab: any) => (
          <li
            key={tab.id}
            className={`tabs__nav-item ${
              selectedTab === tab.id ? "active" : ""
            }`}
          >
            <button onClick={() => handleClick(tab.id)}>{tab.title}</button>
          </li>
        ))}
      </ul>
      <div className="tabs__content">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            className={` ${
              selectedTab === tab.id
                ? "active  flex justify-center items-center"
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
