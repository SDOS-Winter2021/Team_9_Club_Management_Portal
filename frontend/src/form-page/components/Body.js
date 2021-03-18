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

import eventOut from "./eventOut"

export default function Body (){
  const [name, setname] = React.useState("");
  const [datetime, setdatetime] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [prereq, setprereq] = React.useState("");
  const [prizemoney, setprizemoney] = React.useState("");
  const [addinfo, setaddinfo] = React.useState("");
  const [poster, setposter] = React.useState([]);

  const handleSubmit = async(event) => {
    //var event_info = {
    //  'Name': name,
    //  'Date-Time': datetime,
    //  'Location': location,
    //  'Description': description,
    //  'Pre-Requisites': prereq,
    //  'Prize Money': prizemoney,
    //  'Additional Information': addinfo,
    //  'Poster/Image': poster,
    //}
    var event_info = new FormData();
      event_info.append('Name', name);
      event_info.append('Date-Time', datetime);
      event_info.append('Location', location);
      event_info.append('Description', description);
      event_info.append('Pre-Requisites', prereq);
      event_info.append('Prize Money', prizemoney);
      event_info.append('Additional Information', addinfo);
      event_info.append('Poster', poster);

      let eResponse  = await eventOut(event_info)
      console.log(eResponse);
    }
      
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
              <Input type="text" value={name} onChange={e => setname(e.target.value)} required/>
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date-Time</FormLabel>
              <Input type="datetime-local" value={datetime} onChange={e => setdatetime(e.target.value)} required/>
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input type="text" value={location} onChange={e => setlocation(e.target.value)} required/>
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input type="text" value={description} onChange={e => setdescription(e.target.value)} required/>
            </FormControl>
            <FormControl id="prereqs">
              <FormLabel>Pre-Requisites</FormLabel>
              <Input type="text" value={prereq} onChange={e => setprereq(e.target.value)}/>
            </FormControl>
            <FormControl id="prizemoney">
              <FormLabel>Prize Money</FormLabel>
              <Input type="number" value={prizemoney} onChange={e => setprizemoney(e.target.value)}/>
            </FormControl>
            <FormControl id="additional-info">
              <FormLabel>Additional Information</FormLabel>
              <Input type="text" value={addinfo} onChange={e => setaddinfo(e.target.value)}/>
            </FormControl>
            <FormControl id="Poster">
              <FormLabel>Poster/Image</FormLabel>
              <Input type="file" onChange={e => setposter(e.target.files[0])}/>
            </FormControl>
            <Stack spacing={10}>
              <Button bg={'blue.400'} color={'white'} _hover={{   bg: 'blue.500', }} onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}