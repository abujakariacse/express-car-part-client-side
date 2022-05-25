import React, { useEffect, useState } from 'react';
import Parts from './Parts';

const CarParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch(`https://tranquil-atoll-94880.herokuapp.com/carParts`)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-secondary mb-5'>Vehicles Parts :-</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-4 mx-12'>
                {
                    parts.map(part => <Parts
                        key={part._id}
                        part={part}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default CarParts;