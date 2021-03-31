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

export default function Events_Page() {
  const id = useParams().id;
  console.log(id);
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header></Header>
      <Body eventid={id}></Body>
    </ThemeProvider>
  );
}
