import React, { useState } from "react";
import { useDispatch } from "react-redux";
function LocationDropDown({ name, id, options, action, label }) {
    let dispatch = useDispatch();
    let [isfoucesed, setFocused] = useState(0);
    return (
        <p className="flex gap-2">
            <label htmlFor="state" className={isfoucesed == 0 ? "text-lg" : "text-lg  text-blue-900"}>{label} <sup className="text-red-500 font-bold">*</sup>:</label>

            <select name={name} id={id} className={isfoucesed == 0 ? "bg-white text-center border-2 border-gray-500 rounded-lg px-2" : "bg-white text-center border-[3px] border-blue-900 rounded-lg px-2"} onChange={(e) => {
                dispatch(action(e.target.value));
            }} onClick={(e) => { setFocused(1) }} onBlur={(e) => { setFocused(0) }}>
                <option value=""></option>
                <option value="bcd">bcd</option>
                <option value="abc">abc</option>
            </select>
        </p>
    )
}
export default LocationDropDown;