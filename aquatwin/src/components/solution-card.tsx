import React from "react";

interface SolutionCardProps {
  icon: React.ReactNode
  title: string;
  description: string;
}
const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-1">
      <span className="mb-6">{icon}</span>
      <h4 className="text-title text-3xl font-bold mb-5">{title}</h4>
      <p className="text-sm text-text">{description}</p>
    </div>
  );
};

export default SolutionCard;
