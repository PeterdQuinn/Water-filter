import React from 'react';

function SolarPanel(): JSX.Element {
  const solarOutput = 200; // Example solar output in watts
  const efficiency = 20; // Example efficiency in percent

  const effectiveOutput = solarOutput * (efficiency / 100); // Calculate effective output in watts

  return (
    <div className="SolarPanel">
      <h2>Solar Panel Information</h2>
      <p>Solar Output: {solarOutput} watts</p>
      <p>Efficiency: {efficiency}%</p>
      <p>Effective Output: {effectiveOutput} watts</p>
    </div>
  );
}

export default SolarPanel;
