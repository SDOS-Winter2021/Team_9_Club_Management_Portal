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
import history from './../../history';

const Header = (Info) => {
    return (
        <>
        {console.log(Info)}
        <Flex flexDirection="row" mt={0} bg={'gray.700'} justifyContent="center">
        <Icon as={IoHomeOutline} color={'gray.200'} w={5} h={5} justifySelf="flex-end" onClick={()=>{history.push(`/`)}}/>
        <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={0} bg={'gray.700'}>
        <Flex display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold" >
           {Info.Info.name}
          </Text>
        </Flex>
      </Flex>
      </Flex>
      </>
    )
}

export default Header