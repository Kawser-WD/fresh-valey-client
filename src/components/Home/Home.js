import React from 'react';
import './Home.css';
import Products from './Products/Products';
import Footer from '../Footer/Footer';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
const Home = () => {
    dynamicTitle('Fresh Valey')
    return (
          <div>
              <Products/>
              <Footer/>
          </div>
    );
};

export default Home;