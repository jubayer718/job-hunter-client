import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import LottieLogin from '../../assets/lottie/login.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
const SignIn = () => {
  const { singInUser } = useContext(AuthContext)
  const location = useLocation();

  const navigate = useNavigate();
  const from = location?.state || '/';
   const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    singInUser(email, password)
      .then(data => {
        console.log(data)
        // const user={email:email}
        // axios.post('http://localhost:3000/jwt', user)
        //   .then(data => {
        //   console.log(data.data)
        // })
        navigate(from)
      }).catch(error => {
      console.log(error)
    })


  }
  return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
          <Lottie animationData={LottieLogin}> 
            
     </Lottie>
    </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold mt-4 ml-8">Login Now</h1>

      <form onSubmit={handleSignIn} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignIn</button>
            </div>
          </form>
          <button className='mb-5'>Not account<Link to="/register" className='text-red-500 '>Register</Link> Now</button>
    </div>
  </div>
</div>
  );
};

export default SignIn;