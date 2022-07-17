import React, { useState, useRef} from 'react';
import './Register.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';




const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handleLoginSubmit = e => {
    if (loginData.password !== loginData.password2) {
        alert('Your password did not match');
        return
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
}


const notify = () => toast.success('SingUp Successful!!!',{duration: 4000,});
    
    return (
        <div>
             <Navbar/>
            <div className="d-flex justify-content-center">
            <div className="card register-card">
                <div className="card-body">
                <div className="d-flex justify-content-center">
                <h5 class="card-title login-text">Register</h5>
                </div>
                <form onSubmit={handleLoginSubmit}>
                <div class="form-group">
                    <label class="form-label login-text">Name</label>
                    <input type="text" class="form-control" onBlur={handleOnBlur}  name="name"  placeholder="Enter Name"/>
                </div>
                <br/>
                <div class="form-group">
                    <label class="form-label login-text">Email</label>
                    <input type="email" class="form-control" onBlur={handleOnBlur} name="email"  placeholder="Enter email"/>
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label login-text">Password</label>
                    <input type="password" class="form-control"  onBlur={handleOnBlur}  name="password" placeholder="Password"/>
                </div>
                <br />
                <div class="form-group">
                    <label class="form-label login-text">Confirm Password</label>
                    <input type="password" class="form-control"  onBlur={handleOnBlur}  name="password2" placeholder="Re Type Your Password"/>
                </div>
                <br />
                <div className="d-grid">
                <button type="submit" onClick={notify} class="btn" style={{backgroundColor:'#71BA58', color:'#ffffff'}}>Register</button>
                </div>
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

export default Register;