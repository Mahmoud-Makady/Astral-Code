import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Tools from '../components/Tools';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services featured />
      <About compact />
      <Portfolio featured />
      <Tools />
      <Team compact />
      <Contact compact />
    </>
  );
};

export default Home;