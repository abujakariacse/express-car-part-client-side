import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading'


import DeleteParts from './DeleteParts';

const ManageParts = () => {
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('https://tranquil-atoll-94880.herokuapp.com/CarParts', {
        method: "GET",
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-center'>Manage Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <DeleteParts
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                            ></DeleteParts>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;