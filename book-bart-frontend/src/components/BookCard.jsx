import React from "react";
import logo from "/images/logo.png"
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";

export default function BookCard({bookDetail}) {
    return (
     
          <div className="bg-bookCardBackground p-5 w-80  rounded-lg">
            <p className="flex gap-2"> <span className="flex ml-2 text-3xl text-gray-500"><FaUserCircle/></span><span className="font-semibold">{bookDetail.owner}</span></p>
            <div className=" flex flex-col justify-center items-center mt-4  ">
       
            <img src={logo} alt="book image" className="w-40 h-40 rounded-lg" />
            <div className="mt-5">
                <p className="flex ">
                    <span className="font-bold min-w-[100px] ">Book Name :</span><span className="ml-2  whitespace-nowrap  w-[100px] truncate">{bookDetail.bookName}</span>
                </p>
                <p>
                    <span className="font-bold">Category :</span><span className="ml-2">{bookDetail.category}</span>
                </p>
            </div>
            <Button className="display block bg-blue-500 text-white rounded p-1 mt-4 mx-auto hover:bg-blue-600 shadow-lg hover:shadow-blue-500/50" value="more details" />
        </div>
          </div>
      
    )
}