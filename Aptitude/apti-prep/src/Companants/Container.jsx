import React, { useState } from "react";
import './Container.css';
// import image from './assets/Community.png'; // Assuming the image is in the images folder    
import Card12 from "./cards/Card12";       

const Container = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <>
      <div>
        {showText && (
          <p className="Hello">
            Welcome Back,&nbsp;  <span id="name">John!</span>
          </p>
        )}
        <h1>Welcome to the Aptitude Preparation Portal</h1>
        <p>Here you can find various resources and tests to enhance your aptitude skills.</p>

        

        <button className="start-button" onClick={handleClick}>
          Get Started
        </button>
      </div>
        
        <div className="box">
          <Card12/>
        </div>
    </>
  );
};

export default Container;
 