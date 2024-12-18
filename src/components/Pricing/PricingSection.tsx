import React from 'react';
import { Container } from '../Layout/Container';
import { PricingHeader } from './PricingHeader';
import { PricingToggle } from './PricingToggle';
import { PricingCards } from './PricingCards';
import { useState } from 'react';

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-24  font-mono bg-black w-max m-auto">
      <Container>
        <PricingHeader />
        {/* <PricingToggle
          value={billingCycle}
          onChange={setBillingCycle}
          className="mb-12"
        /> */}
        <PricingCards billingCycle={billingCycle} />
      </Container>
    </section>
  );
};