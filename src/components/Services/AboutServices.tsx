import React from 'react';
import { Container } from '../Layout/Container';
import { ServiceFeatures } from './ServiceFeatures';

export const AboutServices = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 items-center mx-20">
        <div className="animate-fadeInLeft">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              Software <br /> Development
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh 
              neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque 
              purus at eros interdum, in dignissim nulla vestibulum.
            </p>
          </div>
          <ServiceFeatures />
        </div>
        <div className="animate-fadeInRight">
          <div className="rounded-lg overflow-hidden">
            <img
              src="./lovable-uploads/service.png"
              alt="Service"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};