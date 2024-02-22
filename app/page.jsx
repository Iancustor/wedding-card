"use client";
import Image from "next/image";
import React, { useState } from "react";
import imageEl from "../public/images/watsup.png";
import imageCard from "../public/images/card.jpg";
import Link from "next/link";
import { generateImageUrl } from "./utils/generateImageUrl";

function page() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [generated, setGenerated] = useState(false);

  const imageUrl = generateImageUrl(imageCard);
  const [message,setMessage] = useState("");
  const [whatsappLink,setLink] = useState("");

  function handleSubmition(e) {
    e.preventDefault();
    setMessage(`
    Dear ${name},\n\n We are thrilled to extend our heartfelt invitation to you for the joyous wedding celebration\n of Mr. John and Mrs. Jane, which will take place on Sunday, 20th August 2024. Your presence\n would add immense joy to this special day. Please find attached the invitation card for further details \n${imageUrl}`)
    const encodedMessage = encodeURIComponent(message);
    setLink(`https://wa.me/${contact}?text=${encodedMessage}`)
    console.log(name, contact);
    setGenerated(true);

    setContact("");
    setName("");
  }

  return (
    <div className="grid  lg:flex md:flex lg:min-h-screen md:min-h-screen  place-content-center py:2   bg-red-100 ">
      <div className="  p-4">
        <div className=" bg-red-500 flex place-content-center  px-5 py-4 rounded ">
          <Image src={imageCard} alt="" width={300} height={350} />
        </div>
      </div>
      <div className="  gap-4 flex flex-col place-content-center  p-4">
        <div className="flex gap-4 items-center justify-center flex-col ">
          <h2 className="font-extrabold">
            Joel Isaac Kakembo & Vanessa Ssekajja
          </h2>
          {generated && (
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex items-center justify-center w-56 px-4 rounded-tr-2xl rounded-bl-2xl"
            >
              <div className="">
                <Image src={imageEl} alt="" className="w-12 h-10 " />
              </div>
              Share
            </Link>
          )}
        </div>
        <form
          onSubmit={handleSubmition}
          action=""
          className=" px-7 bg-red-200 py-4 rounded-t-xl"
        >
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
          {/* <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
            />
          </div> */}
          <div>
            <button
              type="submit"
              className="text-black  hover:text-white border bg-white hover:border-transparent hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Generate Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
