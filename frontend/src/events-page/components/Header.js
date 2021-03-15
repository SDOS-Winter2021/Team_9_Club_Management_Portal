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
import {
  IoHomeOutline
} from 'react-icons/io5';
import Head from 'next/head';

const Header = () => {
    return (
        
      <>
      <Flex flexDirection="row" mt={0} bg={'gray.700'} justifyContent="center">
      <Icon as={IoHomeOutline} color={'gray.200'} w={5} h={5} justifySelf="flex-end"/>
      <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={0} bg={'gray.700'}>
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Text fontSize="3xl" fontWeight="bold" >
         Event Name
        </Text>
      </Flex>
      <Text color="gray.500">Club Name</Text>
    </Flex>
    </Flex>
    </>
    )
}

export default Header