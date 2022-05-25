import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Profile from './Profile';

const MyProfile = () => {
    const [profiles, setProfiles] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://tranquil-atoll-94880.herokuapp.com/myProfile?email=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate("/")
                    }
                    return res.json()
                })
                .then(data => setProfiles(data))
        }
    }, [user])

    return (
        <div>
            <h2 className='text-center text-primary text-3xl font-serif'>My Profile</h2>
            <div className='mt-10'>
                {
                    profiles.map(profile => <Profile
                        key={profile._id}
                        profile={profile}>
                        <h3>profile.name</h3>
                    </Profile>)
                }
            </div>
            <div className='flex justify-center'>
                {
                    profiles[0]?.phone ? '' : <Link to='/addProfile'><button className='bg-primary px-4 py-2 text-white rounded mt-4'>Add Profile</button></Link>
                }
            </div>

        </div>
    );
};

export default MyProfile;