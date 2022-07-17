import React from 'react';
import Navbar from '../navbar/Navbar';

const MypdOrder = (props) => {
    const { name, price } = props.order
    return (
        <div>
            <li>{name}</li>
            <li>{price}</li>
        </div>
    );
};

export default MypdOrder;