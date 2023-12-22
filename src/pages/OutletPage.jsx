import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/menu/Navbar";
import FooterComponent from "../components/FooterComponent";
import { IoChatbubbleEllipses } from "react-icons/io5";
export default function OutletPage() {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            <div className="fixed bottom-10 right-5 bg-[#5d62f9] px-8 py-4 text-white font-bold rounded-full text-2xl flex justify-center items-center gap-2 hover:bg-[#4f55c1] cursor-pointer">
                <IoChatbubbleEllipses /> Lets Chat!
            </div>

            <FooterComponent />
        </div>
    );
}
