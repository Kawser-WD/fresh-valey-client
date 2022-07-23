import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';
import EditProduct from '../EditProduct/EditProduct';
import Sidebar from '../Sidebar/Sidebar';

const UpdateProduct = (props) => {
    dynamicTitle("UpdateProduct")
    const {id} = useParams();
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('https://young-ridge-26718.herokuapp.com/allProduct')
        .then(res=> res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    // console.log(product)
    const result = product.filter(pd => pd._id === id)
    return (
        <div className="container-fluid row">
        <Sidebar/>
        <div className="col-md-10 p-4 pr-5" style={{position:'absolute', right:0 }}>
                <div>
                    {
                        result.map(pd=> <EditProduct pd={pd}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;