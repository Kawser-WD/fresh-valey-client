import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const EditProduct = (props) => {
    const {name, weight, price, _id} = props.pd
   const [updatepd,setUpdatePd] = useState({});
    const handleBlur = e => {
        const newPd = { ...updatepd}
        newPd[e.target.name] = e.target.value;
        setUpdatePd(newPd)
    }

     const updateProduct = (id)=>{
         const name = document.getElementById('name').value
         const weight = document.getElementById('weight').value
         const price = document.getElementById('price').value
         const product = {name, weight, price}
        fetch(`http://localhost:4000/allProduct/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
       })
       .then(res => res.json())
       .then(data => {
           console.log('product updated')
           
       })
    }
   
    return (

                <div>
                    <h1>Update Product {name}</h1>

                    <input type="text" onBlur={handleBlur} id="name" />
                    <input type="text" onBlur={handleBlur} id="weight" />
                    <input type="text" onBlur={handleBlur} id="price" />
                    <input type="submit" onClick={()=> updateProduct(_id)}/>

                </div>

    );
};

export default EditProduct;