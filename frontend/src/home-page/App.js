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


const Club_Page = () => (
  <ThemeProvider theme={theme}>
    <CSSReset/>
    <Header></Header>
    <Events></Events>
    <Clubs></Clubs>
  </ThemeProvider>
)

export default Club_Page
