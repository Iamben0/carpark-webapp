import React from 'react';
import CarparkAvailability from './CarparkAvailability';

function App() {
  const timestamp = '2023-03-16T20:18:11'; // replace with your desired timestamp

  return (
    <>
      <CarparkAvailability timestamp={timestamp} />
      {/* <CarparkAvailability /> */}
    </>
  );
}

export default App;
