import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-800">
          <button
            className="w-full flex justify-between items-center py-4 text-left"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-gray-300 hover:text-green-400 transition-colors">
              {item.question}
            </span>
            {activeIndex === index ? (
              <FiChevronUp className="text-green-400" />
            ) : (
              <FiChevronDown className="text-gray-400" />
            )}
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-gray-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};