import { useState,useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let [arr,setArr]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json()
    console.log(data.products);
    setArr(data.products)
  }


  return (
    <>
     <div className="main">
      <div className="nav">
        <h3>PRODUCTS INFO</h3>
        <input type="search" name="" id="" />
      </div>
        <div className="left">
            <div className="cards">
            {arr.map((prod)=>{return <div className="card">
                <div className="image">
                  <img src={prod.thumbnail} alt="" />
                </div>
                <div className="content">
                  <p className="category">{prod.category}</p>
                  <h4>{prod.title}</h4>
                  <p className="price">${prod.price}</p>
                </div>
                
              </div>
            })}
            </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  )
}

export default App
