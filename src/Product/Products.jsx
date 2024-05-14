import { useState } from "react";

const Section = ({ feature, desc, isVisible, setIsVisible }) => {
  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className="relative">
      <h2
        className="text-white text-xl font-semibold mb-4  cursor-pointer"
        onClick={handleClick}
      >
        {feature}
      </h2>
      {isVisible && <p className="text-gray-300 font-bold">{desc}</p>}
    </div>
  );
};

const Products = () => {
  const [sectionConfig, setSectionConfig] = useState("");

  return (
    <div>
      <div className="bg-black">
        <div className="max-w-3xl flex flex-col justify-center mx-auto items-center text-center">
          <h1 className="text-white font-serif text-5xl font-bold mt-4 mb-2 ">
            CogniNex Core – Enterprise AI
          </h1>
          <p className="text-gray-300">
            Redefining Possibilities in Enterprise AI
          </p>
          <p className="text-white mt-8 mb-6">
            In the ever-evolving landscape of business, staying ahead requires
            more than just insights—it demands intelligent decision-making
            powered by cutting-edge technology. Meet CogniNex Core, our flagship
            Enterprise AI solution crafted to elevate your organization’s
            capabilities to unprecedented heights. It will empower your business
            with cutting-edge Enterprise AI Solutions designed to revolutionize
            the way you operate and make informed decisions. Our
            state-of-the-art platform seamlessly integrates artificial
            intelligence into your enterprise processes, unlocking unprecedented
            efficiencies and driving innovation across all facets of your
            organization.
          </p>
        </div>
      </div>
      <div class="bg-[#19191a] py-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-white font-serif text-3xl font-bold text-center mb-8">
            Features
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <Section
              feature={"Intelligent Automation"}
              desc={
                "Transform routine tasks into strategic opportunities with CogniNex Core’s intelligent automation capabilities. Streamline workflows, optimize resource allocation, and enhance overall operational efficiency"
              }
              isVisible={sectionConfig === "F1"}
              setIsVisible={() => {
                if (sectionConfig === "F1") setSectionConfig("");
                else setSectionConfig("F1");
              }}
            />

            <Section
              feature={"Predictive Analytics"}
              desc={
                "Leverage the power of data to make informed decisions. CogniNex Core’s advanced predictive analytics engine sifts through vast datasets, providing actionable insights that empower you to anticipate trends, mitigate risks, and seize opportunities."
              }
              isVisible={sectionConfig === "F2"}
              setIsVisible={() => {
                if (sectionConfig === "F2") setSectionConfig("");
                else setSectionConfig("F2");
              }}
            />
            <Section
              feature={"Natural Language Processing (NLP)"}
              desc={
                "Communicate with your data effortlessly. CogniNex Core’s NLP capabilities enable you to interact with the system using natural language, facilitating seamless communication between your team and the AI-powered platform."
              }
              isVisible={sectionConfig === "F3"}
              setIsVisible={() => {
                if (sectionConfig === "F3") setSectionConfig("");
                else setSectionConfig("F3");
              }}
            />
            <Section
              feature={"Adaptive Machine Learning"}
              desc={
                "Stay agile in a dynamic business environment with CogniNex Core’s adaptive machine learning algorithms. The system continually learns from new data, evolving its understanding and improving its predictive accuracy over time."
              }
              isVisible={sectionConfig === "F4"}
              setIsVisible={() => {
                if (sectionConfig === "F4") setSectionConfig("");
                else setSectionConfig("F4");
              }}
            />
            <Section
              feature={"Scalable Infrastructure"}
              desc={
                "Whether you operate on a local scale or have a global footprint, CogniNex Core is designed to scale with your business. Our robust infrastructure ensures the seamless integration of AI into your existing systems, supporting growth without compromising performance"
              }
              isVisible={sectionConfig === "F5"}
              setIsVisible={() => {
                if (sectionConfig === "F5") setSectionConfig("");
                else setSectionConfig("F5");
              }}
            />
            <Section
              feature={"Real-time Decision Support"}
              desc={
                "Make critical decisions with confidence. CogniNex Core provides real-time decision support, offering actionable insights at the moment they are needed most. Enhance your strategic agility and responsiveness to market changes."
              }
              isVisible={sectionConfig === "F6"}
              setIsVisible={() => {
                if (sectionConfig === "F6") setSectionConfig("");
                else setSectionConfig("F6");
              }}
            />
            <Section
              feature={"Security and Compliance"}
              desc={
                "Trust is paramount. CogniNex Core adheres to the highest standards of security and compliance, ensuring that your sensitive data remains protected. Rest easy knowing that your AI initiatives align with industry regulations and best practices."
              }
              isVisible={sectionConfig === "F7"}
              setIsVisible={() => {
                if (sectionConfig === "F7") setSectionConfig("");
                else setSectionConfig("F7");
              }}
            />
            <Section
              feature={"Customizable Solutions"}
              desc={
                "Every business is unique. CogniNex Core recognizes this, offering customizable AI solutions tailored to your specific industry, goals, and challenges. From finance to healthcare, manufacturing to retail, our Enterprise AI adapts to your needs."
              }
              isVisible={sectionConfig === "F8"}
              setIsVisible={() => {
                if (sectionConfig === "F8") setSectionConfig("");
                else setSectionConfig("F8");
              }} 
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-8 text-white">
        <div className=" max-w-5xl mx-auto">
          <h1 className="flex justify-center text-3xl font-semibold mb-6">
            Benefits
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Increased Efficiency
              </h2>
              <p className="text-sm text-gray-300">
                Streamline operations, automate repetitive tasks, and boost
                overall productivity.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-10 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Data-Driven Decision-Making
              </h2>
              <p className="text-sm text-gray-300">
                Make strategic decisions based on real-time, data-driven
                insights.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Competitive Edge</h2>
              <p className="text-sm text-gray-300">
                Stay ahead of the competition with predictive analytics and
                adaptive machine learning.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Enhanced Customer Experience
              </h2>
              <p className="text-sm text-gray-300">
                Anticipate customer needs and deliver personalized experiences
                that drive satisfaction and loyalty.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Agility and Scalability
              </h2>
              <p className="text-sm text-gray-300">
                Adapt to changing business landscapes and scale operations
                seamlessly.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-10 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Innovative AI Solutions
              </h2>
              <p className="text-sm text-gray-300">
                Experience the transformative power of AI that understands,
                adapts, and empowers your organization to thrive in the digital
                era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
