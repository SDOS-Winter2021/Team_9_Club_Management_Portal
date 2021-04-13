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
    console.log(this.props.info.idf);
    this.form_type = this.props.info.type;
    this.state = {
      club_name: "",
      name: "",
      datetime: "",
      //datetime_end: "",
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
    if (this.form_type === 0) {
      this.setState({
        club_name: this.props.info.idf,
      });
    }
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
    }

    if (sessionStorage.getItem("group") == "Club_Coordinator") {
      this.setState({ club_email: sessionStorage.getItem("email") });
    } else {
      history.push("/home");
    }
  }

  eventPut = async (request) => {
    console.log("allo sending info");
    console.log(this.props.info.idf);
    let res = await axios.put(
      `https://iiitd-cms.herokuapp.com/api/clubs/${this.props.info.idf}`,
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
      club_name: this.state.club_name,
      name: this.state.name,
      date_time: this.state.datetime,
      //date_time_end: this.state.datetime,
      location: this.state.location,
      description: this.state.description,
      web_link: this.state.web_link,
      //poster: this.state.poster,
      //club_email: this.state.club_email,
      approved: "True",
    };
    console.log(data);
    console.log("IN SUBMIT PUT");
    var event_info = new FormData();
    data = JSON.stringify(data); //dunno about this
    event_info.append("request", data);
    event_info.append("poster", this.state.poster);
    //console.log(this.name);
    let eResponse = this.eventPut(event_info);
    console.log(eResponse);
  }

  handleSubmitpost(event) {
    var data = {
      club_name: this.state.club_name,
      name: this.state.name,
      date_time: this.state.datetime,
      //date_time_end: this.state.datetime,
      location: this.state.location,
      description: this.state.description,
      web_link: this.state.web_link,
      //poster: this.state.poster,
      //club_email: this.state.club_email,
      approved: "True",
    };
    console.log(data);
    var event_info = new FormData();
    data = JSON.stringify(data); //dunno about this
    event_info.append("request", data);
    event_info.append("poster", this.state.poster);
    //console.log(this.name);
    let eResponse = eventPost(event_info);
    console.log(eResponse);
  }

  render() {
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Event Proposal Form</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Add New Event
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder={this.state.holder_name}
                  required
                />
              </FormControl>
              <FormControl id="date">
                <FormLabel>Start Date-Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={this.state.datetime}
                  onChange={(e) => this.setState({ datetime: e.target.value })}
                  required
                />
              </FormControl>
              {/* <FormControl id="date">
                <FormLabel>End Date-Time</FormLabel>
                <Input
                  type="datetime-local"
                  value={this.state.datetime_end}
                  onChange={(e) => this.setState({datetime_end: e.target.value})}
                  required
                  />
              </FormControl> */}
              <FormControl id="location">
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
              <FormControl id="description">
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
                  placeholder=""
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
                      ? (e) => this.handleSubmitpost(e)
                      : (e) => this.handleSubmitput(e)
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
