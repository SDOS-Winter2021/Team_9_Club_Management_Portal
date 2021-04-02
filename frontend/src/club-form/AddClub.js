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
} from "@chakra-ui/react";
import axios from "axios";

export default function Body() {
  const [name, setname] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [coord1, setcoord1] = React.useState("");
  const [coord2, setcoord2] = React.useState("");
  const [coord3, setcoord3] = React.useState("");
  const [coord1email, setcoord1email] = React.useState("");
  const [coord2email, setcoord2email] = React.useState("");
  const [coord3email, setcoord3email] = React.useState("");
  const [fblink, setfblink] = React.useState("");
  const [iglink, setiglink] = React.useState("");
  const [weblink, setweblink] = React.useState("");

  const clubOut = async (request) => {
    console.log("Sending Post request to add club");
    console.log(request);
    let res = await axios.post("http://127.0.0.1:8000/api/clubinfo", request, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    return await res.status;
  };

  const handleSubmit = async (event) => {
    var data = {
      name: name,
      description: description,
      coord1: coord1,
      coord2: coord2,
      coord3: coord3,
      coord1email: coord1email,
      coord2email: coord2email,
      coord3email: coord3email,
      fblink: fblink,
      iglink: iglink,
      weblink: weblink,
    };
    var club_info = new FormData();
    data = JSON.stringify(data);
    console.log(data);
    //event_info.append("request", data);
    let eResponse = await clubOut(data);
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
          <Heading fontSize={"4xl"}>Add Club Form</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Add Club Details
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
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="coord1">
              <FormLabel>Name of Co-ordinator 1</FormLabel>
              <Input
                type="text"
                value={coord1}
                onChange={(e) => setcoord1(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord2">
              <FormLabel>Name of Co-ordinator 2</FormLabel>
              <Input
                type="text"
                value={coord2}
                onChange={(e) => setcoord2(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord3">
              <FormLabel>Name of Co-ordinator 3</FormLabel>
              <Input
                type="text"
                value={coord3}
                onChange={(e) => setcoord3(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord1email">
              <FormLabel>Email ID of Co-ordinator 1</FormLabel>
              <Input
                type="text"
                value={coord1email}
                onChange={(e) => setcoord1email(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord2email">
              <FormLabel>Email ID of Co-ordinator 2</FormLabel>
              <Input
                type="text"
                value={coord2email}
                onChange={(e) => setcoord2email(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord3email">
              <FormLabel>Email ID of Co-ordinator 3</FormLabel>
              <Input
                type="text"
                value={coord3email}
                onChange={(e) => setcoord3email(e.target.value)}
              />
            </FormControl>
            <FormControl id="fblink">
              <FormLabel>FB Link</FormLabel>
              <Input
                type="text"
                value={fblink}
                onChange={(e) => setfblink(e.target.value)}
              />
            </FormControl>
            <FormControl id="iglink">
              <FormLabel>Instagram Link</FormLabel>
              <Input
                type="text"
                value={iglink}
                onChange={(e) => setiglink(e.target.value)}
              />
            </FormControl>
            <FormControl id="weblink">
              <FormLabel>Website Link</FormLabel>
              <Input type="text" onChange={(e) => setweblink(e.target.value)} />
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
