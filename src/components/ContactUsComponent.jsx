import React from "react";
import InputComponent from "./InputComponent";

export default function ContactUsComponent() {
  return (
    <div className="bg-[#efeff4] min-h-[53rem] flex flex-col md:flex-row justify-center items-center">
      <div className=" w-[30rem] h-[42rem] bg-white p-8 text-[#797676]">
        <h1 className="text-4xl font-semibold py-4">Get In Tuch</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <InputComponent
            label="Name"
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
          <InputComponent
            label="Email"
            type="email"
            onChange={(e) => console.log(e.target.value)}
          />
          <InputComponent
            label="Phone"
            type="number"
            onChange={(e) => console.log(e.target.value)}
            classes={"col-span-2"}
          />

          <InputComponent
            label="Address"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            classes={"col-span-2"}
          />
          <InputComponent
            label="Subject"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            classes={"col-span-2"}
          />
          <InputComponent
            label="Leave us a message"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            classes={"col-span-2"}
          />

          <div className=" col-span-2 flex justify-center items-center mt-4">
            <button
              className="px-20 py-4 text-white  bg-[#ff4040] rounded-3xl hover:bg-black transition duration-300 ease-in-out borderImage "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div
        className="h-[42rem] w-[30rem]"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/99b596_9cdc5b156c764744a72b2e17f20b0876~mv2.jpg/v1/crop/x_302,y_0,w_573,h_806/fill/w_476,h_670,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/store%20front.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-center p-8 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <h1 className="text-4xl font-bold tracking-widest text-[#ff4040]">
            CONTACT US
          </h1>
          <p className="font-bold">
            3201 Branch Ave, Temple Hills, MD 20748, USA
            <br />
            phonerepairhubmd@gmail.com
            <br /> (301) 242-3474
          </p>
        </div>
      </div>
    </div>
  );
}
