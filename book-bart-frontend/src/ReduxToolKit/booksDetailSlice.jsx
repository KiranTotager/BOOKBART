import { createSlice } from "@reduxjs/toolkit";

const initialValuesOfBooksDetail={
    bookName:"",
    availaibilityMode:"",
    category:"",
    price:"",
    state:"",
    district:"",
    city:"",
    pincode:"",
}

const booksDetailSlice=createSlice({
    name:"booksDetail",
    initialState:initialValuesOfBooksDetail,
    reducers:{
        setBookName(state,action){
            state.bookName=action.payload;
        },
        setAvailabilityMode(state,action){
            state.availaibilityMode=action.payload;
        },
        setCategory(state,action){
            state.category=action.payload;
        },
        setPrice(state,action){
            state.price=action.payload;
        },
        setState(state,action){
            state.state=action.payload;
        },
        setDistrict(state,action){
            state.district=action.payload;
        },
        setCity(state,action){
            state.city=action.payload;
        },
        setPincode(state,action){
            state.pincode=action.payload;
        }
    }
})
export const {setBookName,setAvailabilityMode,setCategory,setPrice,setState,setDistrict,setCity,setPincode}=booksDetailSlice.actions;
export default booksDetailSlice.reducer;