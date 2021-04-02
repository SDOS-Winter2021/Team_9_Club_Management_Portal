import React, { Component, ReactNode, View } from "react";
import {
  Flex,
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
  Image,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import history from "./../../history";
import {
  IoMailOpenOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLaptopOutline,
} from "react-icons/io5";
import { FaDrum, FaRegMinusSquare } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Head from "next/head";

const Body = (Info_G, Info_E) => {
  return (
    <>
      {console.log(Info_G.Info_G)}
      {console.log(Info_G.Info_E)}
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              About Us
            </Text>
            <Heading>{Info_G.Info_G.name}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              {Info_G.Info_G.description}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"yellow.100"}
                >
                  {" "}
                  {
                    <Icon
                      as={IoMailOpenOutline}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                </Flex>
                <Text fontWeight={600}>{Info_G.Info_G.coordinator1_email}</Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"blue.100"}
                >
                  {" "}
                  {<Icon as={IoLaptopOutline} color={"blue.500"} w={5} h={5} />}
                </Flex>
                <Text fontWeight={600}>{Info_G.Info_G.website_link}</Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"green.100"}
                >
                  {" "}
                  {<Icon as={IoLogoFacebook} color={"green.500"} w={5} h={5} />}
                </Flex>
                <Link to="https://www.facebook.com">
                  {Info_G.Info_G.fb_link}
                </Link>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={"purple.100"}
                >
                  {" "}
                  {
                    <Icon
                      as={IoLogoInstagram}
                      color={"purple.500"}
                      w={5}
                      h={5}
                    />
                  }
                </Flex>
                <Text fontWeight={600}>{Info_G.Info_G.ig_link}</Text>
              </Stack>
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
              }
            />
          </Flex>
        </SimpleGrid>
        <Button
          spacing={10}
          mt={50}
          onClick={() => history.push("/form")}
          bg={useColorModeValue("white", "white")}
          rounded={"md"}
          border="2px"
          borderColor="#12d5e3"
        >
          <Text
            textTransform={"uppercase"}
            color={"#12d5e3"}
            fontWeight={600}
            fontSize={"sm"}
            p={2}
            alignSelf={"flex-start"}
            align="center"
          >
            Propose Event
          </Text>
        </Button>
        <Text
          textTransform={"uppercase"}
          color={"red.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("red.50", "red.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
          mt={50}
          paddingRight={2}
          align="center"
        >
          Upcoming Events
        </Text>
        <Box as="section" py="24">
          <Box
            maxW={{ base: "xl", md: "5xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacingX="10"
              spacingY="14"
            >
              {Object.keys(Info_G.Info_E).map((user, i) => (
                <Stack spacing="6" direction={{ base: "column", md: "row" }}>
                  <Box fontSize="2xl">{<FaRegMinusSquare />}</Box>
                  <Stack spacing="1">
                    <Text fontWeight="extrabold" fontSize="lg">
                      <Button
                        onClick={() =>
                          history.push(`/event/${Info_G.Info_E[i].id}`)
                        }
                      >
                        {Info_G.Info_E[i].name}
                      </Button>
                    </Text>
                    <Box color={"gray.600"}>
                      {`${Info_G.Info_E[i].location}`} on{" "}
                      {`${Info_G.Info_E[i].date_time}`}
                    </Box>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Text
          textTransform={"uppercase"}
          color={"red.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("red.50", "red.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
          mt={50}
          paddingRight={2}
          align="center"
        >
          Previous Events (Not Implemented As of Yet)
        </Text>
        <Box as="section" py="24">
          <Box
            maxW={{ base: "xl", md: "5xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacingX="10"
              spacingY="14"
            >
              {Object.keys(Info_G.Info_E).map((user, i) => (
                <Stack spacing="6" direction={{ base: "column", md: "row" }}>
                  <Box fontSize="2xl">{<FaRegMinusSquare />}</Box>
                  <Stack spacing="1">
                    <Text fontWeight="extrabold" fontSize="lg">
                      <Button
                        onClick={() =>
                          history.push(`/event/${Info_G.Info_E[i].id}`)
                        }
                      >
                        {Info_G.Info_E[i].name}
                      </Button>
                    </Text>
                    <Box color={"gray.600"}>
                      {`${Info_G.Info_E[i].location}`} on{" "}
                      {`${Info_G.Info_E[i].date_time}`}
                    </Box>
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Body;
