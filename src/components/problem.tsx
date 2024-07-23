import React from "react";
import Container from "./container";
import ScrollRevealSection from "./scrollreveal";

const Problem = () => {
  return (
    <ScrollRevealSection>
      <Container className="">
        <section
          className="flex flex-col justify-center items-center h-[90vh] md:h-[75vh]"
          id="problem-statement"
        >
          <div className="bg-[#F8F8F8] p-8 md:w-2/3 mx-2 shadow rounded-md md:transition duration-300 ease-in-out transform">
            <h2 className="text-4xl font-bold text-title text-center mb-5 z-10">
              Problem Statement
            </h2>
            <p className="md:text-lg">
              Residents are terrorized by floods from heavy rains. These floods wreak havoc, displacing people, destroying homes and farms, and polluting water sources.
              This constant threat creates anxiety and disrupts daily life, damaging schools and hindering agriculture.
              Lack of a flood warning system leaves everyone unprepared, worsening the impact on lives, livelihoods, and the entire community.
            </p>
          </div>
        </section>
      </Container>
      ,
    </ScrollRevealSection>
  );
};

export default Problem;
