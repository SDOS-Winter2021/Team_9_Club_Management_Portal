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
import { FcGoogle } from "react-icons/fc";
import React from "react";
import GoogleButton from "./GLogout";
import history from "./../../history";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={4}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text fontSize="3xl" fontWeight="bold" textAlign="center">
              ⚡️Club Management Portal
            </Text>
            <Badge variant="subtle" variantColor="pink" ml={1}>
              BETA
            </Badge>
          </Flex>
        </Flex>
        <Box bgGradient="linear(teal.500 55%, green.400 95%)" px={4} border='1px'>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize="xl" fontWeight="medium">
              Hi, {sessionStorage.getItem("name")}
            </Text>
            <Button
              maxW={"xs"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              bg="white"
              onClick={()=>{
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("name");
                sessionStorage.removeItem("group");
                sessionStorage.removeItem("is_authenticated");
                history.push("/accounts/logout")
                location.reload();
              }}
            >
              <Text>Logout</Text>
            </Button>
          </Flex>
        </Box>
      </>
    );
  }
}
export default Header;
