import React, { useState, useEffect } from 'react';

//const Buildings: React.FC = () => {
    // fetch lat long from resturant
    // fetch azimuth, altitude from sunPosition
    const long = 59.95610151740369 
    const lat = 10.725401777113094
    const azi = 199.22
    const alti = 21.76

    // random building at 10 meters in hight and 5 meters away
    // this state should be occupied by the "worst" building for direct sun.
    // must add trees, mountains, hills also.
    //const [building, setBuilding] = useState({height: 10, length: 5})



//};


// Starter med geopunkte og azimuth, altitude
// etabler en linje fra geopunktet mot solen basert på azi og alti
// start fra geopunktet og fortsett mot solen
// hvis en byggning treffer linjen, sjekk om byggningens høyde er høyere enn solen på det punket (basert på mitt geopunkt)
// bygning * tan(altitude)??
// stopp når første hinder er funnet.
// fortsett til ??, kommer kanskje an på sol altitude?