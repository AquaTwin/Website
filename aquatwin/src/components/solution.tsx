import React from "react";
import { Cog, LineChart, ScatterChart } from "lucide-react";
import Container from "./container";
import SolutionCard from "./solution-card";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: <Cog size={40} />,
    title:
      "Application of New Technology in Transboundary River Basin Modelling",
    description:
      "Digital twins create detailed virtual models of river basins in real-time monitoring and simulation of water dynamics, utilizing continuous satellite data for comprehensive hydrological insights.",
  },
  {
    icon: <LineChart size={40} />,
    title: "Real-Time Monitoring and Analysis of transboundary river basins",
    description:
      "Real-time monitoring and analysis of transboundary river basins use advanced technology, including satellite data, to provide immediate insights into water dynamics.",
  },
  {
    icon: <ScatterChart size={40} />,
    title:
      "Predictive Modeling and Simulation of Flood Occurrences and Water Flow",
    description:
      "Provides early warnings, supporting informed decision-making, promoting sustainable management amidst climate change, population growth, and inter-state conflicts.",
  },
];

const Solution = () => {
  return (
    <Container className="bg-primary-1">
      <section className="flex-wrap md:text-lg" id="solution">
        <h2 className="text-4xl font-bold text-title text-center mb-5">
          The Power of <span className="text-blue-800">AQUA</span>
          <span className="text-blue-400">TWIN</span>
        </h2>
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
