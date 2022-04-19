import React from 'react';
import Banner from '../Banner/Banner';
import FreeTips from '../FreeTips/FreeTips';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FreeTips></FreeTips>
        </div>
    );
};

export default Home;