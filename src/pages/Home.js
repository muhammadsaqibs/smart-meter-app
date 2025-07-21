import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // optional for custom styling
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1 className="display-4 fw-bold text-primary">🔌 Smart Meter Dashboard</h1>
      <p className="lead mb-4">Monitor your electricity usage effortlessly and in real-time.</p>

      <Row className="justify-content-center mb-5">
        <Col md={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="mb-3">Already Registered?</Card.Title>
              <Link to="/login">
                <Button variant="primary" size="lg" className="w-100">Login</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="mb-3">New User?</Card.Title>
              <Link to="/register">
                <Button variant="success" size="lg" className="w-100">Register</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr />

      <section className="text-muted">
        <h4 className="mb-3">Features:</h4>
        <ul className="list-unstyled">
          <li>⚡ Real-time electricity usage tracking</li>
          <li>📈 Usage analytics and graphs</li>
          <li>🔔 Alerts when usage crosses 190 units</li>
          <li>🔐 Secure login via CNIC and Meter Number</li>
        </ul>
      </section>
    </Container>
  );
}

export default Home;
