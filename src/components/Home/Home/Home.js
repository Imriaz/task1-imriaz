import React from 'react';
import Details from '../../Details/Details';
import Hiking from '../../Hiking/Hiking';
import HikingDetails from '../../HikingDetails/HikingDetails';
import Quote from '../../HikingDetails/Quote';
import Info from '../../Info/Info';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TheSummit from '../../TheSummit/TheSummit';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Info />
            <Details />
            <Hiking />
            <HikingDetails />
            <Quote />
            <TheSummit />
            <Footer />
        </div>
    );
};

export default Home;