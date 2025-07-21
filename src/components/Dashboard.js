// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsageGraph from './UsageGraph';
import Alerts from './Alerts';

function Dashboard() {
  const [units, setUnits] = useState([]);
  const [average, setAverage] = useState(0);
  const [totalUnits, setTotalUnits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/units', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUnits(res.data.units);
      setTotalUnits(res.data.totalUnits);
      setAverage(res.data.average);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to Your Smart Meter Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Units</h5>
              <p className="card-text fs-3">{totalUnits}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Average Daily Usage</h5>
              <p className="card-text fs-3">{average.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <Alerts totalUnits={totalUnits} />
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Usage History</h5>
          <UsageGraph units={units} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
