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
      .get("http://127.0.0.1:8000/api/clubinfo")
      .then((data) => this.setState({ clubs: data.data }));
  };

  Redirect_Club = (name, id) => {
    console.log("Sending you to Club Page ------------->");
    console.log(name);
    console.log(id);
    history.push(`/club/${name}@${id}`);
  };

  Redirect_Social = (Link) => {
    console.log("Sending you to Social Page ------------->");
    window.open(Link, "_blank");
  };

  render() {
    return (
      <>
        <SimpleGrid columns={1} p={5} gap={6}>
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
        <SimpleGrid>
          <Button
            spacing={10}
            mt={50}
            onClick={() => history.push("/clubform")}
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
              Add New Club
            </Text>
          </Button>
        </SimpleGrid>
      </>
    );
  }
}

export default Clubs;
