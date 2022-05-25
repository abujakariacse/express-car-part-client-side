import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProfile = () => {
    const [user] = useAuthState(auth)

    const imgRef = useRef('')
    const educationRef = useRef('')
    const locationRef = useRef('')
    const phoneRef = useRef('')
    const linkedInRef = useRef('')
    const githubRef = useRef('')
    const navigate = useNavigate()

    const handleProfile = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const education = educationRef.current.value
        const location = locationRef.current.value
        const phone = phoneRef.current.value
        const img = imgRef.current.value
        const linkedIn = linkedInRef.current.value
        const github = githubRef.current.value

        const addProfile = { email, education, location, phone, img, linkedIn, github }

        fetch('http://localhost:5000/addProfile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success("Your Profile is Successfully Add.!!")
                navigate('/dashboard/profile')
                e.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-indigo-500 text-center text-3xl mt-6'>Sir , Please Add a Review</h2>
            <form onSubmit={handleProfile} className='flex justify-center items-center flex-col mt-4'>
                <div>
                    <label className="label">
                        <span className="label-text">Img</span>
                    </label>
                    <input ref={imgRef} type="text" placeholder="Enter Your Image" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="img" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="email" value={user.email} readOnly />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input ref={educationRef} type="text" placeholder="Your Education" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="Education" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Phone-Number</span>
                    </label>
                    <input ref={phoneRef} type="number" placeholder="Your Phone Number" className="input input-bordered input-primary w-96 max-w-xs font-bold" name="phone" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input ref={locationRef} type="text" placeholder='Your location' className="input input-bordered input-primary w-96 max-w-xs font-bold" name='location' required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">LinkedIn Profile</span>
                    </label>
                    <input ref={linkedInRef} type="text" placeholder="Your linkedIn profile link" className="input input-bordered input-primary w-96 max-w-xs" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Github</span>
                    </label>
                    <input ref={githubRef} type="text" placeholder="Your github link" className="input input-bordered input-primary w-96 max-w-xs" required />
                </div>
                <button className='btn btn-primary w-80 mt-5'>Add a Profile</button>
            </form>
        </div>
    );
};

export default AddProfile;