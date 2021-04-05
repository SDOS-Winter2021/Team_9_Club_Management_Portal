import {
  Flex,
  Box,
  Image,
  Badge,
  Text,
  Button,
  Icon,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { FcGoogle } from 'react-icons/fc';
import React from "react";
import GoogleButton from "./GLogout";

const Header = () => {
  return (
    <>
      <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={4} >
        <Flex display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start" >
          <Text fontSize="3xl" fontWeight="bold">
            ⚡️Club Management Portal
          </Text>
          <Badge variant="subtle" variantColor="pink" ml={1}>
            BETA
          </Badge>
        </Flex>
        <Text color="gray.500">Sup</Text>
      </Flex>
      <Box bgGradient="linear(teal.500 55%, green.400 95%)" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="xl" fontWeight="medium">
            Welcome, ABC
          </Text>
          <Button maxW={'xs'} variant={'outline'} leftIcon={<FcGoogle />} bg="white">
            <Text>Logout</Text>
        </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
