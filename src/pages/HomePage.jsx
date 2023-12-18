import React from "react";
import CarouselComponent from "../components/carousel/CarouselComponent";
import FixListComponent from "../components/FixListComponent";
import AboutComponent from "../components/AboutComponent";

export default function HomePage() {
    return (
        <div>
            <CarouselComponent />
            <FixListComponent />
            <AboutComponent />
        </div>
    );
}
