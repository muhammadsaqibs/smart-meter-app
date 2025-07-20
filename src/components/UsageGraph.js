// client/src/components/UsageGraph.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

function UsageGraph({ data }) {
  // Format data (e.g. only last 7 days)
  const graphData = data.map(unit => ({
    date: new Date(unit.date).toLocaleDateString(),
    value: unit.value
  }));

  return (
    <div className="graph-container">
      <h3>Electricity Usage Graph</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UsageGraph;
