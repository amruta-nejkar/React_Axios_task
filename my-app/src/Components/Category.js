import React from "react";
import { useLocation } from "react-router-dom";

const Category = () => {
    const location=useLocation();
    console.log("category",location.category)
    return (
        <>
         <h1>hii</h1>
         <div>
             <p>{location.state.Category}</p>
         </div>
        </>
    )
}
export default Category;