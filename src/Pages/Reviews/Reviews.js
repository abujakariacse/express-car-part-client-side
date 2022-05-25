import React from 'react';
import picture from '../../Images/HomeDelivery.jpg';
import picture2 from '../../Images/auto.webp'
import picture3 from '../../Images/Fast.jpg'

const Reviews = () => {
    return (
        <div>
            <div className='mx-12 mt-16 mb-10'>
                <h1 className='text-4xl font-bold text-primary'>Why do choose us</h1>
                <p className='mt-4'>This is the best Car parts Company.<br />100% Original parts.</p>


                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div className="card w-96 bg-base-100 shadow-md mt-10">
                        <figure><img src={picture} alt="Shoes" /></figure>
                        <div className='flex'>
                            <div>
                                <h2 className='text-2xl mt-8 ml-4 text-white bg-primary px-2 py-1 rounded-full'><i className="fa-solid fa-car"></i></h2>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Fast Delivery!
                                    <div className="badge badge-secondary">YAY!!</div>
                                </h2>
                                <p>We can try to deliver our product to the customer as soon as possible</p>
                                <div className="card-actions justify-end">
                                    <button className="text-indigo-500 font-bold">See More <span className='text-green-500'><i className="fa-solid fa-circle-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-md mt-10">
                        <figure><img src={picture2} alt="Shoes" /></figure>
                        <div className='flex'>
                            <div>
                                <h2 className='text-2xl mt-8 ml-4 text-white bg-primary px-2 py-1 rounded-full'><i className="fa-solid fa-bell"></i></h2>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Auto Responder!
                                    <div className="badge badge-secondary">Hurray!!</div>
                                </h2>
                                <p>We have a virtual assistant who can help you anytime. You also can contact with you to know about anything about us</p>
                                <div className="card-actions justify-end">
                                    <button className="text-indigo-500 font-bold">See More <span className='text-green-500'><i className="fa-solid fa-circle-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-md mt-10">
                        <figure><img src={picture3} alt="Shoes" /></figure>
                        <div className='flex'>
                            <div>
                                <h2 className='text-2xl mt-8 ml-4 text-white bg-primary px-2 py-1 rounded-full'><i className="fa-solid fa-car"></i></h2>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Home Delivery!
                                    <div className="badge badge-secondary">YUMMY!!</div>
                                </h2>
                                <p>We provide home delivery within low cost. In the city area we provide free home delivery.</p>
                                <div className="card-actions justify-end">
                                    <button className="text-indigo-500 font-bold">See More <span className='text-green-500'><i className="fa-solid fa-circle-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;