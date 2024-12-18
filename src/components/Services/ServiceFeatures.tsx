import React from 'react';
import { StarIcon } from './StarIcon';

const features = [
  'Custom Software',
  'Web Application',
  'Mobile Application',
  'Enterprise Software',
  'Software Consulting',
  'Maintenance and Support',
];

export const ServiceFeatures = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3 text-gray-300">
          <StarIcon className="w-4 h-4 text-green-400" />
          {feature}
        </li>
      ))}
    </ul>
  );
};