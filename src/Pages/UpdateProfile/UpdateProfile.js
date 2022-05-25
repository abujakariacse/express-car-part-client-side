import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const education = e.target.education.value
        const location = e.target.location.value
        const phone = e.target.phone.value
        const linkedIn = e.target.linkedIn.value
        const github = e.target.github.value
        const img = e.target.img.value
        const updateProfile = { education, location, phone, linkedIn, github, img }


        const url = `https://tranquil-atoll-94880.herokuapp.com/myProfile?email=${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(result => {
                console.log("success", result);
                toast('Profile Update Successful');
                navigate("/dashboard/profile")
                e.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-4xl text-center text-primary font-bold mt-4'>Please , Update Your Profile!!</h2>
            <form onSubmit={handleProfileUpdate} className='flex justify-center items-center flex-col mt-4'>
                <div>
                    <label className="label">
                        <span className="label-text">Img</span>
                    </label>
                    <input type="text" placeholder="Enter Your Image" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="img" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input type="text" placeholder="Your Education" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="education" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Phone-Number</span>
                    </label>
                    <input type="number" placeholder="Your Phone Number" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="phone" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder='Your location' className="input input-bordered input-primary w-96 max-w-xs font-bold" name='location' required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">LinkedIn Profile</span>
                    </label>
                    <input type="text" placeholder="Your linkedIn profile link" className="input input-bordered input-primary w-96 max-w-xs" name='linkedIn' required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Github</span>
                    </label>
                    <input type="text" placeholder="Your github link" className="input input-bordered input-primary w-96 max-w-xs" name='github' required />
                </div>
                <button className='btn btn-primary w-80 mt-5'>Profile Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;