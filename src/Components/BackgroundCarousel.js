import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/BackgroundCarousel.css';
import travel1 from '../Assets/Images/carousel1.jpeg';
import travel2 from '../Assets/Images/carousel2.jpg';
import travel3 from '../Assets/Images/carousel3.jpg';
import travel4 from '../Assets/Images/carousel4.jpg';


export const BackgroundCarousel = () => {

    const travelText = {
        heading: "Let's Discover The World Together",
        title: 'Immersed in culture, embraced by tradition'
    }
    return (
        <Carousel className="background-carousel" interval={3000} autoPlay={true} controls={true} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel1}
                    alt=""
                />
                <Carousel.Caption className='carousel-caption'>
                    <h3>{travelText.heading}</h3>
                    <p>
                        {travelText.title}
                    </p>
                    <Link to="/destinations">
                        <Button variant="dark" size='sm'>Explore More</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel2}
                    alt=""
                />
                <Carousel.Caption className='carousel-caption'>
                    <h3>{travelText.heading}</h3>
                    <p>
                        {travelText.title}
                    </p>
                    <Link to="/destinations">
                        <Button variant="dark" size='sm'>Explore More</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel3}
                    alt=""
                />
                <Carousel.Caption className='carousel-caption'>
                    <h3>{travelText.heading}</h3>
                    <p>
                        {travelText.title}
                    </p>
                    <Link to="/destinations">
                        <Button variant="dark" size='sm'>Explore More</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={travel4}
                    alt=""
                />
                <Carousel.Caption className='carousel-caption'>
                    <h3>{travelText.heading}</h3>
                    <p>
                        {travelText.title}
                    </p>
                    <Link to="/destinations">
                        <Button variant="dark" size='sm'>Explore More</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
