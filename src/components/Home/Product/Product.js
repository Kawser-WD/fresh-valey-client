import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const product =props.product
    return (
        <div className=" col-lg-3  col-md-4 col-6">
               <div class="card p-card mb-3">
                <img src={`data:image/png;base64,${product.image.img}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                <a href="" className="card-title"> <Link style={{color:'black', textDecoration:'none'}} to={"/"+product._id}>{product.name}</Link></a>
                <h5 className="card-text">{product.price}TK</h5>
                <button onClick={()=> props.handleAddToCart(props.product)} className="btn" style={{backgroundColor:'#30336b'}}> <FontAwesomeIcon style={{color:'#FFFFFF'}}  icon={faCartPlus} />   <span style={{color:'#FFFFFF'}}>Add</span></button>
                </div>
                </div>
           </div>
    );
};

export default Product;