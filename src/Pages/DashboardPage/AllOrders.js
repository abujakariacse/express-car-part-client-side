import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch(`https://tranquil-atoll-94880.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>

                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) &&
                                        <div>
                                            <span className='text-success'>Paid</span> <br />
                                            <span className='text-red-500'>{order.transactionId}</span>
                                        </div>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;