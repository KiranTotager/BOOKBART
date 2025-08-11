import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from "/images/login.jpg"
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

export default function Login() {
    let navigate = useNavigate();
    let [showPassword, setShowPassword] = useState(false);
    let [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    )
    let [touched, setTouched] = useState(
        {
            email: false,
            password: false,
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
    let payload = {
        userName: formData.email,
        password: formData.password
    }
    let submitForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/authenticate/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }).then((respone) => {
            if (!respone.ok) {
                if(respone.status==401){
                    // alert("wrong username or password")
                    toast.error("wrong username or password");
                }
                throw new Error("login error due to", respone.status)
            }
            return respone.json();
        }).then((result) => {
            console.log("the auth token is", result);
            toast.success("login successfully")
            navigate("/");
        }).catch((error) => {
            console.log(error);
        })
        // console.log("form is submitted");
        // alert("form is submitted")
        setFormData({
            password: "",
            email: "",
        })
    }
    return (
        <div className="flex items-center gap-20 bg-loginBackground">
        <ToastContainer position="top-right" autoClose={5000}/>
            <div className="w-[700px]">
                <img src={login} className="object-contain" alt="" />
            </div>
            <div className="min-h-screen flex items-center justify-center" >
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-loginRegistrationText mx-auto">Login...!</h1>

                    <fieldset className="border border-gray-300 rounded-lg p-8 m-8  flex items-center flex-col gap-5 justify-center max-w-md bg-white">
                        <form onSubmit={submitForm} className="space-y-2 font-sm w-80">
                            {/* <legend>Sign-UP</legend> */}
                            <div className="flex items-center gap-2">
                                <label htmlFor="email" className="block text-lg">Email</label>
                                {touched.email && !formData.email && <span className="text-red-500 text-xs">required <sup>*</sup></span>}
                            </div>
                            <input type="email" id="email" name="email" placeholder="please enter your email" value={formData.email} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />

                            <div className="flex items-center gap-2">
                                <label htmlFor="password" className="block text-lg">Password</label>
                                {touched.password && !formData.password && (<span className="text-red-500 text-xs">required <sup>*</sup></span>)}

                            </div>
                            <div className="flex">
                                <input type={showPassword ? "password" : "text"} id="password" name="password" placeholder="please enter your password" value={formData.password} onChange={handleChange} onBlur={handleTouch} className="w-64 border-0 focus:outline-none focus:border-b-2 border-blue-800" />
                                <span onClick={(e) => { setShowPassword(!showPassword) }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <input type="submit" value="sign-up" disabled={!formData.email || !formData.password} className={(!formData.email || !formData.password)?"block mx-auto bg-blue-100 text-white rounded-lg px-6 py-1":"block mx-auto bg-blue-500 text-white rounded-lg px-6 py-1"} />
                        </form>
                        <p className="text-sm text-center">dont have account...?<button className="text-blue-700" onClick={() => { navigate("/register") }}> regiser</button></p>

                    </fieldset>
                </div>
            </div>
        </div>

    )
}