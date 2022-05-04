
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const Drowupdown=()=>{
  // const [data, setData] = useState([]);
  // const [open, setOpen] = React.useState(false);
  // const [isCloth,setisCloth]=useState();
  // const [isJewelery,setisJewelery]=useState();
  // const[isElectonic,setisElectronic]=useState();
  // const[isClothWomen,setisClothWomen]=useState();
  const [category, setCategory] = useState("");
  const navigate=useNavigate();


  const display =(value)=>{
    navigate("/category",{state:value})
    console.log("value",value)
}

 const handleChange = (e) => {
  setCategory(e.target.value);
  console.log("category is",category)
};

useEffect((e)=>{ // console.log("category",location.category)
    console.log('in');
    setCategory();
  

  },[]
)
  // return focus to the button when we transitioned from !open -> open

    return(
        <>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            label="Category"
          
          >
        
            <MenuItem className='drowdownmenu' onClick={()=>display()} value={"none"}>None</MenuItem> 
            <MenuItem onClick={()=>display()} value={"Men's Cloth"}>Men's Cloth</MenuItem>
            <MenuItem onClick={()=>display()} value={"Jewelery"}>Jewelery</MenuItem>
            <MenuItem  onClick={()=>display()} value={"electronics"}>electronics</MenuItem>
            <MenuItem onClick={()=>display()} value={" women's clothing"}> women's clothing</MenuItem>
          </Select>
        </FormControl>
        </>
    )
}
export default Drowupdown;
