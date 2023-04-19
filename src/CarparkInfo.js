import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

function CarparkInfo() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch('http://localhost:5000/result/records');
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        setError(error.message);
      }
    }
    getRecords();
  }, []);
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Carpark Number</Th>
          <Th>Carpark Address</Th>
          <Th>Free Parking</Th>
          <Th>Night Parking</Th>
        </Tr>
      </Thead>
      <Tbody>
        {error ? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        ) : (
          records.map((carPark) => (
            <Tr key={carPark._id}>
              <Td>{carPark.car_park_no}</Td>
              <Td>{carPark.address}</Td>
              <Td>{carPark.free_parking}</Td>
              <Td>{carPark.night_parking}</Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  );
}
export default CarparkInfo;
