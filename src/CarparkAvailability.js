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
	Heading,
} from '@chakra-ui/react';
import axios from 'axios';

function CarparkAvailability() {
	const [timestamp, setTimestamp] = useState(new Date().toISOString());
	const [carparkData, setCarparkData] = useState([]);
	const readableTimestamp = new Date(timestamp).toLocaleString();
	const [search, setSearch] = useState('');
	const [filteredCarparkData, setFilteredCarparkData] = useState([]); // store the filtered carpark

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

	const handleTimestampChange = (event) => {
		setTimestamp(event.target.value);
	};

	const handleSearchChange = (e) => {
		const text = e.target.value;

		// filter carparkData by carpark number
		setFilteredCarparkData(
			carparkData
				.filter((carpark) => carpark.carpark_number.includes(text))
				.map((carpark) => {
					// edit the data as needed here
					return {
						...carpark,
						// add or modify properties as needed
						carpark_name: `Edited ${carpark.carpark_name}`,
					};
				})
		);

		// set search to text
		setSearch(text);
	};

	return (
		<Flex justifyContent='center' flexDirection='column' alignItems='center'>
			<Heading size='lg' pt='5' pb='5'>
				Carpark Availability ({readableTimestamp})
			</Heading>
			<Flex>
				<Flex pb='5' w='350px' flexDirection='column' justifyContent='center'>
					<Heading size='sm' pb='2'>
						Select Date and Time
					</Heading>
					<Input
						name='timestamp'
						variant='filled'
						type='datetime-local'
						value={timestamp}
						onChange={handleTimestampChange}
						width='300px'
						border='1px solid white'
					/>

					<Heading size='sm' pt='5' pb='2'>
						Search
					</Heading>
					<Input
						name='searchbox'
						placeholder='Search for Carpark Number'
						type='text'
						value={search}
						width='300px'
						border='1px solid white'
						onChange={handleSearchChange}
					/>
				</Flex>
				<Box
					overflowY='auto'
					maxHeight='300px'
					maxWidth='500px'
					borderRadius='15'
				>
					<Table variant='simple' backgroundColor='#14213d'>
						<Thead position='sticky' top='0' background='#598392'>
							<Tr>
								<Th color='white'>Carpark No</Th>
								<Th color='white'>Lot Type</Th>
								<Th color='white'>Total Lots</Th>
								<Th color='white'>Lots Available</Th>
							</Tr>
						</Thead>
						<Tbody>
							{search.length === 0
								? carparkData.map((carpark, index) => (
										<Tr key={index}>
											<Td>{carpark.carpark_number}</Td>
											<Td>{carpark.carpark_info[0].lot_type}</Td>
											<Td>{carpark.carpark_info[0].total_lots}</Td>
											<Td>{carpark.carpark_info[0].lots_available}</Td>
										</Tr>
								  ))
								: filteredCarparkData.map((carpark, index) => (
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
								<Th color='white'>Carpark</Th>
								<Th color='white'>Lot Type</Th>
								<Th color='white'>Total Lots</Th>
								<Th color='white'>Lots Available</Th>
							</Tr>
						</Tfoot>
					</Table>
				</Box>
			</Flex>
		</Flex>
	);
}

export default CarparkAvailability;
