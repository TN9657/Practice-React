import React from "react";
import logoIMG from "./image/logo.png";
import "./Nav.css";

function Navbar() {
    return (
        <div className="Container">
            {/* Logo Section */}
            <div id="logo">
               <img src={logoIMG} alt="Logo" id="imag"/>
                <span>Banner Maker</span>
            </div>

            {/* Navigation Links */}
            <div id="home">
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </div>

            {/* Profile Section */}
            <div className="profile-wrapper">
                <details className="profile-details">
                    <summary id="Profile">Profile</summary>
                   <div id="show">
                   <li >Name</li>
                   <li >Email:</li>
                   </div>
                </details>
            </div>
        </div>
    );
}

export default Navbar;
