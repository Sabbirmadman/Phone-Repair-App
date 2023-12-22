import React, { Component } from "react";
import { Drawer, Button } from "antd";
import Navbar from "./components/menu/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/OutletPage";
import HomePage from "./pages/HomePage";
import CatagoryPage from "./pages/CatagoryPage";
import PhoneRepairPage from "./pages/PhoneRepairPage";
import AboutPage from "./pages/AboutPage";
import BodyOils from "./pages/BodyOils";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OutletPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="repair/:phone" element={<CatagoryPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="bodyoils" element={<BodyOils />} />
                    <Route
                        path="repair/:phone/:model"
                        element={<PhoneRepairPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
