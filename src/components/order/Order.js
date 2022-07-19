import React from 'react';
import './Order.css';
import Navbar from '../navbar/Navbar';
import ProductCheckout from '../ProductCheckout/ProductCheckout';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useCart from '../../hooks/useCart';
import { Outlet } from 'react-router-dom';
import { dynamicTitle } from '../DynamicTitle/DynamicTitle';
const Order = () => {
  dynamicTitle("Order")
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const removeProduct = (productId) =>{
        const newCart = cart.filter(pd => pd._id !== productId)
        setCart(newCart)
        removeFromDb(productId)
        navigate('/')

    }
    return (
        
       <div>
        <Navbar/>
          <div className="container">
            <div className="row" style={{marginTop:'110px', marginBottom:'30px'}}>
            <div className="col-md-8">
            {
               cart.map(pd=> <ProductCheckout
                removeProduct={removeProduct} 
                product={pd} />)
            }
            </div>
            <div className="col-md-4">
            <Cart cart={cart}/>
            <button type="button" style={{marginTop:'15px', backgroundColor:'#30336b'}} class="btn"><Link to="shipping" style={{textDecoration:'none'}}><span style={{color:'#FFFFFF'}}>Go to Shipping page</span> </Link></button>       
            </div>
            </div>
          </div>
        <Footer/>
        <Outlet/>
       </div>
    );
};

export default Order;