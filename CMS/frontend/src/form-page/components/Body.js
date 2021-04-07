import React, { Component, ReactNode, View, useEffect } from "react";
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

class Body extends React.Component {

  state = {
    name: "",
    datetime: "",
    location: "",
    description: "",
    poster: "",
    holder_name: "",
    holder_datetime: "",
    holder_location: "",
    holder_description: "",
  };

  componentDidMount() {
    console.log(sessionStorage.getItem("event_data_name"))
    if (sessionStorage.getItem("event_data_name") == sessionStorage.getItem("event_data_name")) {
      this.setState({holder_name : sessionStorage.getItem("event_data_name")})
      this.setState({holder_datetime : sessionStorage.getItem("event_data_dt")})
      this.setState({holder_description : sessionStorage.getItem("event_data_desc")})
      this.setState({holder_location : sessionStorage.getItem("event_data_loc")})
      sessionStorage.removeItem("event_data_name")
      sessionStorage.removeItem("event_data_dt")
      sessionStorage.removeItem("event_data_desc")
      sessionStorage.removeItem("event_data_loc")
    }}
  
    handleSubmit(event){
      var data = {
        name: this.state.name,
        date_time: this.state.datetime,
        location: this.state.location,
        description: this.state.description,
        poster: this.state.poster,
        approved: "False",
        club_name: "Peeyush's club",
      };
      var event_info = new FormData();
      //data = JSON.stringify(data); //dunno about this
      event_info.append("request", data);
  
      console.log(this.name);
      let eResponse = eventOut(event_info);
      console.log(eResponse);
    };
  
  render() {
    return(
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}
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
            bg={"white"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({name: e.target.value})}
                  placeholder={this.state.holder_name}
                  required
                  />
              </FormControl>
              <FormControl id="date">
                <FormLabel>Date-Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={this.state.datetime}
                  onChange={(e) => this.setState({datetime: e.target.value})}
                  placeholder={this.state.holder_datetime}
                  required
                  />
              </FormControl>
              <FormControl id="location">
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  value={this.state.location}
                  onChange={(e) => this.setState({location: e.target.value})}
                  placeholder={this.state.holder_location}
                  required
                  />
              </FormControl>
              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  value={this.state.description}
                  onChange={(e) => this.setState({description: e.target.value})}
                  placeholder={this.state.holder_description}
                  required
                  />
              </FormControl>
              <FormControl id="Poster">
                <FormLabel>Poster/Image</FormLabel>
                <Input
                  type="file"
                  value={this.state.poster}
                  placeholder=""
                  onChange={(e) => this.setState({poster: e.target.files[0]})}
                />
              </FormControl>s
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )}
}

export default (Body);