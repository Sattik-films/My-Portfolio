import React from "react";
import { CiUser } from "react-icons/ci";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 lg:px-32 text-white bg-black ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8"></div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between gap-5 items-center text-gray-400 text-sm">
        <div className="flex items-center space-x-4">
          <CiUser className="text-2xl" />
          <p className="font-bold">Sattik</p>
        </div>
        <p className="text-center md:text-left">
          @2025 Sattik. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <AnchorLink
            href="#home"
            className="cursor-pointer hover:text-white transition"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="cursor-pointer hover:text-white transition"
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#work"
            className="cursor-pointer hover:text-white transition"
          >
            Works
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="cursor-pointer hover:text-white transition"
          >
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
