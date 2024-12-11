import React from "react";
import "./Footer.css";
import { CiUser } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            nihil!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            {/* <img src="" alt="user-icon" /> */}
            <CiUser className="Ciuser"/>
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
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
