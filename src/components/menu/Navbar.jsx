import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { HiLocationMarker } from "react-icons/hi";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [headerState, setHeaderState] = useState({
        current: "Home",
        visible: false,
    });

    const navigate = useNavigate();

    const showDrawer = () => {
        setHeaderState({
            visible: true,
        });
    };

    const onClose = () => {
        setHeaderState({
            visible: false,
        });
    };

    const handleClick = (e) => {
        console.log("click ", e);
        setHeaderState({
            current: e.key,
        });
    };

    return (
        <div className="bg-black h-28 flex items-center pl-4 pr-4">
            <img
                src="https://static.wixstatic.com/media/99b596_1e1edcabb3b94cfd8e8b942058a2db07~mv2.png/v1/fill/w_184,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                alt="logo"
                onClick={() => navigate("/")}
            />

            {/* for mobile */}
            <div className="md:hidden flex items-center ml-auto">
                <MenuOutlined
                    className="text-white text-xl ml-auto"
                    onClick={showDrawer}
                />
            </div>

            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={headerState.visible}
            >
                <ul className=" font-semibold">
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Home" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "Home" });
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "About" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "About" });
                            navigate("/about");
                        }}
                    >
                        About
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Services" ? "selected" : ""
                        }`}
                    >
                        <select className="bg-transparent border-none outline-none w-full ">
                            <option value="Services">Services</option>
                            <option value="Services">Services</option>
                            <option value="Services">Services</option>
                            <option value="Services">Services</option>s
                            <option value="Services">Services</option>
                        </select>
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "bodyOils" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "bodyOils" });
                            navigate("/bodyoils");
                        }}
                    >
                        Body Oils
                    </li>
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Reviews" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "Reviews" })}
                    >
                        Reviews
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "FAQs" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "FAQs" })}
                    >
                        FAQs
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "reqQuote" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "reqQuote" })}
                    >
                        Request a Quote
                    </li>
                </ul>
            </Drawer>

            {/* for desktop */}
            <div className="hidden md:block ml-auto">
                <ul className="flex text-white font-semibold">
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Home" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "Home" });
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "About" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "About" });
                            navigate("/about");
                        }}
                    >
                        About
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Services" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "Services" })}
                    >
                        Services
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "bodyOils" ? "selected" : ""
                        }`}
                        onClick={() => {
                            handleClick({ key: "bodyOils" });
                            navigate("/bodyoils");
                        }}
                    >
                        Body Oils
                    </li>
                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "Reviews" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "Reviews" })}
                    >
                        Reviews
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "FAQs" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "FAQs" })}
                    >
                        FAQs
                    </li>

                    <li
                        className={`mr-8 cursor-pointer text-xl ${
                            headerState.current === "reqQuote" ? "selected" : ""
                        }`}
                        onClick={() => handleClick({ key: "reqQuote" })}
                    >
                        Request a Quote
                    </li>

                    <li className="mr-8">
                        <HiLocationMarker
                            className="inline-block mr-2"
                            size={20}
                        />
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .selected {
                    color: #ef4032;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
