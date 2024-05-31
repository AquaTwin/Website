import React from "react";
import { Cog, LineChart, ScatterChart } from "lucide-react";
import Container from "./container";
import SolutionCard from "./solution-card";
import { Button } from "./ui/button";
import TextReveal from "./textreveal";

const solutions = [
  {
    icon: <Cog size={40} />,
    title:
      "Application of New Technology in Transboundary River Basin Modelling",
    description:
      "Digital twin technology to model Kenya's transboundary river basins, offering detailed insights into water dynamics for better resource management",
  },
  {
    icon: <LineChart size={40} />,
    title: "Real-Time Monitoring and Analysis of transboundary river basins",
    description:
      "Integration of satellite data with digital twins to monitor water flow, quality, and usage in real-time, enabling better observation and management.",
  },
  {
    icon: <ScatterChart size={40} />,
    title:
      "Predictive Modeling and Simulation of Flood Occurrences and Water Flow",
    description:
      "Using machine learning to accurately predict floods and water flow patterns, aiding in proactive flood management and water distribution.",
  },
];

const Solution = () => {
  return (
    <Container className="bg-primary-1">
      <section className="flex-wrap md:text-lg min-h-[60vh]" id="solution">
        <TextReveal text="The Power of AQUATWIN" />

        <p className="text-center text-text">
          Discover the advanced capabilities of AquaTwin.
        </p>

        <div className="space-y-12 mt-12 md:flex md:space-y-0 md:gap-8 flex flex-wrap justify-between">
          {solutions.map(({ icon, title, description }, index) => (
            <SolutionCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
        {/* <div className="flex space-x-6 justify-center mt-6">
        <Button variant={"outline"}>Learn More</Button>
      </div> */}
      </section>
    </Container>
  );
};

export default Solution;
