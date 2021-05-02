import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
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
import Routes from './Routes';
import { SiCodio, SiEtsy, SiGmail } from "react-icons/si";

class App extends Component{
    render() {
        return (
                <div className="App">
                    <Routes/>
                </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));