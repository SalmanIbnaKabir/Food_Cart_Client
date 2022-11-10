import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err))


  }
  return (
    <div>
      <p className='text-center'>
        <button className='btn-ghost btn text-xl' onClick={handleGoogleSignIn}><span className='text-blue-600'>G</span>
          <span className='text-red-600'>o</span>
          <span className='text-yellow-500'>o</span>
          <span className='text-blue-600'>
            g
          </span>
          <span className='text-green-700'>l</span>
          <span className='text-red-600'>e</span>
        </button>
        Login


      </p>
    </div>
  );
};

export default GoogleLogin;