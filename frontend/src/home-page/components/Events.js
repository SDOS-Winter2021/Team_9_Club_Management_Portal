import React, { useState } from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  Image,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
  Button,
  useColorModeValue,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import { IoAlarmOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import history from "../../history";
import { Router } from "react-router";

class Events extends React.Component {
  constructor() {
    super();
  }

  state = {
    events: [],
    un_events: [],
  };
  componentDidMount() {
    this.get_ApprovedEvents();
    this.get_UnapprovedEvents();
  }

  get_ApprovedEvents = () => {
    console.log("Getting Events");
    axios
      .get("https://iiitd-cms.herokuapp.com/api/clubs/approved")
      .then((data) => this.setState({ events: data.data }));
  };

  get_UnapprovedEvents = () => {
    console.log("Getting Events");
    axios
      .get("https://iiitd-cms.herokuapp.com/api/clubs/unapproved")
      .then((data) => this.setState({ un_events: data.data }));
  };

  Redirect_Event = (name) => {
    console.log("Sending you to Event Page ------------->");
    history.push(`/event/${name}`);
    location.reload();
  };

  formatDate = (dateString) => {
    const options = { dateStyle: "short", timeStyle: "short" };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  render() {
    return (
      <>
        <Grid
          p={10}
          gap={6}
          templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        >
          {(() => {
            if (
              sessionStorage.getItem("group") == "Admin" ||
              sessionStorage.getItem("group") == "Club_Admin"
            ) {
              return (
                <>
                  {this.state.un_events.map((user, i) => (
                    <Stat
                      px={{ base: 4, sm: 6 }}
                      py="5"
                      bg={"gray.500"}
                      shadow="base"
                      rounded="lg"
                      key={this.state.un_events[i]["club_name"]}
                    >
                      <StatLabel
                        fontWeight="medium"
                        isTruncated
                        color={"white"}
                        fontSize="lg"
                      >
                        {this.state.un_events[i]["club_name"]}
                      </StatLabel>
                      <StatNumber
                        fontSize="3xl"
                        fontWeight="medium"
                        color={"black"}
                      >
                        <Button
                          onClick={() =>
                            this.Redirect_Event(this.state.un_events[i]["id"])
                          }
                          bg="white"
                          fontSize="xl"
                        >
                          {this.state.un_events[i]["name"]}
                        </Button>
                      </StatNumber>
                      <Stack direction={"row"} align={"center"}>
                        <Flex
                          w={8}
                          h={8}
                          align={"center"}
                          justify={"center"}
                          rounded={"full"}
                          bg={"gray.500"}
                        >
                          <Icon
                            as={IoAlarmOutline}
                            color={"white"}
                            w={5}
                            h={5}
                          />
                        </Flex>
                        <Text fontWeight={600} color="white">
                          {this.formatDate(this.state.events[i]["date_time"])}
                        </Text>

                        <Flex
                          w={8}
                          h={8}
                          align={"center"}
                          justify={"center"}
                          rounded={"full"}
                          bg={"gray.500"}
                        >
                          <Icon as={BsBuilding} color={"white"} w={5} h={5} />
                        </Flex>
                        <Text fontWeight={600} color="white">
                          {this.state.un_events[i]["location"]}
                        </Text>
                      </Stack>
                    </Stat>
                  ))}
                </>
              );
            }
          })()}
          {this.state.events.map((user, i) => (
            <Stat
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={"gray.300"}
              shadow="base"
              rounded="lg"
              key={this.state.events[i]["club_name"]}
            >
              <StatLabel
                fontWeight="medium"
                isTruncated
                color={"black"}
                fontSize="lg"
              >
                {this.state.events[i]["club_name"]}
              </StatLabel>
              <StatNumber fontSize="3xl" fontWeight="medium" color={"black"}>
                <Button
                  onClick={() =>
                    this.Redirect_Event(this.state.events[i]["id"])
                  }
                  bg="white"
                  fontSize="xl"
                >
                  {this.state.events[i]["name"]}
                </Button>
              </StatNumber>
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"gray.300"}
                >
                  <Icon as={IoAlarmOutline} color={"black"} w={5} h={5} />
                </Flex>
                <Text fontWeight={600}>
                  {this.formatDate(this.state.events[i]["date_time"])}
                </Text>

                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"gray.300"}
                >
                  <Icon as={BsBuilding} color={"black"} w={5} h={5} />
                </Flex>
                <Text fontWeight={600}>{this.state.events[i]["location"]}</Text>
              </Stack>
            </Stat>
          ))}
        </Grid>
      </>
    );
  }
}

export default Events;
