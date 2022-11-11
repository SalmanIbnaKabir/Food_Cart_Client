import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Carousel from './Carousel/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;