import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from "/images/login.jpg"
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

export default function Register() {
    let [showPassword, setShowPassword] = useState(false);
    let [verifyShowPassword, setVerifyShowPassword] = useState(false);
    let [formData, setFormData] = useState(
        {
            userName: "",
            email: "",
            phoneNumber: "",
            password: "",
            verifyPassword: "",
        }
    )
    let [touched, setTouched] = useState(
        {
            userName: false,
            email: false,
            phoneNumber: false,
            password: false,
            verifyPassword: false
        }
    )
    let handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }
    let handleTouch = (e) => {
        let { name } = e.target;
        setTouched({
            ...touched, [name]: true
        })
    }
    let registerPayload={
        name:formData.userName,
        password:formData.password,
        email:formData.email,
        phoneNumber:formData.phoneNumber
    }
    let submitForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/authenticate/register",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(registerPayload),
            }
        ).then((response)=>{
            if(!response.ok){
                console.log(response.json());
                if(response.status==409){
                    // alert("user already exist");
                    toast.error("user already exists")
                }

                throw new Error(`registration error :${response.status}`);
            }
            return response.json();
        })
        .then((result)=>{
            // alert("registration successfully");
            toast.success("registered successfully")
            navigate("/login")
        }).catch((error)=>{
            console.log(error);
        })

        // console.log("form is submitted");
        console.log(formData);
        // alert("form is submitted")
        setFormData({
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
            verifyPassword: ""
        })
    }



    let navigate=useNavigate();
    return (
        <div className="flex items-center gap-20 bg-loginBackground">
            <ToastContainer position="top-right" autoClose={5000}/>
            <div className="w-[700px]">
                <img src={login} className="object-contain" alt="" />
            </div>
            <div className="min-h-screen flex items-center justify-center " >
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-loginRegistrationText mx-auto">Register...!</h1>

                    <fieldset className="border border-gray-300 rounded-lg p-8 m-8  flex flex-col gap-5 items-center justify-center max-w-md bg-white">
                        <form onSubmit={submitForm} className="space-y-2 font-sm w-80">
                            {/* <legend>Sign-UP</legend> */}
                            <div className="flex items-center gap-2">
                                <label htmlFor="userName" className="block text-lg">User Name </label>{touched.userName && !formData.userName && (<span className="text-red-500 text-xs">required <sup>*</sup></span>)}

                            </div>
                            <input type="text" id="userName" name="userName" placeholder="please enter your name" value={formData.userName} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />

                            <div className="flex items-center gap-2">
                                <label htmlFor="email" className="block text-lg">Email</label>
                                {touched.email && !formData.email && <span className="text-red-500 text-xs">required <sup>*</sup></span>}
                            </div>
                            <input type="email" id="email" name="email" placeholder="please enter your email" value={formData.email} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />

                            <div className="flex items-center gap-2">
                                <label htmlFor="phoneNumber" className="block w-48 text-lg">Phone Number</label>
                                {touched.phoneNumber && !formData.phoneNumber && (<span className="text-red-500 text-xs w-64">required <sup>*</sup></span>)}
                            </div>
                            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="pleae enter phone number" pattern="[0-9]{10}" value={formData.phoneNumber} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />

                            <div className="flex items-center gap-2">
                                <label htmlFor="password" className="block text-lg">Password</label>
                                {touched.password && !formData.password && (<span className="text-red-500 text-xs">required <sup>*</sup></span>)}

                            </div>
                            <div className="flex">
                                <input type={showPassword ? "password" : "text"} id="password" name="password" placeholder="please enter your password" value={formData.password} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />
                                <span onClick={(e) => { setShowPassword(!showPassword) }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="verifyPassword" className="block text-lg">verify Password</label>
                                {touched.verifyPassword && !formData.verifyPassword && (<span className="text-red-500 text-xs">required</span>)}
                            </div>
                            <div className="flex">
                                <input type={verifyShowPassword ? "password" : "text"} id="verifyPassword" name="verifyPassword" placeholder="please re-enter your password" value={formData.verifyPassword} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />
                                <span onClick={(e) => { setVerifyShowPassword(!verifyShowPassword) }}>{verifyShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <span className="text-red-500 text-xs">{formData.password && formData.verifyPassword && formData.password != formData.verifyPassword && (<p>password does'nt match</p>)}</span>
                            <input type="submit" value="sign-up" disabled={!formData.userName || !formData.email || !formData.password || formData.password != formData.verifyPassword} className={(!formData.userName || !formData.email || !formData.password || formData.password != formData.verifyPassword)?"block mx-auto bg-blue-100 text-white rounded-lg px-6 py-1":"block mx-auto bg-blue-500 text-white rounded-lg px-6 py-1"} />
                        </form>
                            <p className="text-sm text-center">already regisered...?<button onClick={()=>{navigate("/login")}} className="text-blue-700">login</button></p>

                    </fieldset>
                </div>
            </div>
        </div>

    )
}