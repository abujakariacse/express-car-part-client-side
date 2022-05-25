import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const imgRef = useRef('')
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const addressRef = useRef('')
    const ratingsRef = useRef('')

    const handleReview = (e) => {
        e.preventDefault()
        const address = addressRef.current.value
        const name = nameRef.current.value
        const description = descriptionRef.current.value
        const img = imgRef.current.value
        const rating = ratingsRef.current.value

        const addReview = { name, img, description, address, rating }

        fetch('https://tranquil-atoll-94880.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success("Your Review is Successfully done.!!")
                e.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-indigo-500 text-center text-3xl mt-6'>Sir , Please Add a Review</h2>
            <form onSubmit={handleReview} className='flex justify-center items-center flex-col mt-4'>
                <div>
                    <label className="label">
                        <span className="label-text">Img</span>
                    </label>
                    <input ref={imgRef} type="text" placeholder="Enter Your Image" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="img" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <input ref={descriptionRef} type="text" placeholder="Your Description" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="description" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input ref={ratingsRef} type="number" placeholder="Out of 5" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="ratings" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input ref={nameRef} type="text" placeholder='Your Name' className="input input-bordered input-primary w-96 max-w-xs font-bold" name='name' required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input ref={addressRef} type="text" placeholder="Your Address" className="input input-bordered input-primary w-96 max-w-xs" required />
                </div>
                <button className='btn btn-primary w-80 mt-5'>Add a Review</button>
            </form>
        </div>
    );
};

export default AddReview;