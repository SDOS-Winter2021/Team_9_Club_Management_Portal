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
  useColorModeValue,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import {
  IoAlarmOutline,
} from 'react-icons/io5';
import { BsBuilding } from "react-icons/bs";
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
      <>
      <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
        {this.state.events.map((user, i) => (
          <Stat px={{ base: 4, sm: 6 }} py="5" bg={'gray.300'} shadow="base" rounded="lg" key={this.state.events[i]["club_name"]}>
            <StatLabel fontWeight="medium" isTruncated color={'black'} fontSize="lg">
              {this.state.events[i]["club_name"]}
            </StatLabel>
            <StatNumber fontSize="3xl" fontWeight="medium" color={'black'}>
              <Button onClick={() => this.Redirect_Event(this.state.events[i]["id"])} bg="white" fontSize="xl">
              {this.state.events[i]["name"]}
              </Button>
            </StatNumber>
            <Stack direction={'row'} align={'center'}>
              <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={"gray.300"}> 
                <Icon as={IoAlarmOutline} color={"black"} w={5} h={5}/>
              </Flex>
              <Text fontWeight={600}>
                {this.state.events[i]["date_time"]}
              </Text>
              <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={"gray.300"}> 
                <Icon as={BsBuilding} color={"black"} w={5} h={5}/>
              </Flex>
              <Text fontWeight={600}>
                {this.state.events[i]["location"]}
              </Text>
            </Stack>
          </Stat>
        ))}
      </Grid>
    </>
    );
  }
}

export default Events;