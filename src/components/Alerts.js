// client/src/components/Alerts.js
import React from 'react';

function Alerts({ totalUnits }) {
  if (!totalUnits) return null;

  return (
    <div className="alerts">
      {totalUnits >= 190 && totalUnits < 250 && (
        <div className="alert high">
          ⚠️ High Usage Alert: You've used over 190 units!
        </div>
      )}
      {totalUnits >= 250 && (
        <div className="alert danger">
          🚨 Critical Alert: Usage has exceeded 250 units. Consider reducing usage!
        </div>
      )}
    </div>
  );
}

export default Alerts;
