"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealSectionProps {
  children: React.ReactNode;
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 100, // Start from below the viewport
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {children}
    </div>
  );
};

export default ScrollRevealSection;
