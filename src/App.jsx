import { useState,useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Nav from './components/Nav'

function App() {
  const[search,setSearch]=useState("")
  return(
    <BrowserRouter>
    <Nav setState={setSearch}/>
    <Routes>
      <Route path='/' element={<Home search={search}/>}/>
      <Route path='/details/:id' Component={Details}/>

    </Routes>
    </BrowserRouter>
  )
 }

export default App
