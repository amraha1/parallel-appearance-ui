import React from 'react';

interface WorkStepProps {
  icon: string;
  title: string;
  description: string;
}

export const WorkStep = ({ icon, title, description }: WorkStepProps) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-6">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};