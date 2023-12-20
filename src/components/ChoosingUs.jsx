import React from "react";
import { FaUserCog, FaClock } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";

export default function ChoosingUs() {
  const chooseData = [
    {
      id: 1,
      icon: <FaUserCog />,
      title: "Quality Repair",
      desc: "Change the text and make it your own. Click here to begin editing.",
    },
    {
      id: 2,
      icon: <RiCoinsFill />,
      title: "Lower Price",
      desc: "Change the text and make it your own. Click here to begin editing.",
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Fast Services",
      desc: "Change the text and make it your own. Click here to begin editing.",
    },
  ];

  return (
    <div className="p-20">
      <div className="flex flex-col justify-center items-center h-48 text-center relative">
        <h1
          className="text-8xl font-bold uppercase absolute top-0 "
          style={{
            color: "#f2f2f2",
          }}
        >
          WHY
        </h1>
        <h3 className="text-4xl font-bold w-96 text-center z-10">
          WHY CHOOSE US
        </h3>
      </div>

      <div className="md:flex justify-center w-full gap-4 ">
        {chooseData.map((ele) => (
          <div
            key={ele.id}
            className="w-72 bg-[#fafafa] p-8 flex flex-col gap-4 justify-center items-center text-center"
          >
            <div className="text-8xl text-[#ff0000]">{ele.icon}</div>
            <h3 className="font-bold text-2xl">{ele.title}</h3>
            <p>{ele.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
