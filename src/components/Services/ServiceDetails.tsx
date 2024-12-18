import React from 'react';
import { AboutServices } from './AboutServices';
import { HowWeWork } from './HowWeWork';
import { ServiceDescription } from './ServiceDescription';
import { ServiceFAQ } from './ServiceFAQ';
import { WorkWithUs } from './WorkWithUs';

export const ServiceDetails = () => {
  return (
    <div className="py-20 bg-black">
      <AboutServices />
      <HowWeWork />
      <ServiceDescription />
      <ServiceFAQ />
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <WorkWithUs />
    </div>
    </div>
  );
};