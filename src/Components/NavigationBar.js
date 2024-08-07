import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGlobe } from 'react-icons/fa';
import '../Styles/NavigationBar.css';

export const NavigationBar = () => {
    return (
        <Navbar bg="dark" fixed='top' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <FaGlobe style={{ marginRight: '10px' }} />
                    Travel & Tour</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

