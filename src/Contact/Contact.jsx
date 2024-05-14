import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="bg-black py-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1  gap-8 mb-4 md:grid-cols-2">
            <div className="text-white font-serif text-3xl p-4 m-4">
              Transforming Challenges into Opportunities <br />{" "}
              <span className="text-violet-700 font-bold">
                Join Our Journey
              </span>
            </div>
            <form onSubmit={handleSubmit} className=" m-4 p-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md  focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-  ">
          <span className="text-gray-400  mt-3 mb-6">OR</span>
          <button className=" bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md  focus:outline-none">
            <a href="https://calendly.com/rsquaresoft">
              Schedule an Appointment
            </a>
          </button>
        </div>
      </div>
      <div className="bg-[#19191a]">
        <div className=" grid grid-flow-col grid-cols-2  gap-4 max-w-3xl mx-auto py-8">
          <div className="text-white ">
            <p className="font-bold font-serif text-2xl">India</p>
            <p className="font-serif">
              Office #430, 4th Floor, Solitaire Business Hub,
            </p>
            <p className=" font-serif">Wakad, Pune, India 411057</p>
            <p className=" font-serif">
              For Business Inquiry:{" "}
              <a href="mailto:info@rsquaresoft.com" className="underline">
                info@rsquaresoft.com
              </a>
            </p>
          </div>
          <div className=" bg-white">Map</div>
        </div>
      </div>
      <div className="bg-black">
        <div className=" flex flex-col items-start mx-auto max-w-3xl ">
          <h3 className="text-white font-serif text-2xl font-bold ">Carrier</h3>
          <p className="text-white font-serif mb-4 ">
            We Provide career opportunities for a wide range of technologies.
            You can reach out to us at{" "}
            <a href="mailto:career@rsquaresoft.com" className="underline">
              career@rsquaresoft.com
            </a>{" "}
            to find out about the open positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
