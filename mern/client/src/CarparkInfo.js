import React, { useState, useEffect } from 'react';
import {
	Flex,
	Box,
	Alert,
	AlertIcon,
	AlertTitle,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Heading,
} from '@chakra-ui/react';

function CarparkInfo() {
	const [records, setRecords] = useState([]);
	const [error, setError] = useState(null);

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
		<Flex flexDirection='column'>
			<Heading align='center' size='lg' pb='3'>
				Carpark Information
			</Heading>
			<Box
				overflowY='auto'
				maxHeight='400px'
				maxWidth='1000px'
				borderRadius='15'
			>
				<Table variant='simple' backgroundColor='#14213d'>
					<Thead background='#598392' position='sticky' top='0'>
						<Tr>
							<Th color='white'>Carpark Number</Th>
							<Th color='white'>Carpark Address</Th>
							<Th color='white'>Free Parking</Th>
							<Th color='white'>Night Parking</Th>
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
			</Box>
		</Flex>
	);
}
export default CarparkInfo;
