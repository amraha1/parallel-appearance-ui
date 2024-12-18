import React from 'react';
import { Container } from '../Layout/Container';
import { Accordion } from './Accordion';

const faqItems = [
  {
    question: 'Aliquam ligula nunc, vehicula at est quis.',
    answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex.'
  },
  {
    question: 'In hac habitasse platea dictumst Cras leo.',
    answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex.'
  },
  {
    question: 'ornare iaculis tellus. Phasellus venenatis.',
    answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex.'
  },
  {
    question: 'Phasellus a placerat eros In hac habitasse.',
    answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex.'
  }
];

export const ServiceFAQ = () => {
  return (
    <section className="py-20 mx-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
             src="/lovable-uploads/service4.jpeg"
             alt="FAQ"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              We Are Working With Creative User.
            </h2>
            <Accordion items={faqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
};