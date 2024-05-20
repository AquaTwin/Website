import React from "react";
import Header from "./header";
import { Button } from "./ui/button";
import Link from "next/link";
import CustomParticles from "./particles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[90vh] sm:h-screen text-white bg-black flex flex-col relative"
    >
      <CustomParticles />
      <div className="z-10 h-[100vh] flex flex-col">
        <Header />
        <div className="flex grow flex-col  p-1 gap-3 md:gap-6 justify-center items-center text-center max-w-[1400px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Bridging the gap in Transboundary River Basin Management
          </h1>
          <div className="flex justify-center w-full gap-10">
            <Button>Learn more</Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
