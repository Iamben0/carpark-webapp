import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

function CarparkInfo() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // const encodedQuery = encodeURIComponent(query);
    const apiUrl = `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=${query}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setQuery(response.data.results.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  // const handleQueryChange = (event) => {
  //   setQuery(event.target.value);
  // };

  return (
    <Flex
      justifyContent='center'
      flexDirection='column'
      alignItems='center'>
      <Flex
        justifyContent='center'
        fontSize='lg'
        pt='5'></Flex>
      <Flex
        flexDir='column'
        pb='5'>
        {/* <Input
          placeholder='Search'
          width='auto'
          variant='filled'
          value={query}
          onChange={handleQueryChange}
        /> */}
      </Flex>
      <Box
        overflowY='auto'
        maxHeight='300px'
        maxWidth='500px'>
        <Table colorScheme='telegram'>
          <Thead
            position='sticky'
            top='0'
            background='teal'>
            <Tr>
              <Th>Carpark No</Th>
              <Th>Lot Type</Th>
              <Th>Total Lots</Th>
              <Th>Lots Available</Th>
            </Tr>
          </Thead>
          <Tbody>
            {carparkData.map((carpark, index) => (
              <Tr key={index}>
                <Td>{carpark.carpark_number}</Td>
                <Td>{carpark.carpark_info[0].lot_type}</Td>
                <Td>{carpark.carpark_info[0].total_lots}</Td>
                <Td>{carpark.carpark_info[0].lots_available}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Carpark</Th>
              <Th>Lot Type</Th>
              <Th>Total Lots</Th>
              <Th>Lots Available</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Flex>
  );
}

export default CarparkInfo;