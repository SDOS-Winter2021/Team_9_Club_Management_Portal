import React, { Component } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  ThemeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/react";

import Body from "./components/Body";
import Header from "./components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Events_Page() {

  const id = useParams().id;
  console.log(id);
  const [eventInfo, setEventInfo] = useState([]);

  useEffect( () => {

  async function getEventInfo(eventID) {
    let res = await axios
      .get(`http://127.0.0.1:8000/api/clubs/${id}`)
      .then((data) => setEventInfo(data.data));
    }
    getEventInfo(id);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header Info={eventInfo}></Header>
      <Body eventid={eventInfo}></Body>
    </ThemeProvider>
  );
}
