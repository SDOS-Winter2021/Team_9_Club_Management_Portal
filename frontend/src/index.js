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
                    <ThemeProvider theme={theme}>

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
                </div>
                
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));