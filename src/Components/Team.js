import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import team1 from '../Assets/Images/team1.jpg';
import team2 from '../Assets/Images/team2.jpg';
import team3 from '../Assets/Images/team3.jpg';
import team4 from '../Assets/Images/team4.jpg';
import '../Styles/team.css';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & Chief Executive Officer',
        image: team1,
        description: 'John is the visionary behind our company.',
    },
    {
        name: 'James Taylor',
        role: 'Chief Technology Officer',
        image: team2,
        description: 'James leads our technology strategy.',
    },
    {
        name: 'Alice Johnson',
        role: 'Chief Financial Officer',
        image: team3,
        description: 'Alice manages our finances with precision.',
    },
    {
        name: 'Amelia Edwards',
        role: 'Tour Operational Executive',
        image: team4,
        description: 'Amelia Manages all aspects of tour operations to ensure seamless travel',
    },
    // Add more team members as needed
];

const Team = () => {
    return (
        <Container>
            <h2 className="text-center mb-2 mt-4">Our Team</h2>
            <h5 className="text-center mb-4">An experienced team of people passionate about travelling</h5>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={3} sm={6} key={index} className="mb-4">
                        <Card className="team-member-card">
                            <div className="team-member-img-wrapper">
                                <Card.Img className="team-member-img" variant="top" src={member.image} />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Team