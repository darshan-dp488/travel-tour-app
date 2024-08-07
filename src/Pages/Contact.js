import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import backgroundImage from '../Assets/Images/contactbackground.jpg';
import '../Styles/contact.css';

const Contact = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        height: '500px',
    };

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true); setTimeout(() => {
            setShowAlert(false);
        }, 5000);
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <>
            <div style={sectionStyle}>
                <Container className="text-center d-flex justify-content-center align-items-center">
                    <div className="text-content">
                        <h2>Want To Know More?</h2>
                        <h2>Reach  out to us!</h2>
                        <Button variant="primary" size='sm'>Contact Us</Button>
                    </div>
                </Container>
            </div>
            <div className="contact-us-bg">
                <Container className="contact-container my-5">
                    <Row>
                        <Col md={6}>
                            <h2>Send a message</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label className='mt-2'>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label className='mt-2'>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Your message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button className='mt-4' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            {showAlert && <Alert variant="success" className="mt-3">Thank you for contacting us! We will get back to you soon.</Alert>}
                        </Col>

                        <Col md={6}>
                            <h2>Contact Us</h2>
                            <p><strong>Address:</strong> 123 Travel Lane, Wanderlust City, WL 45678</p>
                            <p><strong>Phone:</strong> +123 456 7890</p>
                            <p><strong>Email:</strong> support@travelwebsite.com</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact