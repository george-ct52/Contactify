import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import React from 'react'
import Appbody from './Components/AppBody/Appbody';

function App() {
  const userLoggedIn = window.localStorage.getItem("userLoggedIn")
  return (
    
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={userLoggedIn? <Appbody/> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Appbody />} />
      </Routes>
    </Router>
  
 
     
    </div>
  
  )
}

export default App;
