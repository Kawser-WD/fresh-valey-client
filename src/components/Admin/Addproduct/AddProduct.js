import React, { useState } from 'react';
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';
import AdminDrawer from '../Drawer/AdminDrawer';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProduct = () => {
    dynamicTitle("AddProduct")

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data =>{
        const serviceData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url =`https://young-ridge-26718.herokuapp.com/allProduct`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response'))
        .then(result=>{
            if(result){
                toast.success('product added successfully')
                reset();
            }
        })
        
    }

    const handleImageUpload = event=>{
        console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '9db1a2332597d4c3bb98d6cc29ecab91');
    imageData.append('image', event.target.files[0])  

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
       setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div>
        <AdminDrawer/>
        <div className="row">
        <div className="col-md-10 p-4 pr-5" style={{position:'absolute', right:0 }}> 
        <h1>Add Product</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>Product Name</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} {...register("name")} />
                <br/><br/>
                <label>Weight</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} {...register("weight")} />
                <br/><br/>
                <label>Price</label>
                <br/>
                <input style={{width:'300px', height:'50px'}} {...register("price")} />
                <br/><br/>
                <input type="file" {...register("image")} onChange={handleImageUpload} />
                <br/><br/>
            <input type="submit" />
    </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;