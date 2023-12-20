import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div
        className="h-[55vh] flex  items-center"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/nsplsh_b2b9b89e9e4d4b939f60b639a6cf9da8~mv2.jpg/v1/fill/w_980,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_b2b9b89e9e4d4b939f60b639a6cf9da8~mv2.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="uppercase bg-[rgba(1,1,1,0.5)] text-white font-bold p-8 w-96 text-4xl">
          ABOUT US
        </h1>
      </div>
      <div className="w-full max-w-5xl mx-auto mb-8">
        <div className="flex flex-col justify-center items-center h-48 text-center relative">
          <h1
            className="text-8xl font-bold uppercase absolute top-4 "
            style={{
              color: "#f2f2f2",
            }}
          >
            ABOUT US
          </h1>
          <h3 className="text-4xl font-bold w-96 text-center z-10">
            ALL ABOUT PHONE REPAIR HUB
          </h3>
        </div>
        <div className="flex">
          <img
            src="https://static.wixstatic.com/media/99b596_9cdc5b156c764744a72b2e17f20b0876~mv2.jpg/v1/fill/w_490,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/99b596_9cdc5b156c764744a72b2e17f20b0876~mv2.jpg"
            alt="image"
          />
          <div className="bg-[#ff6161] p-8 text-white flex flex-col gap-8 justify-center">
            <h1 className="text-xl">
              If you’re in need of a reliable Mobile Phone Repair Service,
              contact the pros from Phone Repair Hub. We are available to
              provide skilled, affordable services that suit your specific needs
              and schedule.
            </h1>
            <h1 className="text-xl">
              Established in 2000, we are proficient with a number of different
              brands and models.When you want quality repair work done right the
              first time and at a great price, we’re the ones to call. We cover
              clients in Temple Hills and the surrounding areas, so no matter
              where you are let us know how we can help.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center h-48 text-center relative">
          <h1
            className="text-8xl font-bold uppercase absolute top-4 "
            style={{
              color: "#f2f2f2",
            }}
          >
            TESTIMONIALS
          </h1>
          <h3 className="text-4xl font-bold w-96 text-center z-10">
            WHAT PEOPLE SAY
          </h3>
        </div>
      </div>
    </div>
  );
}
