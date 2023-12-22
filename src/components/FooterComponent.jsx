import React from "react";

export default function FooterComponent() {
    return (
        <div className="min-h-96 p-10 bg-black text-white flex flex-col gap-10 justify-center">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
                <div className="flex-1 flex flex-col justify-between gap-10">
                    <img
                        src="https://static.wixstatic.com/media/99b596_1e1edcabb3b94cfd8e8b942058a2db07~mv2.png/v1/fill/w_184,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                        alt="logo"
                        onClick={() => navigate("/")}
                        className="w-48 object-contain"
                    />
                    <p>
                        If you’re in need of a reliable Mobile Phone Repair
                        Service, contact the pros from Phone Repair Hub.
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-2xl font-semibold">
                        HOURS OF OPERATION
                    </h1>
                    <h2 className="text-xl font-semibold">Open for Business</h2>
                    <div>
                        <p>Monday - Friday: 10am - 7pm</p>
                        <p>Saturday: 10am - 7pm</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-2xl font-semibold ">SUBSCRIBE FORM</h1>
                    <div className="flex border-2 border-[#ff4040] w-fit">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="py-1 px-2 border-none outline-none bg-black text-white"
                        />
                        <button className="bg-[#ff4040] text-white py-1 border-none outline-none px-4 font-semibold">
                            Submit
                        </button>
                    </div>

                    <h1 className="text-2xl font-semibold ">(301) 242-3474</h1>
                </div>
            </div>
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between ">
                <h1 className="text-2xl font-semibold">
                    3201 Branch Ave Temple hills, MD 20748
                </h1>
                <div className="flex gap-2">
                    <img
                        src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"
                        alt="fb logo"
                    />
                    <img
                        src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png"
                        alt="insta logo"
                    />
                </div>
            </div>
            <h1 className="text-md font-semibold text-center mb-10">
                ©2021 by Phone Repair Hub.
            </h1>
        </div>
    );
}
