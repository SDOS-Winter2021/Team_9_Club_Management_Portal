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
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import history from "../../history";

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

  Redirect_Event = (name) => {
    console.log("Sending you to Event Page ------------->");
    history.push(`/event/${name}`);
  };

  render() {
    return (
      <Grid
        p={10}
        gap={6}
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      >
        {this.state.events.map((user, i) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="left"
            justifyContent="center"
            p={10}
            key={i}
            onClick={() => this.Redirect_Event(this.state.events[i]["id"])}
            key={this.state.events[i]["club_name"]}
          >
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
              {this.state.events.length !== 0 ? (
                <Text fontWeight="bold" fontSize="xl">
                  {this.state.events[i]["name"]}
                </Text>
              ) : null}
              {this.state.events.length !== 0 ? (
                <Text fontSize="sm" mb={3}>
                  {this.state.events[i]["club_name"]}
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
                    {this.state.events[i]["date_time"]}
                  </Text>
                ) : null}
                {this.state.events.length !== 0 ? (
                  <Text fontSize="sm" mb={3}>
                    {this.state.events[i]["club_name"]}
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
                      {this.state.events[i]["date_time"]}
                    </Text>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    );
  }
}

export default Events;
