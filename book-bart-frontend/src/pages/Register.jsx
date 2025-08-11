import React, { useState } from "react";


export default function Register() {
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
    let submitForm = (e) => {
        e.preventDefault();
        console.log("form is submitted");
        alert("form is submitted")
        setFormData({
            userName: "",
            password: "",
            email: "",
            phoneNumber: "",
            verifyPassword: ""
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <fieldset className="border border-gray-300 rounded-lg p-8 m-8  flex items-center justify-center max-w-md">
                <legend className="px-2 font-semibold">Sign-UP</legend>
                <form onSubmit={submitForm} className="space-y-2 font-sm">
                    {/* <legend>Sign-UP</legend> */}
                    <label htmlFor="userName" className="block">User Name</label>
                    <input type="text" id="userName" name="userName" placeholder="please enter your name" value={formData.userName} onChange={handleChange} onBlur={handleTouch} className="border rounded-lg"/>
                    {touched.userName && !formData.userName && (<p className="text-red-500 text-xs">name is required</p>)}
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" id="email" name="email" placeholder="please enter your email" value={formData.email} onChange={handleChange} onBlur={handleTouch} className="border rounded-lg"/>
                    {touched.email && !formData.email && <p className="text-red-500 text-xs">email is required</p>}
                    <label htmlFor="phoneNumber" className="block">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="pleae enter phone number" value={formData.phoneNumber} onChange={handleChange} onBlur={handleTouch} className="border rounded-lg"/>
                    {touched.phoneNumber && !formData.phoneNumber && (<p className="text-red-500 text-xs">phone number is required</p>)}
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" id="password" name="password" placeholder="please enter your password" value={formData.password} onChange={handleChange} onBlur={handleTouch} className="border rounded-lg"/>
                    {touched.password && !formData.password && (<p className="text-red-500 text-xs">password number is required</p>)}

                    <label htmlFor="verifyPassword" className="block">verify Password</label>
                    <input type="password" id="verifyPassword" name="verifyPassword" placeholder="please re-enter your password" value={formData.verifyPassword} onChange={handleChange} onBlur={handleTouch} className="border rounded-lg"/>
                    {touched.verifyPassword && !formData.verifyPassword && (<p className="text-red-500 text-xs">password verification is required</p>)}

                    {formData.password && formData.verifyPassword && formData.password != formData.verifyPassword && (<p>password does'nt match</p>)}
                    <input type="submit" value="sign-up" disabled={!formData.userName || !formData.email || !formData.password || formData.password != formData.verifyPassword} className="block" />
                </form>

            </fieldset>
        </div>

    )
}