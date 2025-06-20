import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Companants/Navbar'
import Right from './Companants/right'
import Cotainer from './Companants/Container'
import React from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-close sidebar when window is resized > 428px
  useEffect(() => {
    if (windowWidth > 428) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="main">
        {/* Hamburger appears only on small screens */}
        {windowWidth <= 428 && (
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        )}

        {/* Sidebar visibility based on screen width or toggle */}
        {(windowWidth > 428 || isOpen) && (
          <div className={`right ${isOpen ? 'show' : ''}`}>
            <Right />
          </div>
        )}

        <div className="container">
          <Cotainer/>
        </div>
      </div>
    </>
  )
}

export default App
