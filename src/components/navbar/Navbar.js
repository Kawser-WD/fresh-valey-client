import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../Loading/LogoMakr-643zDJ.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import useCart from '../../hooks/useCart'
import useAuth from '../../hooks/useAuth.js';
const Navbar = () => {
  const { user, logout, admin } = useAuth();
  const [cart]= useCart(); 
    return (
      <nav class="navbar navbar-expand-lg navbar-expand-sm fixed-top shadow " style={{backgroundColor:'#FFFFFF', height:'100px'}}>
      <div class="container-fluid">
      <img src={Logo} alt="" style={{width:'200px'}} class="d-inline-block align-text-top"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:'#30336b'}}></FontAwesomeIcon>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/order">Order</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/myorder">My Order</Link>
                </li>

                {
                    admin &&  <li class="nav-item">
                    <Link class="nav-link" style={{textDecoration:'none'}} to="/admin">Admin</Link>
                    </li>
                   
                }
               
               {
                   user?.email ?
                   <li class="nav-item">
                   <a class="nav-link" href='' onClick={logout}>Logout</a>
                   </li>
                   :
                   <li class="nav-item">
                   <Link  class="nav-link" style={{textDecoration:'none'}} to="/login">Login</Link>
                   </li>
               }
                
                <li class="nav-item">
                <Link class="nav-link" style={{textDecoration:'none'}} to="/order"><FontAwesomeIcon style={{color:'#EF761A', height:'20px', width:'20px'}}  icon={faCartPlus} />{cart.length}</Link>
                </li>
                
      </ul>
      </div>
  </div>
  </nav>
    );
};

export default Navbar;