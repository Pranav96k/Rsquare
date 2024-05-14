import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="px-8 md:px-auto navbar-container bg-[#19191a]">
      <div className="nav mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-white font-bold md:order-1">
          {/* <img className="w-20 h-20" src={logo} alt="" /> */}
          <Link to="/">Rsquare</Link>
        </div>
        <div className="nav-content text-white order-3 w-full md:w-auto md:order-2 relative">
          <ul className="flex font-semibold justify-between items-center">
            <li className="nav-product md:px-4 md:py-2 hover:text-pink-200">
              <h5>Products </h5>
              <div className="absolute bg-white hidden text-black mt-2 p-2 rounded-md">
                <ul>
                  <li className="font-serif font-semibold m-1 hover:text-gray-700">
                    <Link to="/products">CogniNex Core</Link>
                  </li>
                  <li className="font-serif font-semibold m-1 hover:text-gray-700 ">
                    <Link>AI-Powered Aggregator Platform</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="md:px-4 md:py-2 hover:text-pink-200">
              <a href="/services">Explore</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-pink-200">
              <Link to="/about">About-us</Link>
            </li>
            <li className="md:px-4 md:py-2 hover:text-pink-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="nav-button order-2 md:order-3">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            <Link to="/contact" className="font-bold">
              Let's talk
            </Link>
          </button>
          <i class="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
