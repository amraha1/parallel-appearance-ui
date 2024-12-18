import React from 'react';
import { cn } from '../../utils/styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('container mx-auto px-4', className)}>
      {children}
    </div>
  );
};