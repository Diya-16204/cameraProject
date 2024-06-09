import React from 'react';
import "./product.css";

function Product({brand,warranty,price,resolution,colour}){
    let styles={
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        height:"100px",
        width:"100%",
        justifyContent:"center",
        

    };
    return(
        <div className="divElement" style={styles}>
        <span>{brand}</span>
        <span>{warranty}</span> 
        <span>{price}</span>    
        <span>{resolution}</span> 
        <span>{colour}</span> 

        </div>
    )

   
}

export default Product;