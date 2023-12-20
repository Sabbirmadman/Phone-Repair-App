import React, { useState, useEffect } from "react";
import { Carousel, Radio } from "antd";
import "./carouselComponent.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function CarouselComponent() {
  const data = [
    {
      id: 1,
      title: "HERE WHEN YOU NEED US",
      subTitle: "We have expanded our service options",
      description:
        "To better serve our customers we are offering expanded service options! Same great repairs, same great service. Where can we fix for you today?",
      image:
        "https://static.wixstatic.com/media/99b596_ce7eebc43e604684a629658e6a6e0b14~mv2.jpg/v1/fill/w_1263,h_623,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99b596_ce7eebc43e604684a629658e6a6e0b14~mv2.jpg",
    },
    {
      id: 2,
      title: "WE’RE PHONE REPAIR HUB",
      subTitle: "We are the best in the business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      image:
        "https://static.wixstatic.com/media/99b596_df76d233dc434e76a2de69b8e4eb30e4~mv2.jpg/v1/fill/w_1263,h_623,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99b596_df76d233dc434e76a2de69b8e4eb30e4~mv2.jpg",
    },
  ];

  return (
    <Carousel arrows={true} autoplay dotPosition="right" className="carousel ">
      {data.map((item, index) => (
        <div key={item.id} className="carousel-item ">
          <img className="carousel-image" src={item.image} alt={item.title} />
          <div className="carousel-caption ">
            <div className="carousel-caption-holder">
              <h3>{item.title}</h3>
              <p className="carousel-subtitle">{item.subTitle}</p>
              <p className="carousel-description">{item.description}</p>

              <button className="carousel-button">
                <span>Repair Now</span>
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
