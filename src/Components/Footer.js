import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Styles/footer.css'
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-section">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>123 Travel Lane</li>
                            <li>Tourist City, TX 12345</li>
                            <li>Email: info@traveltours.com</li>
                            <li>Phone: (123) 456-7890</li>
                        </ul>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h5>Quick Links</h5>
                        <Nav className="flex-column footer-nav">
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <ul className='d-flex'>
                                <li><FaFacebook /></li>
                                <li><FaTwitter /></li>
                                <li><FaInstagram /></li>
                                <li><FaLinkedin /></li>
                            </ul>
                        </div>
                        <h5>Newsletter</h5>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col className="text-center">
                        <p>&copy; 2024 Travel & Tours. All rights reserved.</p>
                        <Nav>
                            <Nav.Link>Privacy Policy</Nav.Link>
                            <Nav.Link>Terms of Service</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
