import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceReview = () => {
  const {user} = useContext(AuthContext);


  return (
    <div>
      <h1>Review Found</h1>
      <div>

      </div>
      <div>
        <h1>Add Review</h1>

      </div>
      
    </div>
  );
};

export default ServiceReview;