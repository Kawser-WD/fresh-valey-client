import React from 'react';
import loading from '../../../Loading/Loading.gif'
const ProductDetail = (props) => {
    const pdDetail = props.PdDetail
    console.log(pdDetail)
    return (
        <div>
            <h3>{pdDetail?.name}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <img src={`data:image/png;base64,${pdDetail?.image.img}`} style={{height:"100px", width:"100px"}} class="card-img-top" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <a href="">{pdDetail?.name}</a>
                        <div><h5>{pdDetail?.price}TK</h5></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;