import React from 'react';
import { Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const total = cart.reduce((total ,pd)=> total + parseInt(pd.price * pd.quantity) ,0)
    let Shipping = 0;
    if(total > 300){
        Shipping = 0;
    }
    else if(total > 200){
        Shipping = 4;
    }
    else if(total > 0){
        Shipping = 12;
    }
    
    const tax = (total / 10).toFixed(2);
    const payableTotal = (total + Shipping + parseInt(tax))

    return (
        <div>
           <div className="card">
               <div className="card-body">
               <h5 className="cart">CheckOut Summary</h5>
                   <table className="table">
                    <tbody>
                            <tr>
                            <td>Item</td>
                            <td>{cart.length}</td>
                            </tr>
                            <tr>
                            <td>Product Price</td>
                            <td>{total}TK</td>
                            </tr>
                            <tr>
                            <td>Shipping</td>
                            <td>{Shipping}TK</td>
                            </tr>
                            <tr>
                            <td>Tax + Vat</td>
                            <td>{tax}TK</td>
                            </tr>
                            <tr>
                            <td>Payable Total</td>
                            <td>{payableTotal}TK</td>
                            </tr>
                    </tbody>
                   </table>
               </div>
           </div>
           <Outlet/>
       </div>
           
    );
};

export default Cart;