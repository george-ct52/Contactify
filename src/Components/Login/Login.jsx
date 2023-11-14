import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';
import axios from 'axios';
import { authBaseUrl } from '../constants/constants';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
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
    axios.post(`${authBaseUrl}login`, {
      email: email,
      password: password

    }).then(result => {
      console.log(result.data)
      window.localStorage.setItem("token",result.data)
      window.localStorage.setItem("userLoggedIn",true)
      alert('sign in success')
      navigate('/dashboard');
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
   
  };
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg ">
      <div className="form-container p-5 rounded bg-white">
        <form>
          <h3 className="text-center text-primary">Sign in</h3>

          <div className="mb-3">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" placeholder="Enter Email"
             className="form-control"
             onChange={handleEmail} />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" 
            className="form-control" 
            onChange={handlePassword}/>
          </div>
          <div className="d-grid">
            <button type="button" onClick={handleLogin} className="btn btn-primary">
              Sign in
            </button>
          </div>
          <div className='up'>
          <p className="">
            Don't have an account ? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link>
          </p>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default Login;
