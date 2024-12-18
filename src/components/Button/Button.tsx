import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2',
        variant === 'primary' && 'bg-green-400 text-black hover:bg-green-500',
        variant === 'outline' && 'text-white border border-gray-700 hover:border-green-400 hover:text-green-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};