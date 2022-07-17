import React, { useState, useEffect} from 'react';
import './Products.css'
import Product from '../Product/Product'
import { addToDb } from '../../../utilities/fakedb';
import swiper1 from '../../../Loading/slider1.jpg'
import swiper2 from '../../../Loading/slider2.jpg';
import swiper3 from '../../../Loading/slider3.jpg';
import Navbar from '../../navbar/Navbar';
import useCart from '../../../hooks/useCart';
import PropagateLoader from "react-spinners/PropagateLoader";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = () => {
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:4000/allProduct')
        .then(res => res.json())
        .then(data =>{ 
            setProducts(data)
            setDisplayProducts(data)
            setLoading(false)
        })
        
    },[])

    const handleAddToCart = (product)=> {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)
    } 
    

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
       
            <div>
                <Navbar/>
           <div className='d-flex justify-content-center'>
           <input className="search-container" onChange={handleSearch} style={{marginBottom:'20px', marginTop:'120px', width:'350px'}} placeholder="Search"/>
                <Link style={{textDecoration:'none'}} to="/order"><FontAwesomeIcon style={{color:'darkBlue', height:'30px', width:'30px', marginTop:'120px', marginLeft:'5px'}}  icon={faCartPlus} />{cart.length}</Link>
           </div>
             
               <div className="container">
               <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
               <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={swiper1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={swiper2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={swiper3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
               </div>
            <div className="container d-flex justify-content-center" style={{marginTop:'20px', marginBottom:'10px'}}>
            <h3>Chose Your Product</h3>
            </div>
            <div className='d-flex justify-content-center' tyle={{marginTop:'20px', marginBottom:'10px'}}>
            {
                displayProducts?.length === 0 && <PropagateLoader color={'#30336b'} loading={loading}  size={30} />
            }
            </div>
            <div className="container products">
            <div className="row">
                
            {
                displayProducts.map(product => <Product 
                    handleAddToCart={handleAddToCart}
                    product={product}></Product>)
            }
        </div>
        </div>
            </div>
        
    );
};

export default Products;