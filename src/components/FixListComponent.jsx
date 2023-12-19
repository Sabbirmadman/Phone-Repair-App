import React from "react";
import { catagoryTypes } from "../../data";
import { useNavigate } from "react-router-dom";

export default function FixListComponent() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-48 text-center relative">
                <h3 className="text-4xl font-bold z-10">
                    What Can We Fix For You Today?
                </h3>
                <h1
                    className="text-8xl font-bold uppercase absolute inset-5"
                    style={{
                        color: "#f2f2f2",
                    }}
                >
                    SERVICES
                </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 w-full">
                {catagoryTypes.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center justify-center h-full py-20 "
                        style={{
                            backgroundColor: item.bg,
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-10">
                            <img
                                className="h-42  object-contain"
                                src={item.image}
                                alt={item.name}
                            />
                            <h1 className="text-2xl font-bold uppercase text-white">
                                {item.name}
                            </h1>
                            <button
                                onClick={() => {
                                    navigate(`/repair/${item.name}`);
                                }}
                                className="px-10 py-2 text-white uppercase bg-[#ff4040] rounded-full hover:bg-black transition duration-300 ease-in-out borderImage"
                            >
                                Repair Now {">"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
