import{Flex,  
    Box,
    Image,
    Badge,
    Text,
    Button,
    Icon,useColorModeValue,
    Stack,} from '@chakra-ui/react'


import React from 'react'
import GoogleButton from "./GLogout"

const Header = () => {
    return (
      <>
        <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={4}>
          <Flex display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Text fontSize="3xl" fontWeight="bold">
              ⚡️Club Management Portal
            </Text>
            <Badge variant="subtle" variantColor="pink" ml={1}>
              BETA
            </Badge>
          </Flex>
        <Text color="gray.500">Sup</Text>
       </Flex>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text>Welcome, ABC</Text> 
        <GoogleButton></GoogleButton>
        </Flex>
      </Box>
      </>
    )
}

export default Header
