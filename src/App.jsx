import { useState,useEffect } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/details/:id' Component={Details}/>

    </Routes>
    </BrowserRouter>
  )
 }

export default App
