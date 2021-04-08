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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import history from "../../history";
import { render } from "react-dom";

function event_(event_id, is_approved) {
  console.log(event_id,is_approved)
  let res = axios
      .put(`http://127.0.0.1:8000/api/event/edit`,
      {'id':event_id, 'approved':is_approved}
      );
}

function notify_(event_id, is_approved) {
  console.log(event_id,is_approved)
  let res = axios
      .put(`http://127.0.0.1:8000/api/event/edit`,
      {'id':event_id, 'approved':is_approved}
      );
}

function delete_(event_id) {
  console.log(event_id)
  let res = axios
      .put(`http://127.0.0.1:8000/api/event/delete`,
      {'id':event_id}
      );
}

function edit_(event_info) {
  //console.log(event_info);
  sessionStorage.setItem("event_data_name", event_info.name);
  sessionStorage.setItem("event_data_desc", event_info.desc);
  sessionStorage.setItem("event_data_dt", event_info.dt);
  sessionStorage.setItem("event_data_loc", event_info.location);
  sessionStorage.setItem("event_data", event_info);
  history.push(`/form`);
}


export default function Body(event) {
  const eventInfo = event.eventid;
  console.log(eventInfo);
  return (
    <>
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
              {eventInfo["date_time"]}
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
            <Image
              maxHeight="400px"
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
              }
            />
        <Flex flexDirection="row" justifyContent="space-between">
            <Button
        marginTop={10}
        justifyContent="space-evenly"
        p={4}
        width={"40%"}
        border="1px"
        bgGradient="linear(to-r, green.500,green.300)"
        _hover={{ bgGradient: "linear(to-r, green.700,green.600)" }}
        leftIcon={
          <Icon as={GoCheck} color={"black"} w={5} h={5} />}
        onClick={()=>event_(eventInfo["id"],1)}
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
        leftIcon={
          <Icon as={GoX} color={"black"} w={5} h={5} />}
        onClick={()=>event_(eventInfo["id"],0)}
        >
          <Text>{"Reject"}</Text>
        </Button>
        </Flex>
          </Stack>
          </Flex>
        </SimpleGrid>
        <Button
        marginTop={10}
        justifyContent="space-evenly"
        p={4}
        border="1px"
        bgGradient="linear(to-r, purple.500,red.200)"
        _hover={{ bgGradient: "linear(to-r, purple.700,red.400)" }}
        leftIcon={
          <Icon as={IoAlarmOutline} color={"black"} w={5} h={5} />
        }>
          <Text>{"Notify Me"}</Text>
        </Button>
        {(() => {
          if (sessionStorage.getItem("email") == eventInfo["club_email"]) {
            return (
              <>
                <Heading ml={5} marginTop={20}>
                    Admin Information
                </Heading>
                <SimpleGrid columns={1} p={5} gap={6} maxWidth="25%">
                  <Button
                    justifyContent="space-evenly"
                    p={4}
                    border="1px"
                    bgGradient="linear(to-r, purple.500,red.200)"
                    _hover={{ bgGradient: "linear(to-r, purple.700,red.400)" }}
                    leftIcon={
                      <Icon as={IoPencil} color={"black"} w={5} h={5} />}
                      onClick={()=>edit_(eventInfo)}
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
                      <Icon as={IoTrashOutline} color={"black"} w={5} h={5} />}
                      onClick={()=>delete_(eventInfo["id"])}
                  >
                    <Text>{"Delete Event"}</Text>
                  </Button>
                </SimpleGrid>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={0}
                  justifyContent="center"
                >
                  <Stack spacing={4}>
                    <Text
                      textTransform={"uppercase"}
                      color={"black"}
                      fontWeight={600}
                      fontSize={"lg"}
                      p={2}
                      alignSelf={"flex-start"}
                      rounded={"md"}
                    >
                      Event Reciept
                    </Text>
                    <Flex>
                      <Image
                        maxHeight="400px"
                        rounded={"md"}
                        alt={"feature image"}
                        src={
                          "https://templates.invoicehome.com/receipt-template-us-band-blue-750px.png"
                        }
                      />
                    </Flex>
                  </Stack>
                  <Stack spacing={4}>
                    <Text
                      textTransform={"uppercase"}
                      color={"black"}
                      fontWeight={600}
                      fontSize={"lg"}
                      p={2}
                      alignSelf={"flex-start"}
                      rounded={"md"}
                    >
                      Reimbursement Reciept
                    </Text>
                    <Flex>
                      <Image
                        maxHeight="400px"
                        rounded={"md"}
                        alt={"feature image"}
                        src={
                          "https://templates.invoicehome.com/receipt-template-us-band-blue-750px.png"
                        }
                      />
                    </Flex>
                  </Stack>
                </SimpleGrid>
              </>
            );
          }
        })()}
      </Container>
    </>
  );
}
