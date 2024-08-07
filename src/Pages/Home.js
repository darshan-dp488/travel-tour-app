import React from 'react';
import { BackgroundCarousel } from '../Components/BackgroundCarousel';
import '../Styles/home.css';
import BestTouristPlaces from '../Components/BestTouristPlaces';
import Customer from '../Components/Customer';

const Home = () => {
    return (
        <>
            <BackgroundCarousel />
            <div className="banner text-center mt-4">
                <h2>The best agency you can choose</h2>
                <p>We are committed to offering travel services of the highest quality, combining our energy and enthusiasm with years of experience.</p>
            </div>
            <BestTouristPlaces />
            <Customer />
        </>
    )
}

export default Home;