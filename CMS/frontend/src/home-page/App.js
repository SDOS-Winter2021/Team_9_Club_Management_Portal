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
} from "@chakra-ui/react";
import axios from "axios";
import Header from "./components/Header";
import Events from "./components/Events";
import Clubs from "./components/Clubs";

class Home_Page extends React.Component {
  constructor() {
    super();
  }

  state = {
    user_info: {},
  };

  componentDidMount() {
    this.getUser();
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

  getUser = () => {
    console.log("Getting User");
    axios.get("http://localhost:8000/api/user/info").then((data) => this.setState({ user_info: data.data }));
    this.setInfo();
  };

  setInfo = () => {
    console.log("Setting User Info");
    console.log(this.state.user_info.email);
    console.log(this.state.user_info);
    console.log(this.state.user_info.name);
    sessionStorage.setItem("email", this.state.user_info.email);
    sessionStorage.setItem("name", this.state.user_info.name);
    sessionStorage.setItem("test", "test");
  };

  render() {
    return (
      <>
        {this.setInfo()}
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Header></Header>
          <Events></Events>
          <Clubs></Clubs>
        </ThemeProvider>
      </>
    );
  }
}
export default Home_Page;
