"use client";
import React from "react";
import TeamCard from "./ui/team-card";
import TestImage from "../public/next.svg";
import Container from "./container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import TextReveal from "./textreveal";

const Team = () => {
  const teamMembers = [
    {
      image: "/members/william.jpg",
      name: "Dr. William Murithi",
      title: "Strategy Lead",
      // github: 'https://github.com/Karume-lab',
      linkedIn:
        "https://www.linkedin.com/in/william-murithi-ph-d-fhea-cmbe-8a169425/",
    },
    {
      image: "/members/nderu.jpg",
      name: "Dr. Lawrence Nderu",
      title: "Principal Investigator",
      // github: 'https://github.com/Karume-lab',
      linkedIn: "https://www.linkedin.com/in/dr-lawrence-nderu/",
    },
    {
      image: "/members/karume.png",
      name: "Daniel Karume",
      title: "Team lead",
      github: "https://github.com/Karume-lab",
      linkedIn: "https://www.linkedin.com/in/daniel-karume/",
    },
    {
      image: "/members/dancoon.jpeg",
      name: "Ian Dancun",
      title: "Backend Developer",
      github: "https://github.com/dancoon",
      linkedIn: "https://linkedin.comin/dancoon",
    },
    {
      image: "/members/javan.jpeg",
      name: "Javan Otieno",
      title: "Backend Developer",
      github: "https://github.com/Javan-Odhiambo",
      linkedIn: "https://linkedin.com/in/javan-otieno",
    },
    {
      image: "/members/peaches.jpg",
      name: "Peaches Njenga",
      title: "Frontend Developer",
      github: "https://github.com/Peachy-Njenga",
      linkedIn: "https://linkedin.com/in/peaches-njenga",
    },
    {
      image: "/members/sandrah.jpeg",
      name: "Sandrah Lewa",
      title: "Frontend Developer",
      github: "https://github.com/comfortsandrah",
      linkedIn: "https://www.linkedin.com/in/sandrah-comfort/",
    },
  ];

  return (
    <Container className="bg-primary-1">
      <section
        id="team"
        className="space-y-8 w-full min-h-[80vh] place-items-center grid"
      >
        <div>
          <div className="space-y-2 text-center mb-20">
            <TextReveal text="Meet The AQUATEAM" />
            <p className="md:text-lg">
              Our team is made up of passionate individuals who are dedicated to
              making a difference in the world.
            </p>
          </div>
          <div className=" h-fit hidden md:block">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                  speed: 1,
                  stopOnFocusin: true,
                  startDelay: 0,
                }),
              ]}
            >
              <CarouselContent>
                {teamMembers.map((team, index) => (
                  <CarouselItem key={index} className="pl-3 md:basis-1/3 lg:basis-1/4 w-40">
                    <TeamCard key={index} {...team} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>

          <div className="flex flex-wrap justify-start gap-5 md:hidden">
            {teamMembers.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Team;
