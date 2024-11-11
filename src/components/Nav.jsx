import React from 'react'

const Nav =({setState})=>{
  return (
        <div className="nav">
          <h3>PRODUCTS INFO</h3>
          <input type="search" name="" id="" onChange={(e)=>setState(e.target.value)} />
        </div>
  )
}

export default Nav