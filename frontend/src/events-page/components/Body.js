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
  Textarea,
} from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";

import { useState, useEffect } from "react";
import axios from "axios";
import { render } from "react-dom";
import Cookies from "js-cookie";
import { SRLWrapper } from "simple-react-lightbox";
import history from "./../../history";
import emailjs from "emailjs-com";

const csrftoken = Cookies.get("csrftoken");

function event_(event_id, is_approved, remarks, event_name, coord_email) {
  //data = JSON.stringify({'event_name':event_name, 'remarks':remarks, status:'rejected'}); //dunno about this
  var templateParams = {
    email_to_send: coord_email,
    event_name: event_name,
    remarks: remarks,
    status: "rejected",
  };
  console.log(templateParams);
  console.log("TEMPLATEPARAMS");
  emailjs
    .send(
      "service_9u4bet3",
      "template_2sml7ci",
      templateParams,
      "user_R1cJopLy4W0fZMs6laGqY"
    )
    .then(
      (result) => {
        delete_(event_id); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
}

function notify_(eventInfo) {
  var data = {
    name: eventInfo["name"],
    date_time: eventInfo["date_time"],
    end_date_time: eventInfo["end_date_time"],
    location: eventInfo["location"],
    description: eventInfo["description"],
  };
  console.log(data);
  var event_info = new FormData();
  data = JSON.stringify(data); //dunno about this
  event_info.append("request", data);

  var res = axios.post(
    "http://localhost:8000/api/notify",
    event_info,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": csrftoken,
      },
    }
  );
  alert("Event added to your calendar");
  console.log(res);
  return res.status;
}

function approve_(event_id, remarks, event_name, coord_email) {
  var templateParams = {
    email_to_send: coord_email,
    event_name: event_name,
    remarks: remarks,
    status: "approved",
  };
  emailjs
    .send(
      "service_9u4bet3",
      "template_2sml7ci",
      templateParams,
      "user_R1cJopLy4W0fZMs6laGqY"
    )
    .then(
      (result) => {
        history.push(`/home`);
        location.reload();
        //window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      },
      (error) => {
        console.log(error.text);
      }
    );
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
  const [reason, setReason] = useState("");
  const [response, setResponse] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  const handleSubmit = async (event) => {
    var data = {
      attendance: attendance,
    };
    data = JSON.stringify(data);
    var club_info = new FormData();
    club_info.append("request", data);
    let eResponse = await attendanceOut(club_info);
    console.log(eResponse);
  };

  const attendanceOut = async (request) => {
    console.log("Sending Post request to add attendance");
    console.log(request);
    let rest = axios.put(
      `http://localhost:8000/api/attendance/${eventInfo['id']}`,
      request,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": csrftoken,
        },
      }
    );
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
                  src={
                    `${eventInfo["poster"]}` == "null"
                      ? require("../../../../club/logo/placeholder.png").default
                      : require(`../../../../club/posters/${
                          eventInfo["poster"].split("/")[2]
                        }`).default
                  }
                  onClick={() => setVisible(true)}
                />
              </SRLWrapper>
              {(() => {
                if (
                  (sessionStorage.getItem("group") == "Admin" ||
                    sessionStorage.getItem("group") == "Club_Admin") &&
                  eventInfo["approved"] == false
                ) {
                  return (
                    <>
                      <Stack spacing={4}>
                        <FormControl id="Remarks">
                          <FormLabel>Remarks</FormLabel>
                          <Textarea
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                          />
                        </FormControl>
                      </Stack>
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
                          onClick={() =>
                            approve_(
                              eventInfo["id"],
                              reason,
                              eventInfo["name"],
                              eventInfo["club_email"]
                            )
                          }
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
                          _hover={{
                            bgGradient: "linear(to-r, red.700,red.400)",
                          }}
                          leftIcon={
                            <Icon as={GoX} color={"black"} w={5} h={5} />
                          }
                          onClick={() =>
                            event_(
                              eventInfo["id"],
                              0,
                              reason,
                              eventInfo["name"],
                              eventInfo["club_email"]
                            )
                          }
                        >
                          <Text>{"Reject"}</Text>
                        </Button>
                      </Flex>
                    </>
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
          onClick={() => notify_(eventInfo)}
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
                <Heading ml={5} marginTop={20} mb={5}>
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

