import React, { useState } from "react";
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
} from "@chakra-ui/react";
import axios from "axios";

class Events extends React.Component {
  constructor() {
    super();
  }

  state = {
    events: [],
  };
  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    console.log("Getting Events");
    axios
      .get("http://127.0.0.1:8000/api/clubs/unapproved")
      .then((data) => this.setState({ events: data.data }));
  };

  render() {
    return (
      <Grid
        p={10}
        gap={6}
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          p={10}
        >
          {this.state.events.length !== 0 ? (
            <Text
              fontSize="lg"
              lineHeight="normal"
              textAlign="center"
              mb={5}
              color="twitter.900"
              maxWidth="sm"
            >
              {this.state.events[0]["name"]}
            </Text>
          ) : null}

          <Box
            bg="#ffffff"
            rounded="lg"
            width="sm"
            minHeight="sm"
            border="1px solid lightgrey"
            overflow="hidden"
          >
            <Box>
              <Image
                size="100px"
                fallbackSrc="https://via.placeholder.com/150"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                width="100%"
                height="245px"
                minHeight="245px"
              />
            </Box>
            <Box p={5} pb={8}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
                mb={1}
                flexDirection="row"
              >
                <Badge
                  variant="subtle"
                  variantColor="teal"
                  mr={2}
                  rounded="lg"
                  pl={2}
                  pr={2}
                >
                  NEW
                </Badge>
              </Box>
              {this.state.events.length !== 0 ? (
                <Text fontWeight="bold" fontSize="xl">
                  {this.state.events[0]["description"]}
                </Text>
              ) : null}
              {this.state.events.length !== 0 ? (
                <Text fontSize="sm" mb={3}>
                  {this.state.events[0]["club_name"]}
                </Text>
              ) : null}
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="flex-start"
              >
                <Icon name="star" color="yellow.400" mr={1} />
                {this.state.events.length !== 0 ? (
                  <Text fontWeight="bold" mr={1}>
                    {this.state.events[0]["date_time"]}
                  </Text>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          p={10}
        >
          {this.state.events.length !== 0 ? (
            <Text
              fontSize="lg"
              lineHeight="normal"
              textAlign="center"
              mb={5}
              color="twitter.900"
              maxWidth="sm"
            >
              {this.state.events[0]["name"]}
            </Text>
          ) : null}

          <Box
            bg="#ffffff"
            rounded="lg"
            width="sm"
            minHeight="sm"
            border="1px solid lightgrey"
            overflow="hidden"
          >
            <Box>
              <Image
                size="100px"
                fallbackSrc="https://via.placeholder.com/150"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                width="100%"
                height="245px"
                minHeight="245px"
              />
            </Box>
            <Box p={5} pb={8}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
                mb={1}
                flexDirection="row"
              >
                <Badge
                  variant="subtle"
                  variantColor="teal"
                  mr={2}
                  rounded="lg"
                  pl={2}
                  pr={2}
                >
                  NEW
                </Badge>
              </Box>
              {this.state.events.length !== 0 ? (
                <Text fontWeight="bold" fontSize="xl">
                  {this.state.events[1]["description"]}
                </Text>
              ) : null}
              {this.state.events.length !== 0 ? (
                <Text fontSize="sm" mb={3}>
                  {this.state.events[1]["club_name"]}
                </Text>
              ) : null}
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="flex-start"
              >
                <Icon name="star" color="yellow.400" mr={1} />
                {this.state.events.length !== 0 ? (
                  <Text fontWeight="bold" mr={1}>
                    {this.state.events[1]["date_time"]}
                  </Text>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          justifyContent="center"
          p={10}
        >
          {this.state.events.length !== 0 ? (
            <Text
              fontSize="lg"
              lineHeight="normal"
              textAlign="center"
              mb={5}
              color="twitter.900"
              maxWidth="sm"
            >
              {this.state.events[1]["name"]}
            </Text>
          ) : null}

          <Box
            bg="#ffffff"
            rounded="lg"
            width="sm"
            minHeight="sm"
            border="1px solid lightgrey"
            overflow="hidden"
          >
            <Box>
              <Image
                size="100px"
                fallbackSrc="https://via.placeholder.com/150"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                width="100%"
                height="245px"
                minHeight="245px"
              />
            </Box>
            <Box p={5} pb={8}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
                mb={1}
                flexDirection="row"
              >
                <Badge
                  variant="subtle"
                  variantColor="teal"
                  mr={2}
                  rounded="lg"
                  pl={2}
                  pr={2}
                >
                  NEW
                </Badge>
              </Box>
              {this.state.events.length !== 0 ? (
                <Text fontWeight="bold" fontSize="xl">
                  {this.state.events[1]["description"]}
                </Text>
              ) : null}
              {this.state.events.length !== 0 ? (
                <Text fontSize="sm" mb={3}>
                  {this.state.events[1]["club_name"]}
                </Text>
              ) : null}
              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                justifyContent="flex-start"
              >
                <Icon name="star" color="yellow.400" mr={1} />
                {this.state.events.length !== 0 ? (
                  <Text fontWeight="bold" mr={1}>
                    {this.state.events[1]["date_time"]}
                  </Text>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default Events;
