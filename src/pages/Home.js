// client/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to SmartMeter</h1>
      <p>Track your electricity usage, get alerts, and monitor your bill — all in one place.</p>
      <div className="auth-links">
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Home;
