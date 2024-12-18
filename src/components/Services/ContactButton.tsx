import React from 'react';
import { ArrowUpRight } from 'lucide-react';

 function ContactButton() {
  return (
    <div className="relative inline-block group">
      <a 
        href="/contact" 
        className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[259px] md:h-[259px] 
          rounded-full border border-white/20 bg-[#1b1f23] transition-all duration-500
          hover:border-green-500 hover:bg-green-600 group-hover:text-black
          text-white text-xl md:text-2xl font-medium"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="transition-colors duration-500 group-hover:text-black">
            Contact With Us.
          </span>
          <ArrowUpRight 
            className="w-6 h-6 transition-all duration-500 group-hover:rotate-45 group-hover:text-black" 
          />
        </div>
      </a>
    </div>
  );
}

export default ContactButton;