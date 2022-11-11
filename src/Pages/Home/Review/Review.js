import React from 'react';
import img1 from "../../../assets/pic-2.png"
import img2 from "../../../assets/pic-3.png"
import img3 from "../../../assets/pic-4.png"

const Review = () => {
  return (
    <div className='p-3 my-6'>
      <div className='text-center py-3' >
        <p className='text-green-500 font-bold text-xl'>Customer's Review</p>
        <h1 className='text-primary font-semibold text-3xl py-3 '>What They Say</h1>
      </div>

      <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-2'>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className='grid grid-cols-3 justify-around align-middle p-3 '>
            <img src={img1} alt="" className='h-11 rounded-full' />
            <h1 className='text-green-600 text-xl'>Jesica khatun</h1>
            <p className='text-6xl text-gray-300'>"</p>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta assumenda nemo facilis exercitationem iure iusto id vero aliquam reprehenderit qui non quidem optio sunt tempore, sapiente, obcaecati facere quibusdam.
            </p>

          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className='grid grid-cols-3 justify-around align-middle p-3 '>
            <img src={img2} alt="" className='h-11 rounded-full' />
            <h1 className='text-green-600 text-xl'>Salman Kabir</h1>
            <p className='text-6xl text-gray-300'>"</p>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta assumenda nemo facilis exercitationem iure iusto id vero aliquam reprehenderit qui non quidem optio sunt tempore, sapiente, obcaecati facere quibusdam.
            </p>

          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className='grid grid-cols-3 justify-around align-middle p-3 '>
            <img src={img3} alt="" className='h-11 rounded-full' />
            <h1 className='text-green-600 text-xl'>Afsana mimi</h1>
            <p className='text-6xl text-gray-300'>"</p>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta assumenda nemo facilis exercitationem iure iusto id vero aliquam reprehenderit qui non quidem optio sunt tempore, sapiente, obcaecati facere quibusdam.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Review;