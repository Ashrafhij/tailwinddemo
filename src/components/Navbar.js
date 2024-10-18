import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../layouts/Button";
import Contact from "./Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  // Track scroll position to change navbar background
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-10 text-white transition-colors duration-300 ${
        scrollPosition > 0 ? "bg-[#36ae9a]" : "bg-backgroundColor"
      }`}
    >
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">.וולנס ויסטה</h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer">
              בית
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer">
              עלינו
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer">
              שירותים
            </Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer">
              רופאים
            </Link>
            <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer">
              בלוג
            </Link>
          </nav>

          {/* Desktop "Contact Us" Button */}
          <div className="hidden lg:flex">
            <Button title="צור קשר" onClick={openForm} />
          </div>

          {/* Show Contact Form */}
          {showForm && (
            <div className="absolute top-16 left-0 right-0 z-20 bg-white shadow-lg p-5 rounded-lg">
              <Contact closeForm={closeForm} />
            </div>
          )}

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer" onClick={closeMenu}>
            בית
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer" onClick={closeMenu}>
            עלינו
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer" onClick={closeMenu}>
            שירותים
          </Link>
          <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer" onClick={closeMenu}>
            רופאים
          </Link>
          <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-orange-500 transition-all cursor-pointer" onClick={closeMenu}>
            בלוג
          </Link>

          {/* Add Orange Line at the Bottom */}
          <div className="h-1 bg-orange-500 w-1/2 mx-auto my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
