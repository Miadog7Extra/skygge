import React, { useState, useEffect } from 'react';
import * as SunCalc from 'suncalc';

const SunPosition: React.FC = () => {
  // Should get lat, long from resturant.
  const [sunPosition, setSunPosition] = useState({ altitude: 0, azimuth: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const currentTime = new Date();
    setTime(currentTime)

    const position = SunCalc.getPosition(time, 59.95610151740369, 10.725401777113094);
    
    const altitude = position.altitude * (180 / Math.PI);
    const azimuth = (position.azimuth * (180 / Math.PI) + 180) % 360;
    
    setSunPosition({ altitude, azimuth });
  }, []);

  return (
    <div>
      <h2>Sun Position</h2>
      <p>Time: {time.toString()}</p>
      <p>Altitude: {sunPosition.altitude.toFixed(2)}°</p>
      <p>Azimuth: {sunPosition.azimuth.toFixed(2)}°</p>
    </div>
  );
};

export default SunPosition;
