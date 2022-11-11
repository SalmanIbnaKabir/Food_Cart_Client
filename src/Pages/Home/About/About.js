import React from 'react';
import img4 from '../../../assets/about/about-img.png';
import { TbTruckDelivery, TbCurrencyDollar } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className='bg-slate-200 py-5 '>
      <h1 className='text-center text-xl  text-green-500'>About Us</h1>
      <h3 className='text-center text-3xl text-primary font-bold mt-3 '>WHY CHOOSE US ?</h3>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img alt='' src={img4} className="w-1/2" />
          <div>
            <h1 className="text-5xl font-bold">Best Food In The Country</h1>
            <p className="py-6 ">Bangladesh is famous for its delicious food and dessert , the specialty of Bangladeshi food is they are spicy. Rice is the main Bangladesh food Rice, fish curry and lentil is the most common traditional Bangladesh food for general people . Bangladesh is also famous for its desserts. You will find dozens of Sweets , rice cakes, rice pudding, and many other desserts in Bangladesh, mostly made from rice and cow milk it is a paradise for food lovers </p>
            <p className='mb-5'>
              <button className="btn btn-active btn-ghost mr-4"><TbTruckDelivery className='text-green-500 text-2xl mr-2' /> Free Delivery</button>
              <button className="btn btn-active btn-ghost mr-4"> <TbCurrencyDollar className='text-green-500 text-2xl mr-2' /> Easy Payments</button>
              <button className="btn btn-active btn-ghost">
                <RiCustomerService2Line className='text-green-500 text-2xl mr-2' />
                24/7 Service</button>

            </p>
            <button className=" btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;