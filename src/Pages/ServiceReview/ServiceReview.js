import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceReview = ({ title }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([])


  const handleReviewSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const email = user?.email;
    const serviceName = title;
    const userImg = user?.photoURL || '';


    const review = {
      serviceName,
      email,
      review: message,
      userImg,



    }
    fetch('https://assignment-11-server-salmanibnakabir.vercel.app/reviews', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert('your review add successfully ')
          form.reset()
        }
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    fetch(`https://assignment-11-server-salmanibnakabir.vercel.app/reviews/?serviceName=${title}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [title])

  return (
    <div>
      <h1>{reviews.length} :Review Found</h1>
      <div>
        {
          reviews.map(review =>
            <div className="card w-96 bg-base-100 shadow-xl mb-3" key={review._id}>
              <div className="card-body">
                <h2 className="card-title">
                  <div className="avatar">
                    <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review?.userImg ? 'userImg' : 'https://placeimg.com/192/192/people'} alt='' />
                    </div>
                  </div>
                  Name:{review.displayName} </h2>
                <p>comment: {review.review}</p>
                <p><small>Email: {review.email}</small></p>
                .

              </div>
            </div>)
        }
      </div>
      <div>
        <h1 className='my-5'>{user?.uid ? 'Add Review:' : 'login first '}</h1>
        <form onSubmit={handleReviewSubmit} >
          <textarea name="message" id="" cols="30" rows="2" placeholder='comment' className='input input-bordered input-accent'></textarea>
          <br />
          {user?.uid && <input type="submit" value="Submit" className='btn btn-primary' />}
        </form>

      </div>

    </div>
  );
};

export default ServiceReview;