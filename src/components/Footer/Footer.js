import React from 'react';
import './Footer.css';
import paymentimg from './pimages/payment.png'
import facebook from './pimages/facebook.png';
import twiter from './pimages/twiter.png';
import linkedin from './pimages/linkedin.png';

const Footer = () => {
    return (
        <div className="footer">
          <div className="container">
           <div className="row">
            <div className="footer-text col-md-4" style={{marginTop:'50px'}}>
            <h4>Contact Info</h4>
            <p>PHONE: Toll Free (123) 456-7890</p>
            <p>EMAIL: <span>mail@freshfood.com</span></p>
            <p>ADDRESS: 123 Street, Dhaka, Bangladesh</p>
            <p>WORKING DAYS/HOURS: Mon - Sun / 9.00 AM - 8.00 PM</p>
            </div>
            <div className="col-md-4 footer-text" style={{marginTop:'50px'}}>
            <h4>Quick Links</h4>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>CONTRIBUTE</p>
            <p>TERMS & CONDITIONS</p>   
            </div>
            <div className="col-md-4" style={{marginTop:'50px'}}>
            <h4 className="footer-text">Payment Method</h4>
            <img src={paymentimg} alt="" />
            </div>
        </div>
        <hr style={{color:'#ffffff'}}/>
        <div className="container">
            <div className="row">
            <div className="col-md-8">
                <p className="footer-text">Copyright © 2021 All Rights Reserved by Fresh Food.</p>
            </div>
            <div className="col-md-4" style={{marginBottom:'20px'}}>
                <img src={facebook} className="footer-social" style={{marginRight:'10px'}}  alt="" />
                <img src={twiter} className="footer-social" style={{marginRight:'10px'}} alt="" />
                <img src={linkedin} className="footer-social" alt="" />
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;