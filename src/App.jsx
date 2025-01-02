import React from 'react'
import Sign from './components/Sign'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ShoeGallery from './components/ShoeGallery'
import ListHeading from './components/ListHeading'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div  className="bg-[#EAF2F3]">
      <Sign />
      <Navbar />
      <Home />
      <ShoeGallery />
      <ListHeading />
      <Footer />
    </div>
  )
}

export default App
      
