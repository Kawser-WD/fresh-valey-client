import React, { useState } from 'react';
import './Login.css';
import gimg from './google.png';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';


const Login = () => {
  dynamicTitle("Login")
  const [loginData, setLoginData] = useState({});
  const {  loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, navigate);
      e.preventDefault();
  }

  const handleGoogleSignIn = () => {
      signInWithGoogle(location, navigate)
  }


    return (
      <div>
        <Navbar/>
     <div className="d-flex justify-content-center login" style={{marginTop:'150px'}}>
     <div className="card login-card">
          <div className="card-body">
          <div className="d-flex justify-content-center">
          <h5 class="card-title login-text">Login</h5>
          </div>
          <form onSubmit={handleLoginSubmit}>
          <div class="form-group">
              <label class="form-label login-text">Email</label>
              <input type="email" class="form-control" name="email"  onChange={handleOnChange}   placeholder="Enter email"/>
          </div>
          <br />
          <div class="form-group">
              <label class="form-label login-text">Password</label>
              <input type="password" class="form-control" name="password" onChange={handleOnChange}  placeholder="Password"/>
          </div>
          <br />
         <div className="d-grid">
         <button type="submit" class="btn" style={{backgroundColor:'#30336b', color:'#ffffff'}}>Login</button>
         </div>
          <br />
         <div className="d-grid">
         <button type="submit" onClick={handleGoogleSignIn} style={{border:'1px solid black'}}  class="btn" >Login With Google <img src={gimg} style={{height:'30px', width:'30px'}} /></button>
         </div>
         <Link to="/register">
         <a href="" style={{color:'black', textDecoration:'none' }}>New User? <span style={{color:'#30336b'}}>Please Register</span></a>
         </Link>
          </form>
          </div>
      </div>
     </div>
     <Outlet/>
     <Footer/>
    </div>
    );
};

export default Login;