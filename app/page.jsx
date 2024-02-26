"use client";
import Image from "next/image";
import React, { useState } from "react";
import imageEl from "../public/images/watsup.png";
import { useRouter } from "next/navigation";

function page() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const imageUrl =
    "https://res.cloudinary.com/dp0tf8poo/image/upload/v1708934651/card_qufayu.jpg";
  const router = useRouter();
  function handleSubmition() {
    const message = `
    Dear ${name},\n\n We are thrilled to extend our heartfelt invitation to you for the joyous wedding celebration\n of Mr.Joel Isaac
    Kakembo  and Mrs.Vanessa Ssekajja, which will take place on , 2nd of
    March 2024. Your presence\n would add immense joy to this special day. Please find attached the invitation card for further details \n${imageUrl}`;
    // console.log(message);
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${contact}?text=${encodedMessage}`;

    router.push(whatsappLink);
    // console.log(name, contact);
    setContact("");
    setName("");
  }
  return (
    <div className="flex lg:flex-row flex-col min-h-screen lg:px-56 py-4 justify-center  bg-red-100 ">
      <div className="p-4 order-2 lg:order-1 w-full lg:w-1/2">
        <div className="flex items-center justify-center  px-2 py-4 rounded ">
          <Image src={imageUrl} alt="" width={300} height={350} />
        </div>
      </div>
      <div className="gap-4 flex flex-col p-4 max-w-4xl lg:order-2 order-1 w-full lg:w-1/2">
        <div className="flex gap-4 items-center justify-center flex-col ">
          <h2 className="font-extrabold text-3xl flex  font-sans">
            Joel Isaac Kakembo <br /> <span className="text-red-600 ">&</span>{" "}
            <br />
            Vanessa Ssekajja
          </h2>
        </div>
        <div className=" px-7 bg-red-200 py-4 rounded-t-xl">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Whatsup Number(start With Country code)
            </label>
            <input
              placeholder="Eg 256705801633"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            />
          </div>

          <div>
            <button
              onClick={handleSubmition}
              type="button"
              className=" flex items-center hover:bg-black hover:text-red-50  text-black   hover:border-transparent bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 justify-center  text-center me-2 mb-2 "
            >
              <div className="">
                <Image src={imageEl} alt="" className="w-12 h-10 " />
              </div>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
