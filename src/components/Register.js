import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import '../styles/auth.css';

function Register() {
  const [form, setForm] = useState({
    cnic: '',
    meterNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      const res = await axios.post('/api/auth/register', {
        cnic: form.cnic,
        meterNumber: form.meterNumber,
        password: form.password
      });
      setSuccess('Registration successful. Please log in.');
      setForm({ cnic: '', meterNumber: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Card className="auth-card">
      <Card.Body>
        <h3 className="text-center mb-4">Register</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>CNIC</Form.Label>
            <Form.Control
              type="text"
              name="cnic"
              value={form.cnic}
              onChange={handleChange}
              placeholder="Enter your CNIC"
              required
              maxLength={13}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Meter Number</Form.Label>
            <Form.Control
              type="text"
              name="meterNumber"
              value={form.meterNumber}
              onChange={handleChange}
              placeholder="Enter your Meter Number"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
