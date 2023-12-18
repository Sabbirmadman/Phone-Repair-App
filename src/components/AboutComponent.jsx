import React from "react";

export default function AboutComponent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto p-10">
            <div className="w-full max-w-lg ">
                <div className="flex flex-col justify-center items-center h-48 text-center relative">
                    <h1
                        className="text-8xl font-bold uppercase absolute top-0 "
                        style={{
                            color: "#f2f2f2",
                        }}
                    >
                        ABOUT US
                    </h1>
                    <h3 className="text-4xl font-bold w-96 text-center z-10">
                        ALL ABOUT PHONE REPAIR HUB
                    </h3>
                </div>

                <div className="mb-10 text-md">
                    If you’re in need of a reliable Mobile Phone Repair Service,
                    contact the pros from Phone Repair Hub. We are available to
                    provide skilled, affordable services that suit your specific
                    needs and schedule. Established in 2000, we are proficient
                    with a number of different brands and models.
                </div>
                <div className="mb-10 text-md">
                    When you want quality repair work done right the first time
                    and at a great price, we’re the ones to call. We cover
                    clients in Temple Hills and the surrounding areas, so no
                    matter where you are let us know how we can help.
                </div>

                <div
                    className="px-10 py-2 text-white  bg-[#ff4040] rounded-3xl hover:bg-black transition duration-300 ease-in-out borderImage"
                    style={{
                        width: "fit-content",
                    }}
                >
                    Learn More
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <div className="object-cover p-[2px] border-2 border-black ">
                    <img
                        src="https://static.wixstatic.com/media/99b596_9cdc5b156c764744a72b2e17f20b0876~mv2.jpg/v1/fill/w_468,h_312,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/store%20front.jpg"
                        alt="store front"
                        className="object-cover p-1 border-[1px] border-black "
                    />
                </div>
            </div>
        </div>
    );
}
