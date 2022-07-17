import React, { useState, useRef} from 'react';
import './Login.css';
import gimg from './google.png';
import Modal from 'react-modal';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, initializeAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../firebase/firebaseConfig';
import { useUserContext } from '../context/UserContext';
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import {toast, Toaster} from 'react-hot-toast';


const Login = () => {
  
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
  const notify = () => toast.success('Login Successful!!!',{duration: 4000,});


    return (
      <div>
        <Navbar/>
     <div className="d-flex justify-content-center login">
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
         <button type="submit" onClick={notify} class="btn" style={{backgroundColor:'#71BA58', color:'#ffffff'}}>Login</button>
         </div>
         <Link to="/register">
         <a href="" style={{color:'black', textDecoration:'none' }}>New User? <span style={{color:'#71BA58'}}>Please Register</span></a>
         </Link>
          </form>
          <Toaster
         position="top-center"
         reverseOrder={false}
        />
          </div>
      </div>
     </div>
     <Outlet/>
     <Footer/>
    </div>
    );
};

export default Login;