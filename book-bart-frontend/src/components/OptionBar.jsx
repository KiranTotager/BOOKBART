import React from "react";
export default function OptionBar(){
    return(
        <div>
            <label htmlFor="optionId" className="text-primary mr-2">options:</label>
            <select name="options" id="optionId" className="w-36  bg-white px-2 rounded ">
                    <option value="abc">--</option>
                    <option value="abc">abc</option>
                    <option value="abc">abc</option>
                </select>
        </div>
    )
}