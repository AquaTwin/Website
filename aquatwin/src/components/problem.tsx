import React from "react";
import Container from "./container";

const Problem = () => {
  return (
    <Container className="px-0 bg-gradient-to-b from-[#070f29] to-primary-1">
      <section
        className="flex flex-col justify-center items-center h-[90vh] md:h-[75vh]"
        id="problem-statement"
      >
        <div className="bg-[#F8F8F8] p-8 md:w-2/3 mx-2 shadow rounded-md">
          <h2 className="text-4xl font-bold text-title text-center mb-5 z-10">
            Problem Statement
          </h2>
          <p className="md:text-lg">
            Kenya is facing a considerable water crisis caused by the confluence
            of geographical and climatic challenges. Over 80% of the country is
            arid or semi-arid, and the water resources are, therefore, not
            evenly distributed. One-third of Kenya's water is drawn from
            transboundary rivers, which complicates management as yet and leads
            to conflict between countries that share water resources. A rapid
            population growth of over 54 million worsens matters, as existing
            resources are strained. Climate change disrupts weather patterns due
            to increasingly severe floods and droughts. Thus the aim is to
            develop a Digital Twin of the Kenyan Transboundary River to manage
            water efficiently, control floods, and ensure environmental
            protection using data from satellites.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Problem;
