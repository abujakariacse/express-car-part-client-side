import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Profile = ({ profile }) => {
    const [user] = useAuthState(auth)
    const { img, education, location, phone, linkedIn, github } = profile


    return (
        <div>
            <div className="card card-side bg-base-100  flex items-center">
                <div className="avatar">
                    <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-8">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="card-body ml-12">
                    <h2 className="card-title text-3xl">Name: {user.displayName}</h2>
                    <p><span className='font-bold'>Email:</span> {user.email}</p>
                    <p><span className='font-bold'>Education:</span> {education}</p>
                    <p><span className='font-bold'>Location: </span> {location}</p>
                    <p><span className='font-bold'>Phone-Number:</span> {phone}</p>
                    <p><span className='font-bold'>LinkedIn:</span> {linkedIn}</p>
                    <p><span className='font-bold'>Github:</span> {github}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to="/updateProfile"><button className='bg-primary px-4 py-2 text-white'>UpdateProfile</button></Link>
            </div>

        </div>
    );
};

export default Profile;