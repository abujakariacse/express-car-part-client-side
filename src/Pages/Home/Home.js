import React from 'react';
import Business from '../Business/Business';
import CarParts from '../CarParts/CarParts';
import HomePage from '../HomePage/HomePage';
import ReviewPage from '../ReviewPage/ReviewPage';
import Reviews from '../Reviews/Reviews';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <CarParts></CarParts>
            <Business></Business>
            <Reviews></Reviews>
            <Section></Section>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;