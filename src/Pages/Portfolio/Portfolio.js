import React from 'react';
import jakaria from '../../Images/jakaria.jpeg';

const Portfolio = () => {
    return (
        <div>
            <div className='flex justify-center mt-6'>
                <img src={jakaria} alt="" className='rounded-full h-64 w-50' />
            </div>
            <div className='text-center font-mono '>
                <h2 className='text-2xl text-primary font-bold mt-2'>Abu Jakaria</h2>
                <h2>Email: abujakaria316@gmail.com</h2>
                <h2>Education: Diploma in Engineering</h2>
                <h2>Skills:
                    <span className='font-bold'> HTML , CSS , JS , REACT , NODEJS</span>
                </h2>
                <h2>Frameworks:
                    <span className='font-bold'>Bootstrap 5, React-Bootstrap ,React-Tailwind, Express Js.</span>
                    <h2>My Projects (11 , 10 , 9 assignment) :</h2>
                    <span className='font-bold'>Fruit WareHouse: <a className='text-primary' href="https://wire-house-9427b.web.app/">Project 1</a></span><br />
                    <span className='font-bold'>UpFit: <a className='text-primary' href="https://assignment-ten-a33e4.web.app/"> Project 2</a></span><br />
                    <span className='font-bold'>MacZone: <a className='text-primary' href="https://maczone.netlify.app/"> Project 3</a></span>
                </h2>
            </div>
        </div >
    );
};

export default Portfolio;