import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './checkout.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
const Checkout = (props) => {
    const { quantity } = props.product
    console.log(quantity)
    //  const total = cart.reduce((total ,pd)=> total + parseInt(pd.price) ,0)
    // let Shipping = 0;
    // if(total > 300){
    //     Shipping = 0;
    // }
    // else if(total > 200){
    //     Shipping = 4;
    // }
    // else if(total > 0){
    //     Shipping = 12;
    // }
    
    // const tax = (total / 10).toFixed(2);
    // const payableTotal = (total + Shipping + parseInt(tax))
    return (
        <div>
            {/* <h4>{quantity}</h4> */}
           
        <div className="card">
               <div className="card-body">
               <h5 className="cart">CheckOut Summary</h5>
                   <table className="table">
                    <tbody>
                            <tr>
                            <td>Item</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Product Price</td>
                            <td>TK</td>
                            </tr>
                            <tr>
                            <td>Shipping</td>
                            <td>TK</td>
                            </tr>
                            <tr>
                            <td>Tax + Vat</td>
                            <td>TK</td>
                            </tr>
                            <tr>
                            <td>Payable Total</td>
                            <td>TK</td>
                            </tr>
                            <tr>
                            <button type="button" style={{marginTop:'5px'}} class="btn btn-warning"><Link to="shipping">Go to Shipping page</Link></button>
                            </tr>
                    </tbody>
                   </table>
               </div>
           </div>
           <Outlet/>
        </div>
    //      <Navbar/>
    //      <div className="shop-container">
    //     <div className="product-container">
    //     <div className="p-container">
    //         <div>
    //             {/* <img src={`data:image/png;base64,${pd.image.img}`} style={{height:'100px', width:'100px'}} alt="" /> */}
    //         </div>
    //         <div>
    //             <h5></h5>
    //         </div>
    //         <div className="quantity">
    //           <div className="container">
    //           <button className="m-btn"><FontAwesomeIcon style={{color:'#171C2A'}} icon={faMinus}/></button>
    //           <input type="text" style={{height:'30px', width:'30px', border:'1px solid #EFEFEF'}} />
    //            <button className="m-btn"><FontAwesomeIcon icon={faPlus}/></button>
    //           </div>
    //         </div>
    //         <div>
    //             <p></p>
    //         </div>
    //     </div>
    //     </div>
    // </div>
    );
};

export default Checkout;