import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/menu/Navbar";
import FooterComponent from "../components/FooterComponent";
export default function OutletPage() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
