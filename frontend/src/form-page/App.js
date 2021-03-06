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
import history from "./../history";
import * as QueryString from "query-string";

import Body from "./components/Body";

class Form_Page extends React.Component {
  constructor(props) {
    super(props);
    const params = QueryString.parse(this.props.location.search);
    console.log(params.idf);
    this.form_type = {
      idf: params.idf,
      type: params.type,
    };
  }

  componentDidMount() {
    if (sessionStorage.is_authenticated == false) {
      alert("You need to be authenticated to proceed forward!");
      history.push("");
      location.reload();
    }
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
    
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Body info={this.form_type}></Body>
      </ThemeProvider>
    );
  }
}

export default Form_Page;
