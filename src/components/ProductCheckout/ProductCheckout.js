import React from 'react';
import './ProductCheckout.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProductCheckout = (props) => {
    const {name, image, price, quantity, _id} = props.product;
    return (
        <div>
            <div class="row g-0">
                <div class="col-md-6">
                <img src={`data:image/png;base64,${image.img}`} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-6" style={{marginTop:'50px', paddingLeft:'20px'}}>
                <h5>{name}</h5>
                <p>{price}TK.</p>
                <p>Quantity: {quantity}</p>
                <button className="m-btn"><FontAwesomeIcon style={{color:'#171C2A'}} icon={faMinus}/></button>
                <input type="text" style={{height:'30px', width:'30px', border:'1px solid #EFEFEF'}} />
                <button className="m-btn"><FontAwesomeIcon icon={faPlus}/></button>
                <p className='remove'><small class="text-muted"><a href='' onClick={()=> props.removeProduct(_id)}> <FontAwesomeIcon style={{height:'20px', width:'20px', color:'#404C53'}} icon={faTrashAlt}/> </a></small></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCheckout;