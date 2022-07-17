import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import EditProduct from '../EditProduct/EditProduct';
import Sidebar from '../Sidebar/Sidebar';

const UpdateProduct = (props) => {
    // const {name, weight, price} = props.updtPd
    // console.log(name, weight, price)
    const {id} = useParams();
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/allProduct')
        .then(res=> res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    // console.log(product)
    const result = product.filter(pd => pd._id === id)


    //  const updateProduct = (id)=>{
    //     fetch(`http://localhost:4000/allProduct/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(props.product)
    //    })
    //    .then(res => res.json())
    //    .then(data => {
    //        console.log('product updated')
           
    //    })
    // }
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