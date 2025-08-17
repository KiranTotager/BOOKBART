import React from "react"; 
import { useDispatch } from "react-redux";
function LocationDropDown({name,id,options,action}){
    let dispatch=useDispatch();
    
    return(
        <select name={name} id={id} className="bg-white text-center border-2 border-gray-500 rounded-lg px-2" onChange={(e)=>{
            alert(e.target.value);
            dispatch(action(e.target.value));
        }}>
            <option value=""></option>
            <option value="bcd">bcd</option>
            <option value="abc">abc</option>
        </select>
    )
}
export default LocationDropDown;