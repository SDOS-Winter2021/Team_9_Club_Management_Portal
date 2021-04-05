import React, { Component, ReactNode } from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
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
  Container,
  SimpleGrid,
  useColorModeValue,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import history from "../../history";
import { render } from "react-dom";

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
              bgGradient="linear(to-r,red.300 65%, orange.300 95%)"
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
              bgGradient="linear(to-r,red.300 65%, orange.300 95%)"
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
              bgGradient="linear(to-r,red.300 65%, orange.300 95%)"
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Location
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              {eventInfo["location"]}
            </Text>
            <Text
              textTransform={"uppercase"}
              color={"black"}
              fontWeight={600}
              fontSize={"sm"}
              bgGradient="linear(to-r,red.300 65%, orange.300 95%)"
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Prize Money
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              {"Add Here"}
            </Text>
          </Stack>
          <Flex>
            <Image
              maxHeight="400px"
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
              }
            />
          </Flex>
        </SimpleGrid>
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
            leftIcon={<Icon as={IoPencil} color={"black"} w={5} h={5} />}
          >
            <Text>{"Edit Event"}</Text>
          </Button>
          <Button
            justifyContent="space-evenly"
            p={4}
            border="1px"
            bgGradient="linear(to-r, purple.500,red.200)"
            _hover={{ bgGradient: "linear(to-r, purple.700,red.400)" }}
            leftIcon={<Icon as={IoTrashOutline} color={"black"} w={5} h={5} />}
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
      </Container>
    </>
  );
}
