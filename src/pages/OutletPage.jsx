import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/menu/Navbar";
export default function OutletPage() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
