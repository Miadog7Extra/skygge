import React, { useState, useEffect } from 'react';
import * as SunCalc from 'suncalc';

const SunPosition: React.FC = () => {
  const [sunPosition, setSunPosition] = useState({ altitude: 0, azimuth: 0 });

  useEffect(() => {
    const time = new Date("2024-10-07T15:00:00");
    const position = SunCalc.getPosition(time, 40.7128, -74.0060);
    
    const altitude = position.altitude * (180 / Math.PI);
    const azimuth = position.azimuth * (180 / Math.PI);
    
    setSunPosition({ altitude, azimuth });
  }, []);

  return (
    <div>
      <h2>Sun Position</h2>
      <p>Altitude: {sunPosition.altitude.toFixed(2)}°</p>
      <p>Azimuth: {sunPosition.azimuth.toFixed(2)}°</p>
    </div>
  );
};

export default SunPosition;
