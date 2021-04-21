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
import { useParams } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import getData from "./components/getData";

import getEvent from "./components/getEvent";
import getPastEvent from "./components/getpastEvent";
import getFutureEvent from "./components/getfutureEvent";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

class Club_Page extends React.Component {
  state = {
    general: { logo: "club/logo/placeholder.png" },
    pastEvent: [],
    futureEvent: [],
    event: [],
    name: [],
  };

  componentDidMount() {
    console.log("Club page 1");
    this.setState({ name: this.props.match.params.name });
    console.log(this.state.name);
    // transfers sessionStorage from one tab to another
    var sessionStorage_transfer = function (event) {
      if (!event) {
        event = window.event;
      } // ie suq
      if (!event.newValue) return; // do nothing if no value to work with
      if (event.key == "getSessionStorage") {
        // another tab asked for the sessionStorage -> send it
        localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage));
        // the other tab should now have it, so we're done with it.
        localStorage.removeItem("sessionStorage"); // <- could do short timeout as well.
      } else if (event.key == "sessionStorage" && !sessionStorage.length) {
        // another tab sent data <- get it
        var data = JSON.parse(event.newValue);
        for (var key in data) {
          sessionStorage.setItem(key, data[key]);
        }
      }
    };

    // listen for changes to localStorage
    if (window.addEventListener) {
      window.addEventListener("storage", sessionStorage_transfer, false);
    } else {
      window.attachEvent("onstorage", sessionStorage_transfer);
    }

    // Ask other tabs for session storage (this is ONLY to trigger event)
    if (!sessionStorage.length) {
      localStorage.setItem("getSessionStorage", "foobar");
      localStorage.removeItem("getSessionStorage", "foobar");
    }

    if (sessionStorage.is_authenticated != "true") {
      history.push("/");
      location.reload();
    }

    console.log("Club page");
    this.fetchData(this.props.match.params.name);
  }

  async fetchData(name) {
    let eResponse_general = await getData(name.slice(name.indexOf("@") + 1));
    this.setState({ general: eResponse_general.data });

    let eResponse_event = await getEvent(name.slice(0, name.indexOf("@")));
    this.setState({ event: eResponse_event.data });

    let eResponse_event_prev = await getPastEvent(name.slice(0, name.indexOf("@")));
    this.setState({ pastEvent: eResponse_event_prev.data });

    let eResponse_event_future = await getFutureEvent(name.slice(0, name.indexOf("@")));
    this.setState({ futureEvent: eResponse_event_future.data });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {console.log("Image path")}
        {console.log(this.state.general.logo ? this.state.general.logo : "placeholder")}
        <CSSReset />
        <Header Info={this.state.general}></Header>
        <Body
          Info_G={this.state.general}
          Info_PE={this.state.pastEvent}
          Info_FE={this.state.futureEvent}
        ></Body>
      </ThemeProvider>
    );
  }
}

export default withRouter(Club_Page);