import React from 'react';
import { cn } from '../../utils/styles';

interface PricingToggleProps {
  value: 'monthly' | 'yearly';
  onChange: (value: 'monthly' | 'yearly') => void;
  className?: string;
}

export const PricingToggle = ({ value, onChange, className }: PricingToggleProps) => {
  return (
    <div className={cn('flex justify-center gap-4', className)}>
      <button
        onClick={() => onChange('monthly')}
        className={cn(
          'px-4 py-2 rounded-lg transition-colors',
          value === 'monthly' ? 'bg-gray-800 text-white' : 'text-gray-400'
        )}
      >
        Billed Monthly
      </button>
      <button
        onClick={() => onChange('yearly')}
        className={cn(
          'px-4 py-2 rounded-lg transition-colors',
          value === 'yearly' ? 'bg-gray-800 text-white' : 'text-gray-400'
        )}
      >
        Billed Yearly
      </button>
    </div>
  );
};