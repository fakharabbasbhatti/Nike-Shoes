import React, { useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="footer">
      <footer className=" text-black py-4">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-4">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-700">
                &copy;2025 BHATTI Nike, Inc. All rights reserved.
              </p>
            </div>
            <button
              className="md:hidden text-gray-700 hover:text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? "Close Menu" : "Open Menu"}
            </button>
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex flex-col md:flex-row md:space-x-8 text-center`}
            >
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 md:py-0"
              >
                Guide
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 md:py-0"
              >
                Terms of Sales
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 md:py-0"
              >
                Nike Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
