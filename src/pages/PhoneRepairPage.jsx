import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { mobileIconImages } from "../../data";
import { BsTools } from "react-icons/bs";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function PhoneRepairPage() {
  let { phone, model } = useParams();

  const chooseUsIcons = [
    {
      icon: <BsTools />,
      text: "Fast Repair Processs",
    },
    {
      icon: <RiExchangeDollarLine />,
      text: "No work No Fee",
    },
    {
      icon: <FaEdit />,
      text: "30 Days Warranty",
    },
  ];

  const { state } = useLocation();
  return (
    <div>
      <div className="bg-[#fff5f0] min-h-[60vh] ">
        <div className="w-full max-w-5xl mx-auto flex justify-center items-center">
          <img
            className="h-[35rem] w-80 object-cover overflow-visible"
            src={state.image}
            alt={state.model}
          />
          <div className="text-center flex flex-col gap-8">
            <h1 className="py-8 px-4 border border-[#ffcac8] bg-[rgba(255,255,255,0.7)] text-4xl font-bold">
              {state.model} repair
            </h1>
            <h2 className="text-[#ff4040] text-5xl font-bold">
              (301) 242-3474
            </h2>
            <div className=" col-span-2 flex justify-center items-center mt-4">
              <button
                className="px-8 py-4 text-white text-3xl bg-[#ff4040] rounded-full hover:bg-black transition duration-300 ease-in-out borderImage "
                type="submit"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center h-48 text-center relative">
          <h1
            className="text-8xl font-bold uppercase absolute top-4 "
            style={{
              color: "#f2f2f2",
            }}
          >
            ABOUT US
          </h1>
          <h3 className="text-4xl font-bold w-96 text-center z-10">
            WHAT WE DO
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl mx-auto">
          {mobileIconImages.map((img, index) => (
            <div
              key={img.id}
              className={`flex flex-col items-center justify-center p-4 ${
                index < 4 && index % 2 === 0
                  ? "bg-gray-100"
                  : index >= 4 && index % 2 != 0
                  ? "bg-gray-100"
                  : "bg-white"
              }`}
            >
              <img src={img.image} alt={img.title} className=" h-48" />
              <p className="text-center mt-2 text-xl font-bold mb-4">
                {img.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-[55vh] flex justify-center items-center gap-10"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/99b596_b745b5934b6943cb959fe80b496642aa~mv2.jpg/v1/fill/w_980,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/99b596_b745b5934b6943cb959fe80b496642aa~mv2.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-full justify-end items-end ">
          <img
            src="https://static.wixstatic.com/media/99b596_86a9205b0d624ceaa1224bf1cf2aa357~mv2.png/v1/fill/w_288,h_454,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/contact-image.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="bg-white w-fit px-4 py-2 text-5xl font-bold">
            DO YOU NEED ANY REPAIR ?
          </h1>
          <h2 className="text-[#fff] text-5xl font-bold">(301) 242-3474</h2>
          <div className=" col-span-2 flex justify-center items-center mt-4">
            <button
              className="px-8 py-4 text-white text-3xl bg-[#ff4040] rounded-full hover:bg-black transition duration-300 ease-in-out borderImage "
              type="submit"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center h-48 text-center relative">
          <h1
            className="text-8xl font-bold uppercase absolute top-4 "
            style={{
              color: "#f2f2f2",
            }}
          >
            WHY US
          </h1>
          <h3 className="text-4xl font-bold w-96 text-center z-10">
            WHY CHOOSE US
          </h3>
        </div>
        <div>
          {chooseUsIcons.map((icon) => {
            return <div>{icon.icon}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
