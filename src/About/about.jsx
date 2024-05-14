import React from "react";
import "./about.css";
import Ramesh from "../IMG/ramesh.jpeg";
import Rajneesh from "../IMG/rajneesh.jpeg";


const About = () => {
  return (
    <div>
      <div className="bg-black">
        <div className=" flex justify-center items-center">
          <div className="flex-col text-center m-5">
            <span className="text-3xl text-white font-serif ">
              What is{" "}
              <span className="text-violet-700 font-bold">R-Square?</span>
            </span>
            <p className="text-white text-xl max-w-3xl m-5">
              <span className="font-bold">RSquare</span> (R² or the coefficient
              of determination) is a statistical measure in a regression model
              that determines the proportion of variance in the dependent
              variable that can be explained by the independent variable.
            </p>
          </div>
        </div>

        <div class="flex mt-8 max-w-3xl items-start justify-center mx-auto">
          <div class="w-1/2 min-h-[338px] m-4 p-4 bg-[#19191a] rounded-md shadow-md">
            <span class="text-4xl text-white font-serif font-bold">
              Vision{" "}
            </span>
            <p class="text-xl text-white  font-serif mt-4">
              Craft Best-in-class Technology Products and Solutions
            </p>
          </div>
          <div class="w-1/2 m-4 p-4 bg-[#19191a] rounded-md shadow-md">
            <span class="text-4xl text-white font-serif font-bold">
              Mission{" "}
            </span>
            <p class="text-xl text-white  font-serif mt-4">
              Foster local talent and deliver best-in-class technology products
              globally. Strive for excellence, sustainable development, and
              community empowerment, contributing to a global impact through
              innovation, agility, and inclusivity
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto bg-[#0c0c0c]">
        <h1 className="font-serif text-white mt-8  mb-4 text-4xl font-bold">
          Our Team
        </h1>
        <h4 className="font-serif text-gray-300 mt-4 font-bold">
          Meet the creative minds behind our success.
        </h4>

        <div className="flex max-w-6xl">
          <div className="p-4 m-20 mt-8 items-center text-center">
            <img
              src={Ramesh}
              alt="ramesh img"
              className="min-h-64 max-w-64 mx-auto mb-4 rounded-md"
            />
            <h3 className="text-white font-bold text-2xl">Ramesh Gharmalkar</h3>
            <h6 className="text-gray-500">Co-Founder, CEO</h6>
            <p className="text-white">
              Seasoned technology leader with extensive experience managing and
              developing software in complex, global environments. Strong
              technical skills, leadership abilities, and proven track record of
              success
            </p>
          </div>
          <div className="p-4 m-20  mt-8 text-center">
            <img
              src={Rajneesh}
              alt="rajneesh img"
              className="min-h-64 max-w-64 mx-auto mb-4 rounded-md"
            />
            <h3 className="text-white font-bold text-2xl">Rajneesh Shrimali</h3>
            <h6 className="text-gray-500">Co-Founder, CTO</h6>
            <p className="text-white">
              Unique blend of technical prowess, strategic vision, and
              leadership acumen, with experience in building and launching
              successful cloud-based software products.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <h1 className="text-white text-4xl flex justify-center font-bold h-40">
          Our Culture
        </h1>
      </div>
    </div>
  );
};

export default About;
