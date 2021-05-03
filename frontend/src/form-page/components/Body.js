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
import history from "../../history";
import eventPost from "./eventOut";
import axios from "axios";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.form_type = this.props.info.type;
    this.state = {
      club_name: "",
      name: "",
      datetime: "",
      datetime_end: "",
      location: "",
      description: "",
      poster: "",
      web_link: "",
      holder_name: "",
      holder_datetime: "",
      holder_location: "",
      holder_description: "",
    };
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("event_data_desc"));
    if (
      sessionStorage.getItem("event_data_name") ==
      sessionStorage.getItem("event_data_name")
    ) {
      this.setState({ holder_name: sessionStorage.getItem("event_data_name") });
      this.setState({ name: sessionStorage.getItem("event_data_name") });
      this.setState({
        holder_datetime: sessionStorage.getItem("event_data_dt"),
      });
      this.setState({
        datetime: sessionStorage.getItem("event_data_dt"),
      });
      this.setState({
        holder_description: sessionStorage.getItem("event_data_desc"),
      });
      this.setState({
        description: sessionStorage.getItem("event_data_desc"),
      });
      this.setState({
        holder_location: sessionStorage.getItem("event_data_loc"),
      });
      this.setState({
        location: sessionStorage.getItem("event_data_loc"),
      });
      this.setState({
        club_name: sessionStorage.getItem("event_data_club_name"),
      });
      sessionStorage.removeItem("event_data_name");
      sessionStorage.removeItem("event_data_dt");
      sessionStorage.removeItem("event_data_desc");
      sessionStorage.removeItem("event_data_loc");
    };

    if (sessionStorage.getItem("group") == "Club_Coordinator") {
      this.setState({ club_email: sessionStorage.getItem("email") });
    } else {
      history.push("/home");
      location.reload();
    }
  }

  eventPut = async (request) => {
    console.log("allo sending info");
    console.log(this.props.info.idf);
    let res = await axios.put(
      `http://localhost:8000/api/clubs/${this.props.info.idf}`,
      request,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": csrftoken,
        },
      }
    );
    console.log(res);
    return await res.status;
  };

  handleSubmitput(event) {
    var data = {
      club_name: sessionStorage.getItem("event_data_club_name"),
      name: this.state.name,
      date_time: this.state.datetime,
      end_date_time: this.state.datetime_end,
      location: this.state.location,
      description: this.state.description,
      web_link: this.state.web_link,
      //poster: this.state.poster,
      club_email: this.state.club_email,
      approved: "False",
    };
    console.log(data);
    if (data["name"]=="" || data["date_time"]=="" || data["end_date_time"]=="" || data["location"]=="" || data["description"]==""){
      alert("The following fields are required - Name, Start Date Time, End Date Time, Location, Description");
      return 0;
    }
    else{
    console.log("IN SUBMIT PUT");
    var event_info = new FormData();
    data = JSON.stringify(data); //dunno about this
    event_info.append("request", data);
    event_info.append("poster", this.state.poster);
    //console.log(this.name);
    let eResponse = this.eventPut(event_info);
    console.log(eResponse);
    return 1;
  }
}

  handleSubmitpost(event) {
    var data = {
      club_name: this.props.info.idf,
      name: this.state.name,
      date_time: this.state.datetime,
      end_date_time: this.state.datetime_end,
      location: this.state.location,
      description: this.state.description,
      web_link: this.state.web_link,
      //poster: this.state.poster,
      club_email: this.state.club_email,
      approved: "False",
    };
    console.log(data);
    if (data["name"]=="" || data["date_time"]=="" || data["end_date_time"]=="" || data["location"]=="" || data["description"]==""){
      alert("The following fields are required - Name, Start Date Time, End Date Time, Location, Description");
      return 0;
    }
    else{
    var event_info = new FormData();
    data = JSON.stringify(data); //dunno about this
    event_info.append("request", data);
    event_info.append("poster", this.state.poster);
    //console.log(this.name);
    let eResponse = eventPost(event_info);
    console.log(eResponse);
    return 1;
    }
  }
  render() {
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign="center">Event Proposal Form</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Add New Event
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder={this.state.holder_name}
                />
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>Start Date-Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={this.state.datetime}
                  onChange={(e) => this.setState({ datetime: e.target.value })}
                />
              </FormControl>
              <FormControl id="date_end" isRequired>
                <FormLabel>End Date-Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={this.state.datetime_end}
                  onChange={(e) =>
                    this.setState({ datetime_end: e.target.value })
                  }
                  required
                />
              </FormControl>
              <FormControl id="location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  value={this.state.location}
                  onChange={(e) =>
                    this.setState({ location: e.target.value }, () => {
                      // console.log(this.state.location);
                      // console.log("IN LOCATION FIELD");
                    })
                  }
                  placeholder={this.state.holder_location}
                  required
                />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  value={this.state.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  placeholder={this.state.holder_description}
                  required
                />
              </FormControl>
              <FormControl id="Poster">
                <FormLabel>Poster/Image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => this.setState({ poster: e.target.files[0] })}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                  onClick={
                    this.form_type == 0
                      ? (e) => {
                          status = this.handleSubmitpost(e);
                          if (status ==1){
                          alert("Event Created");
                          history.push("/home");
                          location.reload();
                          }
                        }
                      : (e) => {
                          status = this.handleSubmitput(e);
                          if (status ==1){
                            alert("Event Edited");
                            history.push("/home");
                            location.reload();
                            }
                        }
                  }
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
}

export default Body;
