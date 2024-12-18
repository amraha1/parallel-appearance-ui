import React from 'react';
import { Container } from '../Layout/Container';
import { WorkStep } from './WorkStep';

const workSteps = [
  {
    icon: '/assets/img/inner-pages/work-icon-01.svg',
    title: 'Requirements Gathering',
    description: 'Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.'
  },
  {
    icon: '/assets/img/inner-pages/work-icon-02.svg',
    title: 'Analysis and Planning',
    description: 'Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.'
  },
  {
    icon: '/assets/img/inner-pages/work-icon-03.svg',
    title: 'Design & Development',
    description: 'Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.'
  },
  {
    icon: '/assets/img/inner-pages/work-icon-04.svg',
    title: 'Testing Device & Release',
    description: 'Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.'
  },
  {
    icon: '/assets/img/inner-pages/work-icon-05.svg',
    title: 'Maintenance and Support',
    description: 'Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.'
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-20 mx-20">
      <Container>
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          How we work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {workSteps.map((step, index) => (
            <WorkStep key={index} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};