import React from 'react';
import './stroke.css';
interface StrokeTextProps {
  children: React.ReactNode;
  className?: string;
}

export function StrokeText({ children, className = '' }: StrokeTextProps) {
  return (
    <h2
    style={{  
		// WebkitTextFillColor: 'transparent',  
		WebkitTextStroke: '1px rgba(239, 236, 236, 0.756);',  
	}}  
    className={`font-bold uppercase leading-none text-transparent 
    
      font-sans ${className}`}>
      {children}
    </h2>
  );
}

// -webkit-text-fill-color: transparent;
// -webkit-text-stroke: 1px rgba(255, 255, 255, .08);

//   [-webkit-text-stroke:1px_rgba(255,255,255,.08)] 