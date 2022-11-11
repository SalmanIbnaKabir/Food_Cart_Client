import React, { useEffect, useState } from 'react';
import DetailsCard from '../DetailsCard/DetailsCard';


const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services/services')
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
          services.map(service => <DetailsCard
            key={service._id}
            service={service}
          ></DetailsCard>)
        }

      </div>

    </div>
  );
};

export default AllServices;