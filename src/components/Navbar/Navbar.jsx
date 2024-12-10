import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      {/* <img src="" alt="logo" /> */}
      <h2>
        <i>Sattik.</i>
      </h2>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar
