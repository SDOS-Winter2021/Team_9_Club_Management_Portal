import React from 'react'
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
  Heading
} from '@chakra-ui/react'
import axios from "axios";
import Header from './components/Header'
import Events from './components/Events'
import Clubs from './components/Clubs'


class Club_Page extends React.Component {
  constructor() {
    super();
  }

  state = {
    user_info: {},
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    console.log("Getting User");
    axios
      .get("http://127.0.0.1:8000/api/user/info")
      .then((data) => this.setState({ user_info: data.data }));
      this.setInfo();
  };
  
  setInfo = () => {
    console.log("Setting User Info");
    console.log(this.state.user_info.email)
    console.log(this.state.user_info)
    console.log(this.state.user_info.name)
    localStorage.setItem('email', this.state.user_info.email);
    localStorage.setItem('name', this.state.user_info.name);
  };
  
  
  render() {
    return (
      <>
      {this.setInfo()}
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <Header></Header>
        <Events></Events>
        <Clubs></Clubs>
      </ThemeProvider>
      </>
    )
  }
}
export default Club_Page
