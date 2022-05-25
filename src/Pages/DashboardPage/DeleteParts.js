import React from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const DeleteParts = ({ product, index, refetch }) => {
    const { _id, name, price, minQuantity, avaiQuantity, image } = product;

    const handleDelete = () => {
        confirmAlert({
            title: `Confirm to Delete Product??`,
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://tranquil-atoll-94880.herokuapp.com/CarParts/${_id}`, {
                            method: 'DELETE',
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                refetch()
                                toast.success(`Product is deleted.`)
                            })
                    }

                },
                {
                    label: 'No',
                }
            ]
        })
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={handleDelete}><i className="fa-solid fa-trash-can text-red-500"></i></button>
            </td>
        </tr>
    );
};

export default DeleteParts;