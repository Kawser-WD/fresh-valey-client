import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth.js';
import { CircularProgress } from '@mui/material';

const PaymentCardForm = ({ order }) => {
    const { price, _id } = order;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:4000/myOrder/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }
    const inputStyle = {
      iconColor: '#c4f0ff',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
     
}
    return (
      <div  className='d-flex justify-content-center' >
      <form onSubmit={handleSubmit} style={{width:'500px', marginTop:'50px'}} >
          <CardElement
              options={{
                  style: {
                      base: inputStyle
                    },
              }}
          />
          {processing ? <CircularProgress></CircularProgress> : <button className='btn' style={{marginTop:'30px', backgroundColor:'#30336b', color:'#fff'}} type="submit" disabled={!stripe || success}>
              Pay ${price}
          </button>}
          {
          error && <p style={{ color: 'red' }}>{error}</p>
      }
      {
          success && <p style={{ color: 'green' }}>{success}</p>
      }
      </form>
    
  </div>
    );
};

export default PaymentCardForm;