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

const Form_Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Body></Body>
    </ThemeProvider>
  );
};

export default Form_Page;
