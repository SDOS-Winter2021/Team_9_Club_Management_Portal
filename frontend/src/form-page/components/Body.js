import React, { Component,ReactNode ,View}  from 'react';
import {Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const Body = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Event Proposal Form</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            What have you been cooking🍜
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="time">
              <FormLabel>Time</FormLabel>
              <Input type="time" />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="prereqs">
              <FormLabel>Pre-Requisites</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="prizemoney">
              <FormLabel>Prize Money</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="additional-info">
              <FormLabel>Additional Information</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Body