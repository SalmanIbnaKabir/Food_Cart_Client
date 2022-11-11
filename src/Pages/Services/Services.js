import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManuCard from './ManuCard/ManuCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='my-5'>
      <div className='text-center mb-5'>
        <p className='text-2xl font-bold text-green-500 '>Service</p>
        <h2 className='text-5xl font-semibold my-4'>Our Menu</h2>
        <p>What is your favourite food in this menu we are delivery <br /> to your home as soon as possible, free delivery </p>

      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <ManuCard
            key={service._id}
            service={service}
          ></ManuCard>)
        }

      </div>

      <div className='flex justify-center my-5'>
        <button className=' btn btn-primary'><Link to='/services'>See All</Link></button>
      </div>

    </div>
  );
};

export default Services;