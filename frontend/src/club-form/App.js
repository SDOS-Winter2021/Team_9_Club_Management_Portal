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

import Body from "./AddClub";

const Club_Form_Page = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Body></Body>
  </ThemeProvider>
);

export default Club_Form_Page;
