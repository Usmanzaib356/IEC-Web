import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
function App() {
  return (
    <>
       <Header></Header>
        
    <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>

       <Footer></Footer>
    </>
  )
}

export default App