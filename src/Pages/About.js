import React from 'react';
import '../Styles/about.css';
import about1 from '../Assets/Images/about1.jpg';
import Team from '../Components/Team';

const About = () => {
    return (
        <>
            <div className="image-container">
                <img src={about1} alt="Background" className="background-image" />
                <div className="text-overlay">
                    <h2>About Us</h2>
                    <h5>Welcome to Travel & Tour!</h5>
                    <p>
                        At Travel & Tour, we are dedicated to turning your travel dreams into unforgettable realities. Founded by a team of avid explorers and seasoned travel professionals, our mission is to provide you with exceptional, tailor-made travel experiences that go beyond the ordinary. With a wealth of knowledge about the world's most breathtaking destinations, we craft bespoke itineraries that cater to your unique interests and preferences. Whether you're seeking a thrilling adventure, a relaxing escape, or a cultural journey, our expertise and personalized service ensure that every detail of your trip is meticulously planned and executed. At Travel & Tour, your journey begins with us, and we are committed to making every moment of your travel experience extraordinary.
                    </p>
                </div>
            </div>
            <Team />
        </>
    );
}

export default About;
