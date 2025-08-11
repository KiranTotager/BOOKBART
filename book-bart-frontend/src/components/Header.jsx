import React from "react"
import { FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "/images/bookbart-logo.png"
import OptionBar from "./OptionBar";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton"
export default function Header() {
    let states = ["karnataka", "Maharashtra", "Telangana", "Andrapradesh"];
    return (

        <div className="absolute top-0 sticky">
            <div className="flex justify-between bg-primary w-full pr-10 ">
                <img src={logo} alt="logo" className="w-28" />
                <div className="display flex  flex-end gap-8 items-center">
                    <SearchBar />
                    {/* <button className="bg-secondary text-primary p-1 rounded-lg font-bold" >donate-books</button> */}
                    {/* <button value="sell-books" className="bg-secondary text-red-primary p-1 rounded-lg font-bold" >sell-books</button> */}
                    <NavButton value={"donate-books"}/>
                    <NavButton value={"sell-books"}/>
                    <NavButton value={"login"} navigate={'/login'}/>
                    {/* <FaUserCircle className="text-secondary h-8 w-8 innline-block cursor-pointer" /> */}
                </div>
            </div >
            <div className="flex justify-evenly h-12 items-center bg-optionsBackground">
               {
                    <OptionBar/>
                }
                {
                    <OptionBar/>
                }
                {
                    <OptionBar/>
                }
                {
                    <OptionBar/>
                }
            </div>
        </div>

    )
}