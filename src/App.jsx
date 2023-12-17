import React, { Component } from "react";
import { Drawer, Button } from "antd";
import Navbar from "./components/menu/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/OutletPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OutletPage />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
