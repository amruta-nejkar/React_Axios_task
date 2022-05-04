import { Card } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import Drowupdown from "./Components/Drowupdown";
import Category from "./Components/Category";
import DrowDown from "./Components/DropDown";



const Router=()=>{
    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route exact path="" element={<ProductList/>} />
                <Route exact path="productdetails" element={<ProductDetails/>} />
                <Route exact path="drowupdown" element={<Drowupdown/>} />
                <Route exact path="category" element={<Category/>} />
                <Route exact path="dropdown" element={<DrowDown/>} />

            </Routes>
        </BrowserRouter>
        
        </>
    )

}
export default Router;