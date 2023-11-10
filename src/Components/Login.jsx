import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }
    console.log('User logged in:', {
      email,
      password,
    });
    navigate('/dashboard');
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg ">
      <div className="form-container p-5 rounded bg-white">
        <form>
          <h3 className="text-center text-primary">Sign in</h3>

          <div className="mb-3">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" placeholder="Enter Email" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" className="form-control" />
          </div>

          <div className="mb-3">
            <input type="checkbox" className="custom-control-input" id="check" />
            <label className="custom-control-label ms-2" htmlFor="check">
              Remember Me
            </label>
          </div>

          <div className="d-grid">
            <button type="button" onClick={handleLogin} className="btn btn-primary">
              Sign in
            </button>
          </div>

          <p className="text-end mt-2">
            Forgot <a href="">Password?</a>
            <Link to="/signup" className='ms-3'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
