import React, { useContext, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuContext from "../../contexts/MenuContext";

function Navbar() {
  const {menu, setMenu} = useContext(MenuContext);
  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = "0";
  };
  const closeMenu = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h2>
        <i>Sattik.</i>
      </h2>
      <RiMenu2Fill onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <IoClose onClick={closeMenu} className="nav-mob-close" />
        <li>
          <AnchorLink href="#home" className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink href="#about" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink href="#services" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink href="#work" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink href="#contact" className="anchor-link" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <div className="underline"></div> : null}
        </li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
}

export default Navbar;
