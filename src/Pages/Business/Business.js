import React from 'react';

const Business = () => {
    return (
        <div className='mt-16 bg-business p-10'>
            <h2 className='text-center text-primary text-5xl uppercase'>Millions Business Trust Us</h2>
            <p className='text-center text-3xl mt-4'> Try to understand users expectation</p>
            <div className='grid lg:grid-cols-4 grid-col-1 mt-10 gap-24'>
                <div className='flex items-center flex-col '>
                    <p className='text-5xl'>50+</p>
                    <p className='text-2xl text-secondary'>Countries <i className="fa-solid fa-earth-americas"></i></p>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='text-5xl'>500+</p>
                    <p className='text-2xl text-secondary'>Complete Projects <i className="fa-solid fa-computer"></i></p>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='text-5xl'>350+</p>
                    <p className='text-2xl text-secondary'>Happy Client <i className="fa-solid fa-people-group"></i></p>
                </div>
                <div className='flex items-center flex-col'>
                    <p className='text-5xl'>450+</p>
                    <p className='text-2xl text-secondary'>Feedbacks <i className="fa-solid fa-thumbs-up"></i></p>
                </div>
            </div>
            <div className='flex items-center justify-between shadow-md border p-8 mt-20 bg-info text-white rounded business w-2/3 mx-auto '>
                <div>
                    <h2 className='text-3xl'>Have any question about us or get a products request.?</h2>
                    <p className='text-2xl'>Don't hesitate to contact us</p>
                </div>
                <div className='ml-6 flex'>
                    <button className='btn-md btn-secondary rounded  text-white'>Request For Quotes</button>
                    <button className='btn-md btn-secondary rounded ml-6 text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Business;