import React from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = ({ part }) => {
    const { _id, name, image, description, minQuantity, avaiQuantity, price } = part
    const navigate = useNavigate()
    const handlePurchase = (id) => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='mt-10'>
            <div className="card w-96 bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl text-indigo-400">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Per Price: <span className='text-indigo-500'>${price}</span></p>
                    <p className='font-bold'>Minimum quantity: <span className='text-indigo-500'>{minQuantity} </span></p>
                    <p className='font-bold'>Available Quantity: <span className='text-indigo-500'>{avaiQuantity}</span></p>
                    <div className="card-actions">
                        <button onClick={() => handlePurchase(_id)} className="btn-primary rounded px-6 py-2">Buy Now<i className="fa-solid fa-cart-shopping ml-2"></i></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Parts;