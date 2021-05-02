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
  Button,
  VisuallyHidden
} from "@chakra-ui/react";
import axios from "axios";
import Header from "./components/Header";
import Events from "./components/Events";
import Clubs from "./components/Clubs";
import history from "./../history";
import { FcGoogle } from "react-icons/fc";
import { Container} from 'react-floating-action-button'
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import { MdAdd, MdClose, MdFavorite } from "react-icons/md";
import { GiJumpAcross } from "react-icons/gi";
import { SiCodio, SiEtsy, SiGmail } from "react-icons/si";

class Home_Page extends React.Component {
  constructor() {
    super();
    this.state = {
      user_info: [],
      isOpen: false,
    };
  }
  componentDidMount() {
    // transfers sessionStorage from one tab to another
    this.getUser();
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
    axios
      .get("http://localhost:8000/api/user/info")
      .then((data) => this.setState({ user_info: data.data }));
  };

  setInfo = () => {
    sessionStorage.setItem("email", this.state.user_info.email);
    sessionStorage.setItem("name", this.state.user_info.name);
    sessionStorage.setItem("group", this.state.user_info.group);
    sessionStorage.setItem(
      "user_club_name",
      this.state.user_info.user_club_name
    );
    sessionStorage.setItem(
      "is_authenticated",
      this.state.user_info.is_authenticated
    );

    if (this.state.user_info.is_authenticated == false) {
      history.push("/");
      location.reload();
    }
  };

  render() {
    return (
      <>
        {console.log(this.state.user_info)}
        {console.log(
          this.state.user_info.user_club_name + " USER CLUB NAME information"
        )}
        {console.log(this.state.user_info.is_authenticated)}
        {this.setInfo()}
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Header></Header>
          <Events></Events>
          <Clubs></Clubs>
          <Container>

          <FloatingMenu
            slideSpeed={500}
            direction="up"
            spacing={8}
            isOpen={this.state.isOpen}
            style={{zIndex:1}}
            backgroundColor="black"
          >
          <MainButton
            iconResting={<GiJumpAcross style={{ fontSize: 20 }} nativeColor="white" />}
            iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            size={50}
            background="linear-gradient(45deg, #FFB74D 50%, #FFD54F 90%)"
            />
           <ChildButton
            icon={<SiCodio style={{ fontSize: 20 }} nativeColor="black" />}
            background="linear-gradient(45deg, #FFB74D 50%, #FFD54F 90%)"
            size={40}
            onClick={() => document.getElementById('clubs').scrollIntoView()}
            />
          <ChildButton
            icon={<SiEtsy style={{ fontSize: 20 }} nativeColor="black" />}
            background="linear-gradient(45deg, #FFB74D 50%, #FFD54F 90%)"
            size={40}
            onClick={() => document.getElementById('events').scrollIntoView()}
            />
        </FloatingMenu>
        </Container>
        <Box bg="gray.50" px={4} className="fixed-bottom">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontSize="md">
              @ Team 9, SDOS - CSE583
            </Text>
            <Button
              maxW={"xs"}
              variant={"outline"}
              leftIcon={<SiGmail />}
              bg="white"
              onClick={()=>{window.open("mailto:saad18409@iiitd.ac.in", "_blank");}}
            >
              <Text>Contact us</Text>
            </Button>
          </Flex>
        </Box>
      </ThemeProvider>
      </>
    );
  }
}
export default Home_Page;
