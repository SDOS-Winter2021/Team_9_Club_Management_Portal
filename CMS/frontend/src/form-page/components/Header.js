import React, { Component }  from 'react';
import {Flex, 
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';

import Head from 'next/head';

const Header = () => {
    return (
        
        <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={0}
        bg={'gray.700'}
         >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold" >
           Club Name
          </Text>
        </Flex>
        <Text color="gray.500">1 Liner</Text>
      </Flex>
    )
}

export default Header