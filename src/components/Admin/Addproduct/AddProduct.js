import React, { useState } from 'react';
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';
import AdminDrawer from '../Drawer/AdminDrawer';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    dynamicTitle("AddProduct")
    const [food, setFood] = useState({});
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newFood = { ...food}
        newFood[e.target.name] = e.target.value;
        setFood(newFood)
    }
    const handleChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', food.name)
        formData.append('weight', food.weight)
        formData.append('price', food.price)
        formData.append('file', file)

        fetch('https://young-ridge-26718.herokuapp.com/addFood', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        }) 
    }
    return (
        <div>
        <AdminDrawer/>
        <div className="row">
        <div className="col-md-10 p-4 pr-5" style={{position:'absolute', right:0 }}> 
        <h1>Add Product</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Product Name</label>
                    <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Enter Name"/>
                    </div>
                    <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Weight</label>
                    <input type="text" onBlur={handleBlur} class="form-control" name="weight" placeholder="Enter Weight"/>
                    </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Price</label>
                    <input type="text" onBlur={handleBlur} class="form-control" name="price" placeholder="Enter Price"/>
                    </div>
                    <div className="col">
                    <label for="exampleInputEmail1" class="form-label">Product Image</label>
                    <input type="file" onChange={handleChange} class="form-control"  placeholder="Upload Photo"/>
                    </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn" style={{backgroundColor:'#71BA58'}}><span style={{color:'#FFFFFF'}}>Submit</span></button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;