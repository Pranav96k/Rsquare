import React from "react";
import { Link } from "react-router-dom";
import home from "../IMG/Home.jpg";
import I1 from "../IMG/talkexpert.jpeg";
import I2 from "../IMG/Project-In-Mind.jpeg";
import I3 from "../IMG/Why-Choose-Us.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={home} alt="Home" className="home-image" />

        <div className="flex flex-col text-center items-center mt-6">
          <h2 className="text-white font-serif font-bold text-3xl ">
            Delivering Best-in-Class Technology
          </h2>
          <button className="px-4 py-2 mt-5 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center justify-center ">
            <a href="https://calendly.com/rsquaresoft" className="font-bold">
              Connect
            </a>
          </button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto  text-center m-4">
          <div className="flex-1 p-6">
            <h1 className="text-lime-200  text-2xl font-serif font-semibold mx-4 mt-5 ">
              <Link to="/products">CogniNex Core – Enterprise AI </Link>
            </h1>

            <p className="text-lime-200  mt-10">
              Elevate enterprise capabilities with intelligent automation,
              predictive analytics, NLP, and scalable infrastructure for
              unparalleled efficiency and decision-making. Experience the future
              of AI-driven innovation, tailored to your industry needs, with
              security and compliance at its core.
            </p>
          </div>

          <div className="flex-1 p-6">
            <h1 className="text-lime-200 text-2xl font-serif font-semibold mx-4 mt-5 ">
              AI-Powered Aggregator Platform
            </h1>

            <p className="text-lime-200  mt-10">
              Harness the strength of artificial intelligence to streamline data
              aggregation, extract actionable insights, and drive informed
              decision-making across diverse sources. Seamlessly integrating
              advanced algorithms, it empowers businesses to optimize operations
              and stay ahead in today's dynamic landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="flex flex-row justify-center text-center">
          <h1 className="text-white font-serif font-bold mt-14 text-6xl ">
            What We Offer
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-8">
          <div className="p-2 m-2  ">
            <h1 className="text-white font-serif font-bold text-2xl min-h-20">
              1.
              <br />
              Generative and Applied AI
            </h1>
            <p className="text-gray-300 font-sans mt-10">
              We use large language models and your proprietary data to build
              data-centric intelligent applications for your customers.
            </p>
          </div>

          <div className=" p-2 m-2 ">
            <h1 className="text-white font-serif font-bold text-2xl h-20 ">
              2. <br />
              Enterprise Products
            </h1>
            <p className="text-gray-300 font-sans mt-10">
              We use our expertise in strategy, product design & development to
              build custom web, mobile, TV & IoT Applications.
            </p>
          </div>

          <div className=" p-2 m-2 ">
            <h1 className="text-white font-serif font-bold text-2xl h-20">
              3. <br />
              Data Analytics
            </h1>
            <p className="text-gray-300 font-sans mt-10">
              Using DataOps principles, we build data pipelines that are
              cost-effective, performant, and allow you to make strategic
              decisions.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 bg-[#19191A]">
          <div className="flex flex-row items-center max-w-6xl p-4  rounded-lg">
            <div className="mr-4">
              <img src={I1} alt="Expert" className="img-expert rounded-lg" />
            </div>
            <div>
              <h2 className="font-bold font-serif text-2xl mt-0 mb-8 text-white">
                Talk to Experts
              </h2>
              <p className="text-lg font-serif  text-white">
                Unlock the potential of your projects with our team of seasoned
                professionals. We bring a wealth of expertise in various domains
                to drive your success. Whether you’re navigating the cloud
                landscape, delving into artificial intelligence, or working on
                data analytics, our experts are here to guide you.
              </p>
              <button className=" font-bold border mt-8 border-pink-300 text-white rounded-lg px-4 py-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 transition duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center max-w-6xl p-4 bg-[#19191A] rounded-lg">
            <div className="mr-4">
              <h2 className="font-bold font-serif text-2xl mt-0 mb-8 text-white">
                Solve your outsourcing Challenges
              </h2>
              <p className="text-lg font-serif text-white">
                At RSquareSoft, we are committed to revolutionizing the
                outsourcing landscape in India, addressing challenges head-on,
                and paving the way for unparalleled success. Here’s how we plan
                to solve outsourcing challenges in the region:
              </p>
              <button className=" text-white  font-bold border mt-8 border-pink-300 rounded-lg px-4 py-2 hover:bg-slate-500 hover:text-white  hover:border-slate-500 transition duration-300">
                Read More
              </button>
            </div>
            <div className="ml-4">
              <img
                src={I3}
                alt="Expert"
                className="img-expert p-4 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center max-w-6xl p-4 bg-[#19191A] rounded-lg">
            <div className="mr-4">
              <img src={I2} alt="Expert" className="img-expert rounded-lg" />
            </div>
            <div>
              <h2 className="font-bold font-serif text-2xl mt-0 mb-8 text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-lg font-serif text-white">
                Embark on your next software project with confidence, knowing
                that RSquareSoft is here to transform your ideas into reality.
                Whether you’re envisioning a groundbreaking application, a
                scalable cloud solution, or a sophisticated AI-driven system, we
                have the expertise to make it happen.
              </p>
              <button className=" text-white  font-bold border mt-8 border-pink-300 rounded-lg px-4 py-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
