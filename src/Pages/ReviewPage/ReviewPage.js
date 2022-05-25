import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://tranquil-atoll-94880.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='font-mono'>
            <h2 className='text-primary text-3xl text-center mt-24 font-bold'>Client's Review About Us</h2>
            <h2 className='text-gray-900 text-lg text-center mt-3'>Please add a review on Dashboard to see on the home page</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-12'>
                {
                    reviews.map(review => <Testimonial
                        key={review._id}
                        review={review}>
                    </Testimonial>)
                }
            </div>
        </div>
    );
};

export default ReviewPage;