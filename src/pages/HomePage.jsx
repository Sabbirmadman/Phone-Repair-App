import React from "react";
import CarouselComponent from "../components/carousel/CarouselComponent";
import FixListComponent from "../components/FixListComponent";
import AboutComponent from "../components/AboutComponent";
import ChoosingUs from "../components/ChoosingUs";
import ContactUsComponent from "../components/ContactUsComponent";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function HomePage() {
  return (
    <div>
      <CarouselComponent />
      <FixListComponent />
      <AboutComponent />
      <ChoosingUs />
      <ContactUsComponent />
      <div
        className="h-80 flex flex-col justify-center items-center gap-10"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/99b596_b745b5934b6943cb959fe80b496642aa~mv2.jpg/v1/fill/w_980,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/99b596_b745b5934b6943cb959fe80b496642aa~mv2.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="bg-white w-fit px-4 py-2 text-5xl font-semibold">
          DO YOU NEED ANY REPAIR ?
        </h1>
        <button className="carousel-button">
          <span>Repair Now</span>
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
}
