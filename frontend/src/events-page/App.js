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

class Events_Page extends React.Component{
  componentDidMount() {
    var id = useParams().id;

    const [eventInfo, setEventInfo] = useState([]);
    // transfers sessionStorage from one tab to another
    var sessionStorage_transfer = function(event) {
      if(!event) { event = window.event; } // ie suq
      if(!event.newValue) return;          // do nothing if no value to work with
      if (event.key == 'getSessionStorage') {
        // another tab asked for the sessionStorage -> send it
        localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
        // the other tab should now have it, so we're done with it.
        localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
      } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
        // another tab sent data <- get it
        var data = JSON.parse(event.newValue);
        for (var key in data) {
          sessionStorage.setItem(key, data[key]);
        }
      }
    };

    // listen for changes to localStorage
    if(window.addEventListener) {
      window.addEventListener("storage", sessionStorage_transfer, false);
    } else {
      window.attachEvent("onstorage", sessionStorage_transfer);
    };

    // Ask other tabs for session storage (this is ONLY to trigger event)
    if (!sessionStorage.length) {
      localStorage.setItem('getSessionStorage', 'foobar');
      localStorage.removeItem('getSessionStorage', 'foobar');
    };

    getEventInfo(this.id);
  }

  async getEventInfo(eventID) {
    let res = await axios
      .get(`http://127.0.0.1:8000/api/clubs/${id}`)
      .then((data) => setEventInfo(data.data));
    }

  render() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header Info={eventInfo}></Header>
      <Body eventid={eventInfo}></Body>
    </ThemeProvider>
  )
  }
}

export default Events_Page