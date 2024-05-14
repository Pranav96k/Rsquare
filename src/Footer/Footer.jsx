import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" bg-[#19191a]">
      <div className="container flex justify-between text-white ">
        <div> Terms of Use</div>{" "}
        <div>Copyright © 2024 RSquareSoft Technologies</div>{" "}
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
