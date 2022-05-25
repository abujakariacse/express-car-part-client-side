import React from 'react';
import pageError from '../../Images/p-404.webp'

const PageError = () => {
    return (
        <div className='h-screen flex justify-center items-center mt-10'>
            <img src={pageError} alt="" />
        </div>
    );
};

export default PageError;