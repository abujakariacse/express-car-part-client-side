import React from 'react';
import img1 from '../../Images/img-1.png';
import img2 from '../../Images/img-2.png';
import img3 from '../../Images/img-3.png';

const Section = () => {
    return (
        <div className='text-black p-6 mt-20 mx-12'>
            < h2 className='text-center text-6xl font-serif' > We Provides Original Vehicles Parts</h2 >
            <p className='text-center text-2xl mt-4 font-sans'>We Are One of The Leading Car parts Companies</p>
            <div className='w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Section;