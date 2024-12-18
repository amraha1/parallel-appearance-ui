import React from 'react';
import { Container } from '../Layout/Container';

export const ServiceDescription = () => {
  return (
    <section className="py-20 mx-20">
      <Container>
        <div className="mb-12">
          <img
            src="/lovable-uploads/service2.jpeg"
            alt="Service Description"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((col) => (
            <p key={col} className="text-gray-400 leading-relaxed">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh 
              neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque 
              purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus 
              pellentesque quis magna eu vestibulum.
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
};