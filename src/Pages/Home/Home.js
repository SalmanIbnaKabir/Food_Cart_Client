import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import Review from './Review/Review';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <About></About>
      <Review></Review>
    </div>
  );
};

export default Home;