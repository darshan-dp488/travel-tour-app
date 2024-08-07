import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import destination1 from '../Assets/Images/destination1.jpg';
import destination2 from '../Assets/Images/destination2.jpg';
import destination3 from '../Assets/Images/destination3.jpg';
import destination4 from '../Assets/Images/destination4.jpg';
import destination5 from '../Assets/Images/destination5.jpg';
import destination6 from '../Assets/Images/destination6.jpg';
import destination7 from '../Assets/Images/destination7.jpg';
import destination8 from '../Assets/Images/destination8.jpg';
import destination9 from '../Assets/Images/destination9.jpg';
import destination10 from '../Assets/Images/destination10.jpg';
import destination11 from '../Assets/Images/destination11.jpg';
import destination12 from '../Assets/Images/destination12.jpg';
import '../Styles/destination.css';

const destinationList = [
    {
        image: destination1,
        name: 'Canada',
        places: '5 places'
    },
    {
        image: destination2,
        name: 'USA',
        places: '6 places'
    },
    {
        image: destination3,
        name: 'New Zealand',
        places: '4 places'
    },
    {
        image: destination4,
        name: 'Australia',
        places: '5 places'
    },
    {
        image: destination5,
        name: 'Thailand',
        places: '3 places'
    },
    {
        image: destination6,
        name: 'Sinagapore',
        places: '4 places'
    },
    {
        image: destination7,
        name: 'Dubai',
        places: '3 places'
    },
    {
        image: destination8,
        name: 'India',
        places: '5 places'
    },
    {
        image: destination9,
        name: 'Switzerland',
        places: '4 places'
    },
    {
        image: destination10,
        name: 'Paris',
        places: '2 places'
    },
    {
        image: destination11,
        name: 'Norway',
        places: '4 places'
    },
    {
        image: destination12,
        name: 'Netherland',
        places: '4 places'
    }
]

const Destinations = () => {
    return (
        <>
            <Container>
                <h2 className="text-center destination-card-top-title">Popular Tourist Destinations</h2>
                <Row>
                    {
                        destinationList.map((destination, index) => (
                            <Col md={3} sm={6} key={index} className="mb-2 mt-2">
                                <Card className="destination-position-relative">
                                    <Card.Img className='destination-card-img-top' variant="top" src={destination.image} />
                                    <div className="destination-card-text-overlay">
                                        <p className="destination-text">{destination.name}</p>
                                        <p className="destination-place-text">{destination.places}</p>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Destinations