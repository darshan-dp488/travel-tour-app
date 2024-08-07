import React from 'react';
import place1 from '../Assets/Images/place1.jpg';
import place2 from '../Assets/Images/place2.jpg';
import place3 from '../Assets/Images/place3.jpg';
import place4 from '../Assets/Images/place4.jpg';
import TouristCard from './TouristCard';
import '../Styles/TouristCard.css';

const popularPlaces = [
    {
        image: place1,
        name: 'Spain',
        description: 'From beaches to mountains to historic monuments to churches and palaces, Spain has it all. Visitors from all over the world come here to not just enjoy these wonderful sights but also various activities such as hiking, skiing, water sports, river-rafting and various forms of water sports.',
    },
    {
        image: place2,
        name: 'United Kingdom',
        description: 'The United Kingdom attracts worldwide visitors with a combination of rural and urban scenery and the appeal of British Culture which includes sport, food and art. Also The U.K. is known all over the world for its sports and literature.',
    },
    {
        image: place3,
        name: 'Australia',
        description: "Australia's spectacular natural environment, multicultural communities, excellent food and wine, its weather and lifestyle and the friendliness and openness of its people make it one of the world's most attractive tourist destinations.",
    },
    {
        image: place4,
        name: 'Singapore',
        description: "Singapore is a vibrant city - state with a captivating blend of modern and traditional , making it a popular destination for tourists from all over the world . There 's something for everyone, from the adrenaline rush of adventure parks to the serene beauty of botanical gardens.",
    },
];

const BestTouristPlaces = () => {
    return (
        <section className='best-services'>
            <h2 className="section-title">Popular Tourist Places</h2>
            <div className="tourist-cards-container">
                {popularPlaces.map((place, index) => (
                    <TouristCard
                        key={index}
                        image={place.image}
                        name={place.name}
                        description={place.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default BestTouristPlaces