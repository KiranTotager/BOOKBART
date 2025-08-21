import React, { useState } from "react";
import { FaRupeeSign ,FaCameraRetro} from "react-icons/fa";
import BackNav from "./BackNav";
import LocationDropDown from "./LocationDropDown";
import { useDispatch, useSelector } from "react-redux";
import { setBookName,setPrice, setAvailabilityMode, setState, setDistrict, setCity, setPincode } from "../ReduxToolKit/booksDetailSlice";
export default function BartBook() {
    let [isfoucesed, setFoucesd] = useState({
        bookName: 0,
        descritption: 0,
        availability: 0,
        category: 0,
        price: 0
    })
    let dispatch = useDispatch();
    let bookName = useSelector((state) => state.bookDetail.bookName);
    let availability=useSelector((state)=>state.bookDetail.availaibilityMode);
    let category=useSelector((state)=>state.bookDetail.category);
    let bookPrice=useSelector((state)=>state.bookDetail.price);
    let selectedState = useSelector((state) => state.bookDetail.state);
    let selectedDistrict = useSelector((state) => state.bookDetail.district);
    let selectedCity = useSelector((state) => state.bookDetail.city);
    let selectedPincode=useSelector((state)=>state.bookDetail.pincode);

    let postButtonHandle=(bookName=="" || availability=="" || category=="" || bookPrice =="" || selectedState=="" || selectedDistrict =="" || selectedCity=="" || selectedPincode=="");
    // let handleAvailabilityFocus=(e)=>{
    //     let {name,value}=e.target;
    //     if(value=="-")

    // }

    return (
        <div className="">
            <BackNav />
            <div className="flex flex-col items-center m-10 ">
                <h1 className="font-bold text-3xl">POST YOUR BOOK</h1>

                <div className="border-2 flex justify-center flex-col p-2 border-gray-400 rounded-lg w-1/2 mt-5">
                    <div className="">
                        <div className="flex flex-col gap-4 w-96 m-5">
                            <h1 className="uppercase font-bold text-xl">Include Some Details</h1>
                            <p className="flex flex-col">
                                <label htmlFor="bookName" className={isfoucesed.bookName == 0 ? "text-grey-400" : isfoucesed.bookName == 1 ? "text-blue-900 font-bold" : "text-red-500 font-bold"}>Add Book Name <sup className="text-red-500 font-bold">*</sup></label>
                                <input type="text" id="bookName" name="bookName" value={bookName} className={isfoucesed.bookName == 0 ? "outline-none border-2 border-gray-400 rounded-lg p-4" : isfoucesed.bookName == 1 ? "outline-none border-[3px] border-blue-900 rounded-lg p-4" : "outline-none border-[3px] border-red-500 rounded-lg p-4"} onChange={(e) => dispatch(setBookName(e.target.value))} onClick={(e) => {
                                    let { name } = e.target;
                                    setFoucesd({ ...isfoucesed, [name]: 1 })
                                }}
                                    onBlur={
                                        (e) => {
                                            let { name, value } = e.target;
                                            if (value == "" || value.length < 10) {
                                                setFoucesd({ ...isfoucesed, [name]: 2 });
                                            } else {
                                                setFoucesd({ ...isfoucesed, [name]: 0 });
                                            }
                                        }
                                    } />
                            </p>
                            <p className="flex gap-5 ">
                                <label htmlFor="availabilityMode" className={isfoucesed.availability == 0 ? "text-grey-400" : isfoucesed.availability == 1 ? "text-blue-900 font-bold" : "text-red-500 font-bold"}>Availability mode  <sup className="text-red-500 font-bold">*</sup>:</label>
                                <select name="availability" id="availability" className={isfoucesed.availability == 0 ? "w-32 bg-white border-2 border-black rounded-md p-1 text-center" : isfoucesed.availability == 1 ? "w-32 bg-white border-[3px] border-blue-900 rounded-md p-1 text-center" : "w-32 bg-white border-[3px] border-red-500 rounded-md p-1 text-center"} onClick={(e) => setFoucesd({ ...isfoucesed, [e.target.name]: 1 })} onBlur={(e) => {
                                    let { name, value } = e.target;
                                    if (value != "")
                                        setFoucesd({ ...isfoucesed, [name]: 0 });
                                    else
                                        setFoucesd({ ...isfoucesed, [name]: 2 });
                                }}>
                                    <option value=""></option>
                                    <option value="donate">donate</option>
                                    <option value="sell">sell</option>
                                </select>
                            </p>
                            <p className="flex gap-5">
                                <label htmlFor="category" className={isfoucesed.category == 0 ? "text-grey-400" : isfoucesed.category == 1 ? "text-blue-900 font-bold" : "text-red-500 font-bold"}>category  <sup className="text-red-500 font-bold">*</sup>:</label>
                                <select name="category" id="category"  className={isfoucesed.category == 0 ? "w-32 bg-white border-2 border-black rounded-md p-1 text-center" : isfoucesed.category == 1 ? "w-32 bg-white border-[3px] border-blue-900 rounded-md p-1 text-center" : "w-32 bg-white border-[3px] border-red-500 rounded-md p-1 text-center"} onClick={(e) => setFoucesd({ ...isfoucesed, [e.target.name]: 1 })} onBlur={(e) => {
                                    let { name, value } = e.target;
                                    if (value != "")
                                        setFoucesd({ ...isfoucesed, [name]: 0 });
                                    else
                                        setFoucesd({ ...isfoucesed, [name]: 2 });
                                }}>
                                    <option value=""></option>
                                    <option value="donate">academics</option>
                                    <option value="sell">competative</option>
                                    <option value="sell">programming</option>
                                </select>
                            </p>
                            <label htmlFor="description" className={isfoucesed.descritption==0?"":"text-blue-900 font-bold"}>description</label>
                            <textarea name="descritption" id="descritption" className={isfoucesed.descritption==0?"focus:outline-none border-2 border-gray-500 rounded-lg h-36 p-2":"border-[2px] border-blue-900 rounded-lg h-36 p-2"} onClick={(e)=>{
                                let {name,value}=e.target;
                                setFoucesd({...isfoucesed,[name]:1})
                            }} onBlur={(e)=>setFoucesd({...isfoucesed,[e.target.name]:0})}></textarea>
                        </div>

                        <hr className="border-t-2 border-gray-400" />
                        <div className="flex flex-col gap-5 m-5 w-96">
                            <h1 className="font-bold text-xl">Set a Price</h1>
                            <p className={isfoucesed.price==0?"flex items-center border-2 border-gray-500 rounded p-1":isfoucesed.price==1?"flex items-center border-[3px] border-blue-900 rounded p-1":"flex items-center border-[3px] border-red-500 rounded p-1"}><span className="text-gray-400"><FaRupeeSign size={12} /></span><input type="text"  name="price" id="price" value={bookPrice} className="focus:outline-none border-l-2 border-gray-300 p-2 ml-1" onClick={(e)=>setFoucesd({...isfoucesed,[e.target.name]:1})} onBlur={
                                (e)=>{
                                    let {name,value}=e.target;
                                    // alert("here it is blur function"+value);
                                    if(value===""){
                                        setFoucesd({...isfoucesed,[name]:2});
                                    }
                                    else if(!isNaN(Number(value))){
                                        dispatch(setPrice(value));
                                        alert("in nan condition"+value);
                                        setFoucesd({...isfoucesed,[name]:0});
                                    }else{
                                        alert("here it is in nan else condition");
                                        setFoucesd({...isfoucesed,[name]:0});
                                    }
                                }
                            } onChange={(e)=>{if(!isNaN(Number(e.target.value))){dispatch(setPrice(e.target.value))} }}/></p>
                        </div>
                        <hr className="border-t-2 border-gray-400" />
                        <div className="m-5">
                            <h1 className="text-lg font-bold uppercase">Upload Photo's</h1>
                            <div className="m-3">
                                <p className="h-24 w-24 border-2 border-gray-500 rounded-sm flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"><FaCameraRetro size={28}/><span>Add Photo</span></p>
                            </div>
                        </div>
                        <hr className="border-t-2 border-gray-400" />
                        <div className="flex flex-col gap-4 m-5">
                            <h1 className="uppercase font-bold text-xl">confirm your location</h1>
                            
                                <LocationDropDown name="state" id="state" action={setState} label="state"/>
                            
                            {selectedState != "" &&
                                    <LocationDropDown name="district" id="district" label="district" action={setDistrict} />
                            }
                            {
                                selectedState != "" && selectedDistrict != "" &&
                                
                                    <LocationDropDown name="city" id="city" label="city" action={setCity} />
                        
                            }
                            {
                                selectedState != "" && selectedDistrict != "" && selectedCity != "" &&
                                
                                    <LocationDropDown name="pincode" id="pincode" label="pincode" action={setPincode} />
                                
                            }
                        </div>
                    </div>
                    <button className="mx-auto bg-blue-500 p-1 w-20 rounded-lg text-white" disabled={postButtonHandle} >post</button>
                </div>
            </div>
        </div>
    )
}