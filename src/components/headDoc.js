import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function HeadDoc() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <animated.header style={props} className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Hamburger Menu Button (on the left, slightly shifted to the right) */}
        <button
          className="inline-flex items-center text-gray-600 lg:hidden ml-20"
          onClick={toggleMenu}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Brand or Logo */}
        <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Dr. Alan Smith</span>
        </a>

        {/* Links Section (hidden on mobile, visible on larger screens) */}
        <nav className="hidden lg:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="https://example1.com" className="mr-5 hover:text-gray-900">עמוד בית</a>
          <a href="https://example2.com" className="mr-5 hover:text-gray-900">Second Link</a>
          <a href="https://example3.com" className="mr-5 hover:text-gray-900">Third Link</a>
          <a href="https://example4.com" className="hover:text-gray-900">Fourth Link</a>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
            <nav className="flex flex-col items-start p-5">
              <a href="https://example1.com" className="mb-4 hover:text-gray-900">עמוד בית</a>
              <a href="https://example2.com" className="mb-4 hover:text-gray-900">Second Link</a>
              <a href="https://example3.com" className="mb-4 hover:text-gray-900">Third Link</a>
              <a href="https://example4.com" className="hover:text-gray-900">Fourth Link</a>
            </nav>
          </div>
        )}

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <div className="relative inline-flex">
            {/* Language Selector or other content */}
          </div>
        </div>
      </div>
    </animated.header>
  );
}

export default HeadDoc;
