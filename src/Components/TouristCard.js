import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/TouristCard.css';

const TouristCard = ({ image, name, description }) => {
    return (
        <div className="tourist-card">
            <img src={image} alt={name} className="tourist-card-image" />
            <div className="tourist-card-content">
                <h3 className="tourist-card-title">{name}</h3>
                <p className="tourist-card-description">{description}</p>
            </div>
        </div>
    );
};

TouristCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TouristCard;
