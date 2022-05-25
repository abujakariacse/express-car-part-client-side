import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddParts = () => {
    const imgRef = useRef('')
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const priceRef = useRef('')
    const minQuantityRef = useRef('')
    const avaiQuantityRef = useRef('')

    const handleAddParts = (e) => {
        e.preventDefault()
        const price = priceRef.current.value
        const name = nameRef.current.value
        const description = descriptionRef.current.value
        const image = imgRef.current.value
        const minQuantity = minQuantityRef.current.value
        const avaiQuantity = avaiQuantityRef.current.value

        const addReview = { name, image, description, price, minQuantity, avaiQuantity }

        fetch('http://localhost:5000/addParts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success("Car Parts is Added dear.!!")
                e.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-indigo-500 text-center text-3xl mt-6'>Please Dear ,  Add a CarParts</h2>
            <form onSubmit={handleAddParts} className='flex justify-center items-center flex-col mt-4'>
                <div>
                    <label className="label">
                        <span className="label-text">Img URL</span>
                    </label>
                    <input ref={imgRef} type="text" placeholder="Enter Your Image URL" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="image" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input ref={nameRef} type="text" placeholder="Parts Name" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="Name" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <input ref={descriptionRef} type="text" placeholder="Your Description" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="description" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input ref={priceRef} type="number" placeholder="Price" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="price" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input ref={minQuantityRef} type="number" placeholder='Minimum Quantity' className="input input-bordered input-primary w-96 max-w-xs font-bold" name='minQuantity' required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input ref={avaiQuantityRef} type="text" placeholder="Available Quantity" className="input input-bordered input-primary w-96 max-w-xs" name='avaiQuantity' required />
                </div>
                <button className='btn btn-primary w-80 mt-5'>Add a CarParts</button>
            </form>
        </div>
    );
};

export default AddParts;