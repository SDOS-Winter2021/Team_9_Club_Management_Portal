import React from "react";
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
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import history from "./../../history";

class Clubs extends React.Component {
  constructor() {
    super();
  }

  state = {
    clubs: [],
  };

  componentDidMount() {
    this.getClubs();
  }

  getClubs = () => {
    console.log("Getting Clubs");
    axios
      .get("https://iiitd-cms.herokuapp.com/api/clubinfo")
      .then((data) => this.setState({ clubs: data.data }));
  };

  Redirect_Club = (name, id) => {
    console.log("Sending you to Club Page ------------->");
    console.log(name);
    console.log(id);
    // window.location.href = `/club/${name}@${id}`;
    history.push(`/club/${name}@${id}`);
    location.reload();
  };

  Redirect_Social = (Link) => {
    console.log("Sending you to Social Page ------------->");
    window.open(Link, "_blank");
  };

  render() {
    return (
      <>
        <SimpleGrid columns={1} p={5} gap={6} id="clubs">
          {this.state.clubs.map((user, i) => (
            <Button
              justifyContent="space-between"
              p={6}
              border="1px"
              bgGradient="linear(to-r, teal.500,green.400)"
              _hover={{ bgGradient: "linear(to-r, teal.700,green.600)" }}
              rightIcon={
                <Flex flexDirection="row">
                  <Button
                    bg="green.350"
                    _hover={{ bg: "teal.600" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.Redirect_Social(this.state.clubs[i]["fb_link"]);
                    }}
                  >
                    <Icon as={IoLogoFacebook} color={"black"} w={5} h={5} />
                  </Button>
                  <Button
                    bg="green.350"
                    _hover={{ bg: "teal.600" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.Redirect_Social(this.state.clubs[i]["ig_link"]);
                    }}
                  >
                    <Icon as={IoLogoInstagram} color={"black"} w={5} h={5} />
                  </Button>
                </Flex>
              }
              onClick={() =>
                this.Redirect_Club(
                  this.state.clubs[i]["name"],
                  this.state.clubs[i]["id"]
                )
              }
              key={this.state.clubs[i]["id"]}
            >
              {console.log(this.state.clubs[i])}
              <Text>{this.state.clubs[i]["name"]}</Text>
            </Button>
          ))}
        </SimpleGrid>
        {(() => {
          if (sessionStorage.getItem("group") == "Admin") {
            return (
              <>
                <SimpleGrid>
                  <Button
                    spacing={10}
                    mt={50}
                    mb={40}
                    onClick={() => {
                      history.push("/clubform");
                      location.reload();
                    }}
                    rounded={"md"}
                    border="2px"
                    bgGradient="linear(to-r, blue.400,purple.400)"
                    _hover={{ bgGradient: "linear(to-r, blue.700,purple.600)" }}
                    borderColor="black"
                    minH={"50%"}
                  >
                    <Text
                      textTransform={"uppercase"}
                      color={"black"}
                      fontWeight={600}
                      fontSize={"lg"}
                      p={2}
                      alignSelf={"center"}
                      align="center"
                    >
                      Add New Club
                    </Text>
                  </Button>
                </SimpleGrid>
              </>
            );
          }
        })()}
      </>
    );
  }
}

export default Clubs;
