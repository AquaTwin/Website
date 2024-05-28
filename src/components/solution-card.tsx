import React from "react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="max-w-[380px]">
      <div className="flex flex-col items-center relative bg-primary-1 z-10 ">
        <div className="w-1/2 h-1/2 absolute bg-blue-800 -top-[2px] -left-[2px] "></div>
        <div className="w-1/2 h-1/2 absolute -bottom-[2px] -right-[2px] bg-blue-400 "></div>
        <span className="px-1 pb-6 z-10 bg-primary-1 w-full flex justify-center">{icon}</span>
        <h4 className="px-1 text-title text-2xl font-bold pb-5 z-10 bg-primary-1">{title}</h4>
        <p className="px-1 z-10 bg-primary-1">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
