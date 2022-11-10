import React from 'react';
import img4 from '../../../assets/about/about-img.png';
import { TbTruckDelivery, TbCurrencyDollar } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className='bg-slate-100 py-8'>
      <h1 className='text-center text-xl  text-green-500'>About Us</h1>
      <h3 className='text-center text-3xl text-primary font-bold mt-3 '>WHY CHOOSE US ?</h3>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row">
          <img alt='' src={img4} className="w-1/2" />
          <div>
            <h1 className="text-5xl font-bold">Best Food In The Country</h1>
            <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <p className='mb-5'>
              <button className="btn btn-active btn-ghost mr-4"><TbTruckDelivery className='text-green-500 text-2xl mr-2'/> Free Delivery</button>
            <button className="btn btn-active btn-ghost mr-4"> <TbCurrencyDollar className='text-green-500 text-2xl mr-2'/> Easy Payments</button>
            <button className="btn btn-active btn-ghost"> 
            <RiCustomerService2Line className='text-green-500 text-2xl mr-2'/>
            24/7 Service</button>
            
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;