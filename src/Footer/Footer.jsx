import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" bg-[#090909] border border-[#090909]">
      <div className="max-w-6xl min-h-16 mt-6 mx-auto  grid grid-cols-1 md:grid-cols-3  text-center text-white ">
        <div> Terms of Use</div>
        <div>Copyright © 2024 RSquareSoft Technologies</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
