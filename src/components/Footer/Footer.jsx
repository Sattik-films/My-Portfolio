import React from "react";
import "./Footer.css";
import { CiUser } from "react-icons/ci";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src="" alt="footer-logo" /> */}
          <h3>Sattik.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            vel ab incidunt tenetur? Itaque et laborum dolorem, est maxime
            perspiciatis!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser className="Ciuser" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@Sattik. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink href="#contact" className="footer-link">
            <p>Connect With Me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
