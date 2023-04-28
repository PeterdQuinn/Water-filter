import React, { useState, useEffect } from 'react';

function Sensors(): JSX.Element {
  const [soilMoisture, setSoilMoisture] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);

  useEffect(() => {
    // Simulate sensor data
    const interval = setInterval(() => {
      setSoilMoisture(Math.floor(Math.random() * 100));
      setTemperature(Math.floor(Math.random() * 50));
      setHumidity(Math.floor(Math.random() * 100));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Sensors">
      <h2>Current Sensor Data</h2>
      <p>Soil Moisture: {soilMoisture}%</p>
      <p>Temperature: {temperature}°F</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
}

export default Sensors;
