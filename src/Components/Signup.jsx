import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignUp = () => {
   
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all the fields');
      return;
    }


    console.log('User registered:', {
      firstName,
      lastName,
      email,
      password,
    });

  
    navigate('/');
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg">
      <div className="form-container p-5 rounded bg-white">
        <form>
          <h3 className="text-center  text-primary">Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" placeholder="Enter First Name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder="Enter Last Name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" placeholder="Enter Email" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" className="form-control" />
          </div>

          <div className="d-grid">
            <button type="button" onClick={handleSignUp} className="btn btn-primary">
              Sign up
            </button>
          </div>

          <p className="text-end mt-2">
            Already Registered?<Link to="/" className='ms-2'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
