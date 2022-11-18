import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();

      })
      .catch(err => console.error(err))
  }

  return (
    <div className="hero w-full my-20">
      <div className="card  w-full  md:w-3/6 shadow-2xl bg-base-100  py-20  px-10">
        <h1 className="text-5xl text-center font-bold">Login</h1>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <a href="#/" className="label-text-alt link link-hover" alt=''>Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className='btn btn-primary' />

          </div>
        </form>
        <p className='text-center'>New to Website ? <Link className='text-green-600 font-bold  ' to='/signup'> Sign Up</Link></p>

        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;