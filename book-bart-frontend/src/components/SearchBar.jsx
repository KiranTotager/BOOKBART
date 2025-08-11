import React from "react";
import SearchIcon from "./SearchIcon";
export default function SearchBar() {
    return (
        <div className="flex items-center  rounded-lg bg-white h-10 overflow-hidden pl-4">
            <input type="text" className="w-96 outline-none" placeholder="search books....."/>
            <button className="h-full flex items-center pl-2">
                <SearchIcon />
            </button>
        </div>
    )
}