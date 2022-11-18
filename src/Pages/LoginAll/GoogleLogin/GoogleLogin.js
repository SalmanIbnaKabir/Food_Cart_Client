import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
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