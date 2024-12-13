import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../../assets/lottie/register.json';
import { AuthContext } from '../../Components/AuthProvider';
import { Link } from 'react-router-dom';
const Register = () => {
const {user,createNewUser}=useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    createNewUser(email, password)
      .then(data => {
      console.log(data)
      }).catch(error => {
      console.log(error)
    })


  }
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}> 
            
     </Lottie>
    </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold mt-4 ml-8">Register Now</h1>

      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="email" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
            </div>

      </form>
                        <Link to="/signIn" className='text-red-400 mb-4 text-center'>Login</Link>
    </div>
  </div>
</div>
  );
};

export default Register;