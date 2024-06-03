"use client";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BadgeCheck } from "lucide-react";

const AboutPage = () => {
  const challenges = [
    {
      title: "Water resource management",
      // "description": "Ensuring the sustainable use and distribution of water resources to meet current and future needs."
    },
    {
      title: "Flood control",
      // "description": "Implementing measures to prevent or reduce the impact of flooding on communities and infrastructure."
    },
    {
      title: "Environmental protection",
      // "description": "Preserving and restoring natural ecosystems to maintain biodiversity and ecological health."
    },
    {
      title: "Transboundary cooperation",
      // "description": "Collaborating across political borders to manage shared water resources and address common environmental challenges."
    },
  ];

  const solutions = [
    {
      title: "Advanced water management tool",
      description:
        "Developing an application that offers a decision support system for water resources management.",
    },
    {
      title: "International cooperation",
      description:
        "Fostering collaboration between Kenya and neighbouring nations to address water challenges.",
    },
    {
      title: "Environmental protection",
      description:
        "Implementing strategies to safeguard natural ecosystems and maintain environmental sustainability.",
    },
    {
      title: "Flood prediction",
      description:
        "Monitoring water flow, water usage, and water quality to predict floods and mitigate their impact.",
    },
  ];

  const riverBasins = [
    {
      name: "Omo River Basin",
      image: "/kenya-ethiopia.jpg",
    },
    {
      name: "Jubba Shabelle River Basin",
      image: "/kenya-ethiopia-somalia.jpg",
    },
    {
      name: "Mara River Basin",
      image: "/kenya-tanzania.jpg",
    },
  ];

  return (
    <main className="bg-primary-1">
      <Header />
      <h1 className="text-center text-title text-4xl font-semibold mt-5">
        About <span className="text-blue-800">AQUA</span>
        <span className="text-blue-400">TWIN</span>
      </h1>
      <section>
        <Container>
          <div className="">
            <div className="mb-4">
              <h2 className="text-title text-3xl font-semibold">
                What is a digital twin?
              </h2>
              <p>
                A digital twin model is a computer-made copy of a real-world
                object, system, or process. This virtual version uses data from
                the real thing to help us understand how it works, find and fix
                problems, and make better decisions. By simulating the real
                object, we can test changes and improvements without affecting
                the real world.
              </p>
            </div>
            <div className="  ">
              <div className="grid gap-y-4">
                {/* <Image
                  src="/digital-twin.png"
                  alt="digital twin"
                  width="400"
                  height="400"
                  className="w-full"
                ></Image> */}
                <Image
                  src="/small_screen.png"
                  alt="digital twin"
                  width={400}
                  height={400}
                  className=" w-[400px] h-auto md:hidden"
                ></Image>
                <Image
                  src="/Card1.png"
                  alt="step 1"
                  width={300}
                  height={100}
                  className=" mx-auto h-auto md:hidden"
                ></Image>
                <Image
                  src="/Card2.png"
                  alt="step 2"
                  width={300}
                  height={100}
                  className=" mx-auto h-auto md:hidden"
                ></Image>
                <Image
                  src="/Card3.png"
                  alt="step 3"
                  width={300}
                  height={100}
                  className=" mx-auto h-auto md:hidden"
                ></Image>
                <Image
                  src="/Card4.png"
                  alt="step 4"
                  width={300}
                  height={100}
                  className=" mx-auto h-auto md:hidden"
                ></Image>
                <Image
                  src="/Card5.png"
                  alt="step 5"
                  width={300}
                  height={100}
                  className=" mx-auto h-auto md:hidden"
                ></Image>
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/Large_screen.png"
                  alt="digital twin"
                  width={400}
                  height={400}
                  className="w-full hidden md:block mt-4"
                ></Image>
              </div>
              {/* <div className='md:w-2/3'>
                                <p>
                                    Physical data is collected by sensors and satellites which orbit the Earth. This data is depicted by the word “Data” in the upper left corner of the diagram.
                                </p>
                                <p>
                                    This physical data is then transmitted to the digital twin, which is a computer program that uses the collected data to create a virtual replica of the physical system.
                                </p>
                                <p>
                                    The digital twin analyses the data and generates insights, which are shown on the right side of the diagram. These insights can inform decision-making and improvements to the physical system.

                                    Based on the insights gleaned from the data, decisions are made and interventions are implemented in the real world. These interventions can be adjustments to the physical system or changes in how it is operated.

                                    The effects of these decisions are then monitored and new data is collected, which begins the cycle anew.
                                </p>
                            </div> */}
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="relative gap-7 mx-auto h-fit">
            <div className="absolute top-0 left-0 flex flex-col justify-center z-10 bg-[#373737c4] text-white w-full h-full">
              <h2 className="text-3xl text-center font-semibold mb-6">
                Challenges
              </h2>
              <ul className=" max-w-[650px] mb-3 mx-auto list-disc">
                {challenges.map((challenge, index) => (
                  <li className="text-left text-lg" key={index}>
                    {challenge.title}
                  </li>
                  // <p>{challenge.description}</p>
                ))}
              </ul>
            </div>
            <div>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent className="">
                  <CarouselItem className="">
                    <Image
                      className="object-none object-center h-full w-auto  mx-auto"
                      alt="river usage"
                      width={400}
                      height={400}
                      src="/flooded-river.jpeg"
                    ></Image>
                  </CarouselItem>

                  <CarouselItem className="">
                    <Image
                      className="object-cover h-full w-auto"
                      alt="river usage "
                      width={400}
                      height={400}
                      src="/destroyed-banks1.jpeg"
                    ></Image>
                  </CarouselItem>

                  <CarouselItem className="">
                    <Image
                      className="h-full w-auto object-cover"
                      alt="river usage"
                      width={400}
                      height={400}
                      src="/flooded-house.jpeg"
                    ></Image>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center text-title text-3xl font-semibold mb-6">
            Our solution
          </h2>
          {solutions.map((solution, index) => (
            <div className="flex gap-2 max-w-[750px] mx-auto" key={index}>
              <BadgeCheck stroke="green" className="w-8 h-8" />
              <div className="mb-4">
                <h3 className="font-semibold">{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="text-center text-title text-3xl font-semibold mb-6">
            River basins of interest
          </h2>
          <div className="flex flex-wrap justify-between gap-y-6">
            {riverBasins.map((riverBasin, index) => (
              <div key={index} className="md:w-[30%] max-w-[500px] mx-auto">
                <Image
                  src={riverBasin.image}
                  alt={riverBasin.name}
                  width="300"
                  height="200"
                  className="w-full"
                ></Image>
                <p className="text-center">{riverBasin.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
