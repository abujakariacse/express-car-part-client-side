import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-info font-mono">
                <div>
                    <p className="font-bold text-xl text-white">
                        Express Car Industries Ltd. <br />Providing reliable tech since 1992
                    </p>
                    <p className='text-white'>Copyright © 2022 - All right reserved by <span className='text-primary font-bold'>Abu Jakaria</span></p>
                </div>
                <div className='grid grid-cols-5'>

                    <span className='text-4xl text-blue-500'><i className="fa-brands fa-facebook"></i></span>
                    <span className='text-4xl text-primary'><i className="fa-brands fa-twitter"></i></span>
                    <span className='text-4xl text-primary'><i className="fa-brands fa-linkedin-in"></i></span>
                    <span className='text-4xl text-red-600'><i className="fa-brands fa-instagram"></i></span>
                    <span className='text-4xl text-white'><i className="fa-brands fa-github"></i></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;