import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../layouts/Button";
import Contact from "./Contact";
import Loader from "../components/Loader"; // Import the Loader component
import logo from "../assets/img/logo.jpeg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

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
      className={`fixed w-full z-10 text-black-500 transition-colors duration-300 ${
        scrollPosition > 0 ? "bg-backgroundColor" : "bg-backgroundColor"
      }`}
    >
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500} className="flex items-center">
              {/* <h1 className="text-2xl font-semibold">חמודי דנטל</h1> */}
              {loading && <Loader />} {/* Show loader if loading */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-15 ml-5" // Adjust margin for spacing
                onLoad={() => setLoading(false)} // Set loading to false when the image is loaded
                style={{ display: loading ? 'none' : 'block' }} // Hide the logo while loading
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="ClinicGallerySection" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer">
              עלינו
            </Link>
            <Link to="BeforeAndAfter" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer">
              לפני ואחרי
            </Link>
            <Link to="DentalAreasSection" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer">
              שירותים
            </Link>
            <Link to="Doctors" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer">
              רופאים
            </Link>
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer">
              בית
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
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-black-500 left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer" onClick={closeMenu}>
            בית
          </Link>
          <Link to="Doctors" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer" onClick={closeMenu}>
            רופאים
          </Link>
          <Link to="DentalAreasSection" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer" onClick={closeMenu}>
            שירותים
          </Link>
          <Link to="BeforeAndAfter" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer" onClick={closeMenu}>
            לפני ואחרי
          </Link>
          <Link to="ClinicGallerySection" spy={true} smooth={true} duration={500} className="hover:text-secondColor transition-all cursor-pointer" onClick={closeMenu}>
            עלינו
          </Link>

          <div className="h-1 bg-secondColor w-1/2 mx-auto my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
