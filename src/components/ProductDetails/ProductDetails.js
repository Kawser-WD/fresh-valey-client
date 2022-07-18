import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import ProductDetail from './ProductDetail/ProductDetail';
import './ProductDetails.css'
const ProductDetails = () => {
    dynamicTitle('Product-Details');
    const {productId} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    fetch('http://localhost:4000/allProduct')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
const PdDetail = products.find(pd=> pd._id === productId)
    return (
        <div className="pdDetail">
          <Navbar/> 
          <ProductDetail PdDetail={PdDetail} />
          <Footer/>
        </div>
    );
};

export default ProductDetails;