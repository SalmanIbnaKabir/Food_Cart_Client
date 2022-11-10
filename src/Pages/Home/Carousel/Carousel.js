import React from 'react';
import img1 from '../.././../assets/Carousel/home-img-1.png';
import img2 from '../.././../assets/Carousel/home-img-2.png';
import img3 from '../.././../assets/Carousel/home-img-3.png';

const Carousel = () => {
  return (
    <div className="carousel w-full py-8">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt='' src={img1} className="max-w-sm" />
            <div className='px-8'>
              <p className='text-xl text-green-500'>Our Special Dish</p>
              <h1 className="text-5xl font-bold"> SPICY NOODLES</h1>
              <p className="py-6"> This spicy Noodles so dele delices</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle hover:glass">❮</a>
          <a href="#slide2" className="btn btn-circle hover:glass">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt='' src={img2} className="max-w-sm" />
            <div className='px-8'>
              <p className='text-xl text-green-500'>Our Special Dish</p>
              <h1 className="text-5xl font-bold">FRIED CHICKEN</h1>
              <p className="py-6">this fried chicken so crispy and chrunci and delices </p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle hover:glass">❮</a>
          <a href="#slide3" className="btn btn-circle hover:glass">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt='' src={img3} className="max-w-sm" />
            <div className='px-8'>
              <p className='text-xl text-green-500'>Our Special Dish</p>
              <h1 className="text-5xl font-bold">HOT PIZZA</h1>
              <p className="py-6">Home made Pizza , it's chezzy and so delices</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle hover:glass">❮</a>
          <a href="#slide1" className="btn btn-circle hover:glass">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;