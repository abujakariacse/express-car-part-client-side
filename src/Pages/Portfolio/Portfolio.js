import React from 'react';
import jakaria from '../../Images/jakaria.jpeg';

const Portfolio = () => {
    return (
        <div>
            <div className='flex justify-center mt-6'>
                <img src={jakaria} alt="" className='rounded-full h-64 w-50' />
            </div>
            <div className='text-center'>
                <h2 className='text-3xl text-center text-primary font-bold'>Abu Jakaria</h2>
                <h2>Email: abujakaria316.com</h2>
                <h2>Education: Diploma in Engineering</h2>
                <h2>Skills:
                    <span className='font-bold'> HTML , CSS , JS , REACT , NODEJS</span>
                </h2>
                <h2>Frameworks:
                    <span className='font-bold'>Bootstrap 5, React-Bootstrap ,React-Tailwind, Express Js.</span>
                </h2>
                <div className='flex flex-col'>
                    <h2>My Projects (11 , 10 , 9 assignment) :</h2>
                    <a className='text-primary' href="https://wire-house-9427b.web.app/">Project 1</a>
                    <a className='text-primary' href="https://assignment-ten-a33e4.web.app/"> Project 2</a>
                    <a className='text-primary' href="https://maczone.netlify.app/"> Project 3</a>
                </div>
            </div >
        </div >
    );
};

export default Portfolio;