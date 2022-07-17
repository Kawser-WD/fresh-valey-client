import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>

              <ul className="list-unstyled">
               <li>
                  <Link to="/">
                      Home
                  </Link> 
               </li>
               <li>
                  <Link to="/product-list">
                      Product List
                  </Link> 
               </li>
               <li>
                  <Link to="/editproduct">
                      Edit Product
                  </Link> 
               </li>
               <li>
                  <Link to="/add-product">
                      Add Product
                  </Link> 
               </li>
              </ul>
        </div>
    );
};

export default Sidebar;