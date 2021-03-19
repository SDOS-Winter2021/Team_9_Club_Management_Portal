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

/**
 * import {useParams} from "react-router-dom";
import Body from './components/Body'
import Header from './components/Header'
import getData from './components/getData'
import getEvent from './components/getEvent'
import { useState, useEffect } from 'react';

export default function Club_Page(){
  
  var name = useParams().name;

  useEffect( () => {
  async function fetchData() {
  console.log(name);
  console.log(name.slice(0,name.indexOf("@")));
  console.log(name.slice(name.indexOf("@")+1,));

  let eResponse_general  = await getData(name)
  console.log(eResponse_general);
  

  let eResponse_event  = await getEvent(name)
  console.log(eResponse_event);


  }
  fetchData();
  });

  var alldata = {'name':"yaba","desc":"daba","email":"email"};
  return (
    <ThemeProvider theme={theme}>
    <CSSReset/>
    <Header Info={alldata}></Header>
    <Body Info={alldata}></Body>
  </ThemeProvider>
  )
}
 */
