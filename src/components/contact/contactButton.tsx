import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const ContactButton = () => {
  return (
    <div>
    <button
    style={{display:'flex'}}
      className="group relative flex items-center justify-center w-64 h-64 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-green-400 transition-all duration-300 mx-auto"
    >
      <div className="text-center flex flex-col items-center mx-auto">
        <span className="text-xl font-medium text-white group-hover:text-black transition-colors duration-300">
          Contact
          <br />
          With Us.
        </span>
        <FiArrowUpRight className="w-6 h-6 mt-2 text-white group-hover:text-black transition-colors duration-300" />
      </div>
    </button>
    </div>
  );
};