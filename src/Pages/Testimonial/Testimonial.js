import React from 'react';
import './Testimonial.css'

const Testimonial = ({ review }) => {
    const { description, name, address, img, rating } = review
    return (
        <div className='mt-10 w-10/12 mx-auto h-96'>
            <div className="card shadow-lg p-4 text-center">
                <h1 className='text-2xl font-mono font-bold'>{name}</h1>
                <p className='text-sm mb-5'>{address}</p>
                <div className="avatar ml-8 flex justify-center">
                    <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-28">
                        <figure><img src={img} alt="" /></figure>
                    </div>
                </div>
                <div className="card-body">
                    <p className='text-sm'><i className="fa-solid fa-quote-left text-sm"></i> {description} <i className="fa-solid fa-quote-right text-sm"></i></p>
                    <p className=''>Ratings: <span className='text-secondary font-bold'>{rating}</span> <i className="fa-solid fa-star text-warning text-sm"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;