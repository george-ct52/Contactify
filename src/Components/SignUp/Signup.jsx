import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';
import { authBaseUrl } from '../constants/constants';
import axios from 'axios';
function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const navigate = useNavigate();

  const handleSignUp = () => {
   
    const firstName = document.getElementById('fname').value;
    const email1 = document.getElementById('email').value;
    const password1 = document.getElementById('password').value;

   
    if (!firstName || !email1 || !password1) {
      alert('Please fill in all the fields');
      return;
    }


    console.log('User registered:', {
      firstName,
      email,
      password,
    });
    axios.post(`${authBaseUrl}register`, {
      name: name,
      email: email,
      password: password

    }).then(result => {
      console.log(result.data)
      alert('sign up success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  
    navigate('/');
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg">
      <div className="form-container p-5 rounded bg-white">
        <form>
          <h3 className="text-center  text-primary">Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" placeholder="Enter Name" className="form-control" onChange={handleName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" placeholder="Enter Email" className="form-control" onChange={handleEmail}/>
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" className="form-control" onChange={handlePassword}/>
          </div>

          <div className="d-grid">
            <button type="button" onClick={handleSignUp} className="btn btn-primary">
              Sign up
            </button>
          </div>
         <div className="up">
         <p className="">
            Already Registered ?<Link to="/" className='' style={{ textDecoration: 'none' }}>Sign in</Link>
          </p>
         </div>
         
        </form>
      </div>
    </div>
  );
}

export default Signup;
