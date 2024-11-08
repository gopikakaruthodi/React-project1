import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let [arr,setArr]=useState([])
    let[cat,setCat]=useState()
    let[filter,setFilter]=useState("")

    useEffect(()=>{
      getData()
    },[])
  
    const getData=async()=>{
      const res=await fetch("https://dummyjson.com/products")
      const data=await res.json()
      console.log(data.products);
      setArr(data.products)

      const resCat=await fetch("https://dummyjson.com/products/categories")
      const dataCat=await resCat.json()
      console.log(dataCat);
      setCat(dataCat)
    }
    return (
      <>
       <div className="main">
       
        <div className="nav">
          <h3>PRODUCTS INFO</h3>
          <input type="search" name="" id="" />
        </div>
        <div className="categories">
            <section onClick={()=>setCat("")}>All</section>
        </div>
          <div className="left">
              <div className="cards">
              {arr.map((prod)=>{ return <Link to={`/details/${prod.id}`}> <div className="card">
                <div className="image">
                    <img src={prod.thumbnail} alt="" />
                </div>
                <div className="content">
                    <p className="category">{prod.category}</p>
                    <h4>{prod.title}</h4>
                    <p className="price">${prod.price}</p>
                </div>
                </div>
              </Link>
              })}
              </div>
          </div>
        </div>
      </>
    ) 
}
export default Home