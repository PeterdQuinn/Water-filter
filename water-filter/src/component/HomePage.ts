import React from 'react';
import GraphsAndCharts from '../components/GraphsAndCharts';
import Sensors from '../components/Sensors';
import SolarPanel from '../components/SolarPanel';
import CallToAction from '../components/CallToAction';

function HomePage(): JSX.Element {
  return (
    <div className="HomePage">
      <h1>Welcome to the Solar-Powered Watering System!</h1>
      <SolarPanel />
      <GraphsAndCharts />
      <Sensors />
      <CallToAction />
    </div>
  );
}

export default HomePage;
