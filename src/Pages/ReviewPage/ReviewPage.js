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
        <div>
            <h2 className='text-primary text-3xl text-center mt-24 font-bold'>Client Side</h2>
            <h2 className='text-gray-400 text-xl text-center font-bold'>Please Add a Review #dashboard</h2>
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