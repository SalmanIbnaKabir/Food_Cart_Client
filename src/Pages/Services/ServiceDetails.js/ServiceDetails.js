import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ServiceReview from '../../ServiceReview/ServiceReview';

const ServiceDetails = () => {
  const { title, img, price, description, _id } = useLoaderData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-8'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure><img src={img} alt="food img" className='h-72' /></figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-xl'>{description}</p>
          <p className='text-2xl text-green-600 font-semibold my-3'>Price: ${price}</p>

          <div className="card-actions justify-between">
            <button className='btn btn-primary'>Order</button>
          </div>
        </div>
      </div>
      <div>
        <ServiceReview></ServiceReview>
      </div>

    </div>
  );
};

export default ServiceDetails;