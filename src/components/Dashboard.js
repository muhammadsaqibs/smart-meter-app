// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import UsageGraph from './UsageGraph';
import Alerts from './Alerts';

function Dashboard() {
  const [units, setUnits] = useState([]);
  const [average, setAverage] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // 1. Get user profile (includes meter number)
        const profileRes = await axios.get('/auth/profile', config);
        setUser(profileRes.data);

        // 2. Fetch units for this user's meter number
        const unitRes = await axios.get(`/units/user/${profileRes.data._id}`, config);
        const unitData = unitRes.data;

        setUnits(unitData);

        const total = unitData.reduce((acc, unit) => acc + unit.value, 0);
        const avg = unitData.length > 0 ? total / unitData.length : 0;

        setTotalUnits(total);
        setAverage(avg.toFixed(2));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name || 'User'}</h2>
      <p><strong>Meter No:</strong> {user?.meterNumber}</p>
      <p><strong>CNIC:</strong> {user?.cnic}</p>

      <h3>Total Units: {totalUnits}</h3>
      <h4>Average Daily Usage: {average}</h4>

      <UsageGraph data={units} />
      <Alerts totalUnits={totalUnits} />
    </div>
  );
}

export default Dashboard;
