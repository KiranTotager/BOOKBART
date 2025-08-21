import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function BackNav(){
    let navigate=useNavigate();
    return (
        <div className="h-16 bg-backNavBackground sticky top-0 z-50 text-xl flex items-center pl-7 text-loginRegistrationText shadow-md">
            <FaArrowLeft onClick={()=>{navigate("/")}} className="cursor-pointer"/>
        </div>
    )
}