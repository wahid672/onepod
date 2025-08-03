import React from 'react';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Pricing />
      <Features />
      <CTA />
    </main>
  );
};

export default Home;