import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from './PaymentCardForm';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from '../../navbar/Navbar'
import { dynamicTitle } from '../../DynamicTitle/DynamicTitle';


const stripePromise = loadStripe('pk_test_51KAd2vEtfrb3oJZ2glcXweIzuVz2A6OBbn4db32yo4AGOTwIOsI5ST3yNbFWEetUrTxX5IvF9dqjQCmY5TymFN1S00n5FQP6nV');

const PaymentProcess = () => {
    dynamicTitle("Payment")
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/myOrder/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [orderId]);
    return (
        <div>
            <Navbar/>
            <h2  className='d-flex justify-content-center' style={{fontWeight:'500', color:'#30336b', marginTop:'120px'}}>Please Pay for confirm your order</h2>
            {order?.price && <Elements stripe={stripePromise}>
                <PaymentCardForm
                    order={order}
                />
            </Elements>}
        </div>
    );
};

export default PaymentProcess;
