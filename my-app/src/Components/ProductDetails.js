import React from "react";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductDetails=()=>{
    const location=useLocation();
    console.log("user",location.state)
    return(
        <>
        <div className="cardone">
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
         <img className="img" src={location.state.image}></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p>{location.state.title}</p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>{location.state.description}</p> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>{location.state.price}</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </>
    )
}
export default ProductDetails;