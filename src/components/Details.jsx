import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css'

const Details=()=>{
    const {id}=useParams();
    let[item,setItem]=useState({})
    useEffect(()=>{
        getProduct()
    },[])
    const getProduct=async()=>{
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        const data=await res.json()
        console.log(data);
        setItem(data);
    }
    console.log(item.images);
    
    return(
        <>
        <div className="product">
        <div className="pro-de">
            
            <div className="pro-pic" >
                <img src={item.thumbnail} alt="no image" id="img" />
            </div>
            <div className="pro-cards" id="card">
            <div className="pro-card">
               {/* {item.images.map((img)=><img  src={img} alt="" id="images"/>)} */}
            </div>`

                
            </div>
        </div>
       
    </div>
        </>
    )

}

export default Details