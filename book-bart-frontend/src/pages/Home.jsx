import React from "react";
import bookDetails from "../Data/booksDetails"
import Header from "../components/Header"
import BookCard from "../components/BookCard"
function Home(){
    return(
        <div className="flex flex-col gap-10 pb-20">
            <Header/>
            <div className="flex flex-wrap gap-4 justify-center">
            {bookDetails.map((value,key)=>(
                <BookCard bookDetail={value} key={key}/>
            )
                
            )}
        </div>
        </div>
    )
}
export default Home;