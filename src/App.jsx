import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Cursor from './components/cursor/Cursor'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import Works from './components/Works/Works'
import HorizontalScrollCarousel from './components/HorizontalScroll/Horizontal'

function App() {
  

  return (
    <>
      <Navbar/>
      {/* <Cursor/> */}

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/project1" element={<ProjectDetails/>} />
        <Route path="/works" element={<Works/>} />
      </Routes>
    </>
  )
}

export default App
