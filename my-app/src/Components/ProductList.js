
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import Header from '../Modules/Header';



const ProductList=()=>{
    const [data, setData] = useState([]);
    const navigate=useNavigate();

    const getData = () =>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            setData(response.data);
        })
           
    }
    useEffect(() => {
        getData();
    },[])

    const show =(item)=>{
        navigate("/ProductDetails",{state:item})
        console.log("item",item)

    }
    return(
        <>
        <Header/>
         <h1>Table Data</h1>
        <Table>
                <TableHead>
                    <TableRow>
                        {/* <TableCell>ID</TableCell> */}
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Price</TableCell>
                        {/* <TableCell>Category</TableCell> */}
                        <TableCell>Description</TableCell>
                       
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item,index) => {
                        return(
                        
                            <TableRow key={index} onClick={()=>show(item)} >
                            {/* <TableCell >{item.id}</TableCell> */}
                            <TableCell><img  className='image' src={item.image}></img></TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            {/* <TableCell>{item.category}</TableCell> */}
                            <TableCell>{item.description}</TableCell>
                           
                            
                        </TableRow>
                        

                        )
                    }
                       
                    )}
                </TableBody>
       
         </Table>

        </>
    )
}
export default ProductList;