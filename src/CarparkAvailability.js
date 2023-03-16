import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarparkAvailability({ timestamp }) {
  const [carparkData, setCarparkData] = useState([]);
  useEffect(() => {
    const encodedTimestamp = encodeURIComponent(timestamp); // URL encode timestamp
    const apiUrl = `https://api.data.gov.sg/v1/transport/carpark-availability?date_time=${encodedTimestamp}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCarparkData(response.data.items[0].carpark_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [timestamp]);

  return (
    <div>
      <h1>Carpark Availability ({timestamp})</h1>
      <table border='1'>
        <thead>
          <tr>
            <th>Carpark</th>
            <th>Lot Type</th>
            <th>Total Lots</th>
            <th>Lots Available</th>
          </tr>
        </thead>
        <tbody>
          {carparkData.map((carpark, index) => (
            <tr key={index}>
              <td>{carpark.carpark_number}</td>
              <td>{carpark.carpark_info[0].lot_type}</td>
              <td>{carpark.carpark_info[0].total_lots}</td>
              <td>{carpark.carpark_info[0].lots_available}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarparkAvailability;
