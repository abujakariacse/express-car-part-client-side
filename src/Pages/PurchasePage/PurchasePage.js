import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [parts, setParts] = useState({});
    const { name, price, minQuantity, avaiQuantity, image, description } = parts

    const [quantity, setQuantity] = useState(50)
    useEffect(() => {
        fetch(`https://tranquil-atoll-94880.herokuapp.com/carParts/${id}`)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [id])


    const addressRef = useRef('')
    const phoneRef = useRef('')
    const quantityRef = useRef('')

    const handleOrder = (e) => {
        e.preventDefault()
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const quantity = quantityRef.current.value
        const email = e.target.email.value
        const name = e.target.name.value
        const price = e.target.price.value
        const addOrder = { name, email, quantity, phone, address, price }

        fetch('https://tranquil-atoll-94880.herokuapp.com/myOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success("Your Order is Successful")
                e.target.reset();
            })
    }

    const handlePlus = (e) => {
        e.preventDefault()
        if (quantity < avaiQuantity) {
            setQuantity(quantity + 1)
        }
    }
    const handleMinus = (e) => {
        e.preventDefault()
        if (quantity > minQuantity) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div>
            <div className="card container w-96 shadow-lg mx-auto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body font-serif">
                    <h2 className="card-title text-secondary font-bold text-xl">{name}</h2>
                    <p className='text-gray-500'>{description}</p>
                    <p className='font-bold'>Per Price: <span className='text-indigo-500'>${price}</span></p>
                    <p className='font-bold'>Minimum quantity: <span className='text-indigo-500'>{minQuantity} </span></p>
                    <p className='font-bold'>Available Quantity: <span className='text-indigo-500'>{avaiQuantity}</span></p>
                </div>
            </div>
            <h2 className='text-indigo-500 text-center text-3xl mt-6'>Your CarParts Order Now</h2><br />
            <form onSubmit={handleOrder} className='flex justify-center items-center flex-col mt-2'>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-96 max-w-xs font-bold" value={user.displayName} name="name" readOnly />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Type here" className="input input-bordered input-primary w-96 max-w-xs font-bold" value={user.email} name="email" readOnly />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input ref={quantityRef} type="number" placeholder={`Min Quantity ${minQuantity}`} className="input input-bordered input-primary w-96 max-w-xs font-bold" name='quantity' value={quantity} />
                    <div className='flex justify-center gap-7 mt-2'>
                        <button className='text-white bg-green-400 btn-xs' onClick={handlePlus}>+</button>
                        <button className='text-white bg-red-500 btn-xs' onClick={handleMinus}>-</button>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" className="input input-bordered input-primary w-96 max-w-xs font-bold" name='price' value={price} />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input ref={addressRef} type="text" placeholder="Your Address" className="input input-bordered input-primary w-96 max-w-xs" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input ref={phoneRef} type="number" placeholder="Your Phone Number" className="input input-bordered input-primary w-96 max-w-xs" required />
                </div>
                <button className='btn btn-primary w-80 mt-5'>Order Now</button>
            </form>
        </div >
    );
};

export default PurchasePage;