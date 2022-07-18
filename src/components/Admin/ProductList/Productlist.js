import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import AdminDrawer from '../Drawer/AdminDrawer';
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';
const Productlist = () => {
    dynamicTitle("ProductList")
    const [products, setProducts] = useState([]);
        useEffect(()=>{
        fetch('http://localhost:4000/allProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const deleteProduct = (id)=>{
        fetch(`http://localhost:4000/allProduct/${id}`, {
             method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log('product deleted')
            // if(res){
                
            // }
        })
    }
    return (
       <div>
           <AdminDrawer/>
            <div className="row">
            <div className="col-md-10 p-4 pr-5" style={{position:'absolute', right:0 }}> 
             <h1>Product List</h1>
             <div>
             <table className="table table-borderless table-hover">
                <thead className='table-light'>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                </thead>
            <tbody>
            {
                products.map((product, key)=>{
                    return(
                        <tr key={key}>
                        <td>{product.name}</td>
                        <td>{product.weight}</td>
                        <td>{product.price}TK</td>
                        <td><button  style={{border:'none',backgroundColor:'#ffffff'}}> <Link to={"/updateproduct/"+product._id}> <FontAwesomeIcon icon={faPencilAlt} style={{color:'green'}}/></Link></button> <button onClick={()=> deleteProduct(product._id)} style={{border:'none', backgroundColor:'#ffffff'}}><FontAwesomeIcon icon={faTrashAlt} style={{color:'red'}} /></button> </td> 
                        </tr>
                    )
                })
             }
            </tbody>
            </table>
             </div>
            </div>
        </div>
       </div>
    );
};

export default Productlist;