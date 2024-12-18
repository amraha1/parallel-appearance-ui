import React from 'react';
import { cn } from '../../utils/styles';
import { FiCheck } from 'react-icons/fi';
import { Button } from '../Button/Button';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({ name, price, features, isPopular }: PricingCardProps) => {
  return (
    <div
      className={cn(
        ' p-8',
       // 'font-mono',
        isPopular ? 'bg-green-500' : 'bg-gray-900'
      )}
      style={{fontFamily:'Saira, sans-serif'}}
    >
      <div className="relative">
       
        <h3 className={cn(
          'text-xl font-semibold mb-4',
          isPopular ? 'text-black' : 'text-green-400'
        )}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-2xl">$</span>
          <span className="text-5xl font-bold">{price}</span>
          <span className={cn( !isPopular ? "text-gray-400" : "text-white")}>/Month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FiCheck className={cn(
                'w-5 h-5',
                isPopular ? 'text-black' : 'text-green-400'
              )} />
              <span className={isPopular ? 'text-black' : 'text-gray-400'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant={isPopular ? 'primary' : 'outline'}
          className="w-full"
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};