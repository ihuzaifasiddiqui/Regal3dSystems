import React from 'react';
import HeroSection from '../Components/hero-section'
import WhatWeOffer from '../Components/what-we-offer'
import Testimonials from '../Components/testimonials'
import Footer from '../Components/footer'
import FaqSection from '../Components/faqSection';

const Home = () => {
  return (
    <>
    <HeroSection />
      <WhatWeOffer />
      <Testimonials/>
      <FaqSection />
      <Footer/>
    </>
  );
};

export default Home;