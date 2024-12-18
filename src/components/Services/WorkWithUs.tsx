import React from 'react';
import { StrokeText } from './StrokeText';
import  ContactButton  from './ContactButton';

export function WorkWithUs() {
  return (
    <div className="text-center">
      <StrokeText className="text-[90px] md:text-[100px] lg:text-[130px]">
        Work With Us
      </StrokeText>
      
      <h2 className="text-[90px] md:text-[170px] lg:text-[240px] font-bold uppercase leading-none 
        text-white/8 font-sans mb-[-8%]" style={{opacity:'0.09'}}>
        Let's Talk
      </h2>
      
      <ContactButton />
    </div>
  );
}