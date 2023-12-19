import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phoneData } from "../../data";

export default function CatagoryPage() {
  let { phone } = useParams();
  const navigate = useNavigate();

  let phonedata = phone;

  return (
    <div>
      <div
        className="h-96 flex  items-center"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/nsplsh_b2b9b89e9e4d4b939f60b639a6cf9da8~mv2.jpg/v1/fill/w_980,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_b2b9b89e9e4d4b939f60b639a6cf9da8~mv2.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="uppercase bg-[rgba(1,1,1,0.5)] text-white font-bold p-8 w-96 text-4xl">
          {phone}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center w-full max-w-[1600px] mx-auto">
        {phoneData.map((phone) => (
          <div
            key={phone.id}
            className="bg-white p-8 cursor-pointer"
            onClick={() => {
              navigate(`/repair/${phonedata}/${phone.model}`, { state: phone });
            }}
          >
            <img
              src={phone.image}
              alt={phone.model}
              className="w-full h-auto mb-4"
            />
            <p className="text-lg font-semibold">{phone.model}</p>
            <p className="text-gray-600">{phone.type}</p>
            <div className=" col-span-2 flex justify-center items-center mt-4">
              <button
                className="px-8 py-4 text-white  bg-[#ff4040] rounded-3xl hover:bg-black transition duration-300 ease-in-out borderImage "
                type="submit"
              >
                Repair Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
