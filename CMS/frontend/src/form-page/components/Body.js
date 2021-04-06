import React, { Component, ReactNode, View } from "react";
import {
  Flex,
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
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

import eventOut from "./eventOut";

export default function Body() {
  const [name, setname] = React.useState("");
  const [datetime, setdatetime] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [poster, setposter] = React.useState([]);

  const handleSubmit = async (event) => {
    var data = {
      name: name,
      date_time: datetime,
      location: location,
      description: description,
      poster: poster,
      approved: "False",
      club_name: "Peeyush's club",
    };
    var event_info = new FormData();
    //data = JSON.stringify(data); //dunno about this
    event_info.append("request", data);

    console.log(name);
    let eResponse = await eventOut(event_info);
    console.log(eResponse);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Event Proposal Form</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Add New Event
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="date">
              <FormLabel>Date-Time</FormLabel>
              <Input
                type="datetime-local"
                value={datetime}
                onChange={(e) => setdatetime(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Textarea
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="Poster">
              <FormLabel>Poster/Image</FormLabel>
              <Input
                type="file"
                value={poster}
                onChange={(e) => setposter(e.target.files[0])}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
