import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3CyAHOPT1y061M7WDollv3PEU7LTPCnLwtrqf0ieBsu3q2bfV7snm6hLDYV8BPVcmktxs7tiyty3TwZGc51YXf00FTWXK1r4');

const Payment = () => {
    const { id } = useParams()
    const url = `https://tranquil-atoll-94880.herokuapp.com/myOrder/${id}`;

    const { data: Order, isLoading } = useQuery(['myOrder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-md my-12">
                <div className="card-body">
                    <p>Hello, <span className="text-success font-bold">{Order.name}</span></p>
                    <h2 className="card-title">Your Quantity {Order.quantity}</h2>
                    <p>Please pay: $<span className='text-indigo-500 font-bold'>{Order.price * Order.quantity}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={Order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;