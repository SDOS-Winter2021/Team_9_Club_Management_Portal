import React, { Component }  from 'react';
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
} from '@chakra-ui/react';

import Body from './components/Body'
import Header from './components/Header'


const Events_Page = () => (
  <ThemeProvider theme={theme}>
    <CSSReset/>
    <Header></Header>
    <Body></Body>
  </ThemeProvider>
)

export default Events_Page