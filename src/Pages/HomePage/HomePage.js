import React from 'react';
import carParts from '../../Images/CarParts.jpg'

const HomePage = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={carParts} alt="" className='rounded' />
                <div>
                    <h1 className="text-5xl font-bold text-gray-600">The World Best Car Parts</h1>
                    <p className="py-6 text-justify text-gray-500">An car has several numbers of parts. But there are four essential Parts of an car. These are: The Chassis.The Engine.Transmission System.Body.
                    </p>
                    <button className="btn btn-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;