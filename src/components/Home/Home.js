import React from 'react';
import './Home.css';
import Products from './Products/Products';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
          <div>
              <Products/>
              <Footer/>
          </div>
    );
};

export default Home;