import React from 'react';
import CarparkAvailability from './CarparkAvailability';
import CarparkInfo from './CarparkInfo';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex
      flexDirection='column'
      minH='100vh'
      minW='100vw'
      width='max'
      height='max'
      margin='auto'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#01161e'>
      <Flex pb='20'>
        <CarparkAvailability />
      </Flex>
      <Flex>
        <CarparkInfo />
      </Flex>
    </Flex>
  );
}

export default App;
