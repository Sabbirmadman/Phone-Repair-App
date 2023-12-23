import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function BodyOils() {
    return (
        <div>
            <img
                src="https://static.wixstatic.com/media/99b596_a2e5f1b05aa5463ca1af354fe9adab15~mv2.jpeg/v1/fill/w_1263,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99b596_a2e5f1b05aa5463ca1af354fe9adab15~mv2.jpeg"
                className="w-full"
                alt="body oils"
            />
            <div
                className="container
                transform -translate-y-20 z-10
                bg-white 
                 mx-auto px-4 md:px-16 py-8 shadow-xl mb-10"
                style={{ maxWidth: "1000px" }}
            >
                <h1 className="text-3xl font-bold mb-4">
                    Body Oils and Incense{" "}
                </h1>
                <p
                    className="text-lg mb-8"
                    style={{ lineHeight: "1.8rem", color: "#777" }}
                >
                    You can find Over 300 Imported Body Oils and Premium Incense
                    inside Phone Spot, whether you are looking for specific body
                    oil, essential oil, or Burner Oils, you can find it all
                    inside Phone Repair Hub.{" "}
                </p>

                <button
                    className="text-white text-2xl font-semibold bg-[#ff4040] px-8 py-2 mt-4 rounded-full"
                    onClick={() => navigate("/contact")}
                >
                    Call Now <FaPhoneVolume className="inline-block" />
                </button>
            </div>

            <div className="flex flex-col gap-28 mb-28">
                <div
                    className="grid grid-cols-2 gap-2 md:gap-4 "
                    style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                    <div className="p-[2px] border-2 border-black">
                        <img
                            src="https://static.wixstatic.com/media/99b596_80b6c19612d847feb1a4b6cd1c02b99b~mv2.jpeg/v1/fill/w_394,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/OilBurners.jpeg"
                            className="w-full p-1 border-[1px] border-black"
                            alt="oil burners"
                        />
                    </div>
                    <div
                        className="bg-white px-4 py-8  flex flex-col justify-center"
                        style={{ maxWidth: "500px" }}
                    >
                        <h1 className="text-3xl font-bold mb-4">Oil Burners</h1>
                        <p
                            className="text-lg mb-8"
                            style={{ lineHeight: "1.8rem" }}
                        >
                            At Phone Repair Hub we carry burning oil lamps that
                            will illuminate you home and bring a sense of
                            elegance. our oil burners and stylist and modern. We
                            carry a wide range of burning oils and oil burners.
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-2 gap-2 md:gap-4 "
                    style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                    <div
                        className="bg-white px-4 py-8  flex flex-col justify-center"
                        style={{ maxWidth: "500px" }}
                    >
                        <h1 className="text-3xl font-bold mb-4">Body Oils</h1>
                        <p
                            className="text-lg mb-8"
                            style={{ lineHeight: "1.8rem" }}
                        >
                            At Phone Repair Hub we carry burning oil lamps that
                            will illuminate you home and bring a sense of
                            elegance. our oil burners and stylist and modern. We
                            carry a wide range of burning oils and oil burners.
                        </p>
                    </div>
                    <div className="p-[2px] border-2 border-black">
                        <img
                            src="https://static.wixstatic.com/media/99b596_a2e5f1b05aa5463ca1af354fe9adab15~mv2.jpeg/v1/fill/w_418,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Body%20Oils.jpeg"
                            className="w-full p-1 border-[1px] border-black"
                            alt="oil burners"
                        />
                    </div>
                </div>
                <div
                    className="grid grid-cols-2 gap-2 md:gap-4 "
                    style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                    <div className="p-[2px] border-2 border-black">
                        <img
                            src="https://static.wixstatic.com/media/99b596_d572c4447e70415ca4b252b4990869c6~mv2.jpeg/v1/fill/w_396,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shea%20Soap%20and%20Butter.jpeg"
                            className="w-full p-1 border-[1px] border-black"
                            alt="oil burners"
                        />
                    </div>
                    <div
                        className="bg-white px-4 py-8  flex flex-col justify-center"
                        style={{ maxWidth: "500px" }}
                    >
                        <h1 className="text-3xl font-bold mb-4">
                            Shea Soap and Butter
                        </h1>
                        <p
                            className="text-lg mb-8"
                            style={{ lineHeight: "1.8rem" }}
                        >
                            At Phone Repair Hub, We carry a wide variety of Shea
                            butters, essential oils, soaps, shampoo, lotions and
                            much more.
                        </p>
                    </div>
                </div>
                <div
                    className="grid grid-cols-2 gap-2 md:gap-4 "
                    style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                    <div
                        className="bg-white px-4 py-8  flex flex-col justify-center"
                        style={{ maxWidth: "500px" }}
                    >
                        <h1 className="text-3xl font-bold mb-4">
                            Incense Sticks
                        </h1>
                        <p
                            className="text-lg mb-8"
                            style={{ lineHeight: "1.8rem" }}
                        >
                            We carry over 200 different types of incenses,
                            candles, burning oils. Call us now!
                        </p>
                    </div>
                    <div className="p-[2px] border-2 border-black">
                        <img
                            src="https://static.wixstatic.com/media/99b596_d572c4447e70415ca4b252b4990869c6~mv2.jpeg/v1/fill/w_396,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Shea%20Soap%20and%20Butter.jpeg"
                            className="w-full p-1 border-[1px] border-black"
                            alt="oil burners"
                        />
                    </div>
                </div>
            </div>
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
                    <span>Call Us Now</span>
                    <ArrowRightOutlined />
                </button>
            </div>
        </div>
    );
}
