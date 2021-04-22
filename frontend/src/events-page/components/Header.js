import React, { Component } from "react";
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
} from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import Head from "next/head";
import history from "./../../history";

const Header = (Info) => {
<<<<<<< HEAD
    return (
      <>
      <Flex flexDirection="row" mt={0} bgGradient="linear(teal.500 55%, green.400 95%)" justifyContent="center">
      <Icon as={IoHomeOutline} w={5} h={5} justifySelf="flex-end" onClick={()=>{history.push(`/home`)}}/>
      <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={0} bgGradient="linear(teal.500 55%, green.400 95%)">
      <Flex display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
        <Text fontSize="3xl" fontWeight="bold" >
         {Info.Info.name}
        </Text>
      </Flex>
        <Text color="black">
          {Info.Info.club_name}
        </Text>
      </Flex>
    </Flex>
=======
  return (
    <>
      <Flex
        flexDirection="row"
        mt={0}
        bgGradient="linear(teal.500 55%, green.400 95%)"
        justifyContent="center"
      >
        <Icon
          as={IoHomeOutline}
          w={30}
          h={20}
          justifySelf="flex-end"
          onClick={() => {
            history.push(`/home`);
            location.reload();
          }}
        />
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={0}
          bgGradient="linear(teal.500 55%, green.400 95%)"
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text fontSize="3xl" fontWeight="bold">
              {Info.Info.name}
            </Text>
          </Flex>
          <Text color="black">{Info.Info.club_name}</Text>
        </Flex>
      </Flex>
>>>>>>> 8a152829470695371638718971ba7e8563c87ac5
    </>
  );
};

export default Header;
