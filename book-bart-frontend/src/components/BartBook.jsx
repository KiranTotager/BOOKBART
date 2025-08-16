import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import BackNav from "./BackNav";
export default function BartBook() {
    let [isfoucesed,setFoucesd]=useState({
        bookName:0,
        descritption:0,
        price:0
    })

    let[location,setLocation]=useState(
        {
            state:"",
            district:"",
            city:"",
            pincode:""
        }
    )

    // let handleAvailabilityFocus=(e)=>{
    //     let {name,value}=e.target;
    //     if(value=="-")

    // }
    let handleLocation=(e)=>{
        let {name,value}=e.target;
        // alert(name)
        if(name=="state" && value==""){
            setLocation({
                state:value,
                district:"",
                city:"",
                pincode:""
            })
        }else if(name=="district" && value==""){
            setLocation({
                district:value,
                city:"",
                pincode:""
            })
        }
        else
            setLocation({...location,[name]:value});
        // alert(value);
    }
    return (
        <div className="">
            <BackNav />
            <div className="flex flex-col items-center m-10 ">
                <h1 className="font-bold text-3xl">POST YOUR BOOK</h1>

                <div className="border-2 border-gray-400 rounded-lg w-1/2 mt-5">
                    <div className="">
                        <div className="flex flex-col gap-4 w-96 m-5">
                            <h1 className="uppercase font-bold text-xl">Include Some Details</h1>
                            <p className="flex flex-col">
                                <label htmlFor="bookName" className={isfoucesed.bookName==0?"text-grey-400":isfoucesed.bookName==1?"text-blue-900 font-bold":"text-red-500 font-bold"}>Add Book Name <sup>*</sup></label>
                                <input type="text" id="bookName" name="bookName" className={isfoucesed.bookName==0?"outline-none border-2 border-gray-400 rounded-lg p-4":isfoucesed.bookName==1?"outline-none border-[3px] border-blue-900 rounded-lg p-4":"outline-none border-[3px] border-red-500 rounded-lg p-4"} onClick={(e)=>{
                                    let {name}=e.target;
                                    setFoucesd({...isfoucesed,[name]:1})
                                    }}
                                    onBlur={
                                        (e)=>{
                                            let {name}=e.target;
                                            setFoucesd({...isfoucesed,[name]:2})
                                        }
                                    }/>
                            </p>
                            <p className="flex gap-5 ">
                                <label htmlFor="availabilityMode">Availability mode  <sup>*</sup>:</label>
                                <select name="availability" id="availability"  className="w-32 bg-white border-2 border-black rounded-md p-1">
                                    <option value="donate">donate</option>
                                    <option value="sell">sell</option>
                                </select>
                            </p>
                            <p className="flex gap-5">
                                <label htmlFor="category">category  <sup>*</sup>:</label>
                                <select name="" id="" className="w-32 bg-white border-2 border-black rounded-md p-1">
                                    <option value="donate">academics</option>
                                    <option value="sell">competative</option>
                                    <option value="sell">programming</option>
                                </select>
                            </p>
                            <label htmlFor="description">description</label>
                            <textarea name="description" id="descritption" className="focus:outline-none border-2 border-gray-500 rounded-lg h-36 p-2"></textarea>
                        </div>

                        <hr className="border-t-2 border-gray-400" />
                        <div className="flex flex-col gap-5 m-5 w-96">
                            <h1 className="font-bold text-xl">Set a Price</h1>
                            <p className="flex items-center border-2 border-gray-500 rounded p-1"><span className="text-gray-400"><FaRupeeSign size={12} /></span><input type="text" className="focus:outline-none border-l-2 border-gray-300 p-2 ml-1"/></p>
                        </div>
                        <hr className="border-t-2 border-gray-400" />
                        <div className="flex flex-col gap-4 m-5">
                            <h1 className="uppercase font-bold text-xl">confirm your location</h1>
                            <p className="flex gap-2">
                                <label htmlFor="state" className="text-lg">state <sup>*</sup></label>
                                <input type="text" name="state" value={location.state} placeholder="enter your state" onChange={handleLocation}/>
                            </p>
                           {location.state!="" &&  <p className="flex gap-2">
                                <label htmlFor="district">District <sup>*</sup></label>
                                <input type="text " name="district" value={location.district}  placeholder="enter your district" onChange={handleLocation}/>
                            </p>}
                            {
                                location.district!=""&&
                                <p>
                                    <label htmlFor="city">city <sup>*</sup></label>
                                    <input type="text" name="city" placeholder="enter your city" value={location.city} onChange={handleLocation}/>
                                </p>
                            }
                            {
                                location.city!=""&&
                                <p>
                                    <label htmlFor="pincode">pincode <sup>*</sup></label>
                                    <input type="text" name="pincode" placeholder="enter your pincode" value={location.pincode} onChange={handleLocation}/>
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}