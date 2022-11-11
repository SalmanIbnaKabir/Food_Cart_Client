import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { title, img, price, description, _id } = useLoaderData()
  return (
    <div>
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

          {/* <div className="card-actions justify-between">
            <button className='btn btn-primary'>Order</button>
            <button className='btn btn-primary'>Details</button>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;