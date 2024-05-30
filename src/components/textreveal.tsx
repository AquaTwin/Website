"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = text.split("");
      textRef.current.textContent = "";

      for (let i = 0; i < splitText.length; i++) {
        const char = splitText[i];
        const span = document.createElement("span");
        // span.className = "opacity-0 inline-block translate-y-full";
        span.textContent = char === " " ? "\u00A0" : char; // Use non-breaking space for regular space
        textRef.current!.appendChild(span);
        if (i < splitText.length - 9) {
          span.className = "opacity-0 inline-block translate-y-full";
        } else if (i > splitText.length - 5) {
          span.className =
            "opacity-0 inline-block translate-y-full text-blue-400";
        } else {
          span.className =
            "opacity-0 inline-block translate-y-full text-blue-800";
        }
      }

      gsap.to(textRef.current.children, {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
    }
  }, [text]);

  return (
    <h2
      ref={textRef}
      style={{ overflow: "hidden" }}
      className={` text-2xl md:text-4xl font-bold text-title text-center mb-3 md:mb-5 ${className}`}
    >
      {text}
    </h2>
  );
};

export default TextReveal;
