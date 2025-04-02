import React, { useContext, useEffect, useRef } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuContext from "../../contexts/MenuContext";

function Navbar() {
  const { menu, setMenu } = useContext(MenuContext);
  const menuref = useRef();

  const sections = ["home", "about", "services", "work", "contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility required to trigger
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const openMenu = () => {
    menuref.current.style.right = "0";
  };

  const closeMenu = () => {
    menuref.current.style.right = "-100%";
  };

  return (
    <div className="fixed w-full flex justify-between items-center p-5 h-[10vh] bg-black/80 z-50">
      <h2 className="text-white text-2xl font-semibold italic">Sattik.</h2>
      <RiMenu2Fill
        onClick={openMenu}
        className="md:hidden text-white text-3xl cursor-pointer"
      />
      <ul className="hidden md:flex space-x-10 text-white text-lg">
        {sections.map((section) => (
          <li key={section} className="relative cursor-pointer">
            <AnchorLink
              href={`#${section}`}
              className={`text-white hover:text-orange-500 transition duration-300 ${
                menu === section ? "font-bold text-orange-500" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </AnchorLink>
            {menu === section && (
              <div className="absolute bottom-[-5px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500"></div>
            )}
          </li>
        ))}
      </ul>
      <div className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-lg cursor-pointer transition transform hover:scale-105 text-white">
        Connect with me
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuref}
        className="fixed top-0 right-[-100%] w-4/5 max-w-xs h-screen bg-gray-700 text-white flex flex-col space-y-6 items-start pt-10 px-8 transition-right duration-500 md:hidden"
      >
        <IoClose
          onClick={closeMenu}
          className="absolute top-5 right-5 text-3xl cursor-pointer"
        />
        {sections.map((section) => (
          <AnchorLink
            key={section}
            href={`#${section}`}
            className="text-2xl hover:text-orange-500 transition duration-300"
            onClick={() => {
              setMenu(section);
              closeMenu();
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </AnchorLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
