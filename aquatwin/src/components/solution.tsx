import React from "react";
import { Cog, LineChart, ScatterChart } from "lucide-react";

const solutions = [
  {
    icon: <Cog size={40} />,
    title: "Sophosticated Technology for Industry Applications",
    description:
      "Our digital twin model offers a comprehensive set of technical features and capabilities.",
  },
  {
    icon: <LineChart size={40} />,
    title: "Real-Time Monitoring and Analysis",
    description:
      "Stay informed with real-time data and analysis provided by our digital twin model.",
  },
  {
    icon: <ScatterChart size={40} />,
    title: " Predictive Modeling and Simulation",
    description:
      ":Leverage predictive modeling and simulation to make informed decisions and optimize operations.",
  },
];

import SolutionCard from "./solution-card";
import { Button } from "./ui/button";

const Solution = () => {
  return (
    <div className="text-[22px] text-wrap flex-wrap px-5 py-16">
      <p className="text-1xl text-text font-bold text-sm text-center mb-3">
        Revolutionize
      </p>
      <h2 className="text-3xl font-bold text-title text-center mb-5">
        Unleash the Power of Our Digital <br />
        Twin Model
      </h2>
      <p className="text-sm text-center text-text">
        Discover the advanced capabilities and industry applications of our
        digital twin model.
      </p>

      <div className="space-y-12 mt-12">
        {solutions.map(({ icon, title, description }, index) => (
          <SolutionCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="flex space-x-6 justify-center mt-6">
       <Button variant={"outline"}>Learn More</Button>
       <Button variant={"link"}>Sign Up</Button> 
      </div>

    </div>
  );
};

export default Solution;
