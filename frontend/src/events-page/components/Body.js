import React, { Component, ReactNode } from "react";
import { IoPencil, IoTrashOutline, IoAlarmOutline } from "react-icons/io5";
import { GoCheck, GoX } from "react-icons/go";
import Head from "next/head";
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
  Flex,
  Heading,
  Container,
  SimpleGrid,
  Button,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  IconButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  IoHomeOutline
} from "react-icons/io5";

import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "react-dom";
import Cookies from "js-cookie";
import { SRLWrapper } from "simple-react-lightbox";
import history from "./../../history";

const csrftoken = Cookies.get("csrftoken");

function event_(event_id, is_approved) {
  let res = axios.put(`http://localhost:8000/api/event/edit`, {
    id: event_id,
    approved: is_approved,
  });
}

function notify_(event_id, is_approved) {
  let res = axios.put(`http://localhost:8000/api/event/edit`, {
    id: event_id,
    approved: is_approved,
  });
}

function approve_(event_id) {
  let rest = axios.put(
    `http://localhost:8000/api/clubs/approve/${event_id}`,
    {},
    {
      headers: {
        "X-CSRFToken": csrftoken,
      },
    }
  );
}

function delete_(event_id) {
  let res = axios.delete(
    `http://localhost:8000/api/clubs/${event_id}`,
    {
      headers: {
        "X-CSRFToken": csrftoken,
      },
    }
  );
  history.push({
    pathname: "/home",
  });
  location.reload();
}

function edit_(event_info) {
  sessionStorage.setItem("event_data_name", event_info.name);
  sessionStorage.setItem("event_data_desc", event_info.description);
  sessionStorage.setItem("event_data_dt", event_info.date_time);
  sessionStorage.setItem("event_data_loc", event_info.location);
  sessionStorage.setItem("event_data_club_name", event_info.club_name);
  sessionStorage.setItem("event_data", event_info);
  history.push({
    pathname: "/form",
    search: `?type=1&idf=${event_info["id"]}`,
  });
  location.reload();
}

const formatDate = (dateString) => {
  const options = { dateStyle: "medium", timeStyle: "short" };
  return new Date(dateString).toLocaleString(undefined, options);
};

export default function Body(event) {
  const eventInfo = event.eventid;
  const [visible, setVisible] = useState(false);
  const [attendance, setAttendance] = useState(0);
  const [response, setResponse] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
 
  const handleSubmit = async (event) => {
    var data = {
      attendance: attendance,
      //response: response,
      // logo: logo,
    };
    //console.log(data);
    data = JSON.stringify(data);
    var club_info = new FormData();
    club_info.append("request", data);
    //club_info = JSON.stringify(club_info);
    let eResponse = await clubOut(club_info);
    console.log(eResponse);
  };

  const clubOut = async (request) => {
    console.log("Sending Post request to add club");
    console.log(request);
    let res = await axios.post(
      "http://localhost:8000/api/eventinfoss",
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

  return (
    <>
    {console.log(eventInfo)}
    <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"black"}
              fontWeight={600}
              fontSize={"sm"}
              bgGradient="linear(to-r, teal.400 , green.300 )"
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Event Description
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              {eventInfo["description"]}
            </Text>
            <Text
              textTransform={"uppercase"}
              color={"black"}
              fontWeight={600}
              fontSize={"sm"}
              bgGradient="linear(to-r, teal.400 , green.300 )"
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Date Time
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              {formatDate(eventInfo["date_time"])}
            </Text>
            <Text
              textTransform={"uppercase"}
              color={"black"}
              fontWeight={600}
              fontSize={"sm"}
              bgGradient="linear(to-r, teal.400 , green.300)"
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Location
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              {eventInfo["location"]}
            </Text>
          </Stack>
          <Flex>
            <Stack>
            <SRLWrapper>
              <Image
                maxHeight="400px"
                rounded={"md"}
                alt={"Event Poster"}
                src={require(`../../../../club/posters/${eventInfo["poster"].split("/")[2]}`).default}
                onClick={() => setVisible(true)}
                />
              </SRLWrapper>
              {(() => {
                if (
                  (sessionStorage.getItem("group") == "Admin" ||
                  sessionStorage.getItem("group") == "Club_Admin")
                  && eventInfo["approved"] == false
                ) {
                  return (
                    <Flex flexDirection="row" justifyContent="space-between">
                      <Button
                        marginTop={10}
                        justifyContent="space-evenly"
                        p={4}
                        width={"40%"}
                        border="1px"
                        bgGradient="linear(to-r, green.500,green.300)"
                        _hover={{
                          bgGradient: "linear(to-r, green.700,green.600)",
                        }}
                        leftIcon={
                          <Icon as={GoCheck} color={"black"} w={5} h={5} />
                        }
                        onClick={() => approve_(eventInfo["id"])}
                      >
                        <Text>{"Approve"}</Text>
                      </Button>
                      <Button
                        marginTop={10}
                        justifyContent="space-evenly"
                        p={4}
                        border="1px"
                        width={"40%"}
                        bgGradient="linear(to-r, red.500,red.300)"
                        _hover={{ bgGradient: "linear(to-r, red.700,red.400)" }}
                        leftIcon={<Icon as={GoX} color={"black"} w={5} h={5} />}
                        onClick={() => event_(eventInfo["id"], 0)}
                      >
                        <Text>{"Reject"}</Text>
                      </Button>
                    </Flex>
                  );
                }
              })()}
            </Stack>
          </Flex>
        </SimpleGrid>
        <Button
          marginTop={10}
          justifyContent="space-evenly"
          p={4}
          border="1px"
          bgGradient="linear(to-r, purple.500,red.200)"
          _hover={{ bgGradient: "linear(to-r, purple.500,red.400)" }}
          leftIcon={<Icon as={IoAlarmOutline} color={"black"} w={5} h={5} />}
        >
          <Text>{"Notify Me"}</Text>
        </Button>
        {(() => {
          if (
            sessionStorage.getItem("group") == "Admin" ||
            sessionStorage.getItem("user_club_name") == eventInfo["club_name"]
          ) {
            return (
              <>
                <Heading ml={5} marginTop={20}>
                  Admin Information
                </Heading>
                <SimpleGrid columns={1} p={5} gap={6} maxWidth="50%">
                  <Button
                    justifyContent="space-evenly"
                    p={4}
                    border="1px"
                    bgGradient="linear(to-r, purple.500,red.200)"
                    _hover={{ bgGradient: "linear(to-r, purple.700,red.400)" }}
                    leftIcon={
                      <Icon as={IoPencil} color={"black"} w={5} h={5} />
                    }
                    onClick={() => edit_(eventInfo)}
                  >
                    <Text>{"Edit Event"}</Text>
                  </Button>
                  <Button
                    justifyContent="space-evenly"
                    p={4}
                    border="1px"
                    bgGradient="linear(to-r, purple.500,red.200)"
                    _hover={{ bgGradient: "linear(to-r, purple.700,red.400)" }}
                    leftIcon={
                      <Icon as={IoTrashOutline} color={"black"} w={5} h={5} />
                    }
                    onClick={() => delete_(eventInfo["id"])}
                  >
                    <Text>{"Delete Event"}</Text>
                  </Button>
                </SimpleGrid>
                <Heading ml={5} marginTop={20}>
                  Post Event Statistics
                </Heading>
                <Stack spacing={4}>
                  <FormControl id="Attendance">
                    <FormLabel>Attendance</FormLabel>
                    <Input
                      type="text"
                      value={attendance}
                      onChange={(e) => setAttendance(e.target.value)}
                      required
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{ bg: "blue.500" }}
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </>
            );
          }
        })()}
      </Container>
    </>
  );
}

/*
sessionStorage.getItem("group") == "Club_Coordinator" &&
            sessionStorage.getItem("user_club_name") == eventInfo["club_name"]
            */