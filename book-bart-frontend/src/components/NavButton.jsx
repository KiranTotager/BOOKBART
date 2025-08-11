import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({value,navigate}){
    let navigatefunc=useNavigate();
    return(
        <button className="bg-secondary text-primary p-1 rounded-lg font-bold" onClick={()=>navigatefunc(`${navigate}`)}>{value}</button>
    )
}