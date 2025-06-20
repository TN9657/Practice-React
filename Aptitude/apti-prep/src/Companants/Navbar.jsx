import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">A</div>
        <span className="logo-text">Aptitude</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Leaderboard</a></li>
        <li><a href="#">Test</a></li>
        <li><a href="#">Practice</a></li>
        <li><a href="#">Analysis</a></li>
      </ul>

      {/* Auth Section */}
      <div className="auth-buttons">
        <a href="#" className="signin">Sign In</a>
        <button className="get-started ">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
