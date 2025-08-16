import React from "react";
import { FaArrowLeft } from "react-icons/fa";
export default function BackNav(){
    return (
        <div className="h-16 bg-backNavBackground sticky top-0 z-50 text-xl flex items-center pl-7 text-loginRegistrationText shadow-md">
            <FaArrowLeft/>
        </div>
    )
}