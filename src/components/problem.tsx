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
              Kenya faces a severe water crisis. Over 80% of the land is arid or
              semi-arid, leading to uneven water distribution. One-third of
              Kenya&rsquo;s water comes from shared transboundary rivers and the
              rapidly growing population strains these resources, which leads to
              conflict between countries sharing these resources. Climate change
              disrupts weather patterns with increasingly severe floods and
              droughts. To address these challenges, we need a data-driven
              approach to managing Kenya&rsquo;s water resources.
            </p>
          </div>
        </section>
      </Container>
      ,
    </ScrollRevealSection>
  );
};

export default Problem;
