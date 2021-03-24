import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "./googleLogin"
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";

export default class GoogleButton extends React.Component{
    
  responseGoogle = async() => {
    //console.log(response);
    let googleResponse  = await googleLogin()
    console.log(googleResponse.data["response"]);
    var win = window.open(googleResponse.data["response"], '_blank');
    win.location;
    //var windo = window.open("about:blank", "_self");
    this.onClose()
    }

    onClose = () => {
      window.opener = null;
      window.open("", "_self");
      window.close();
    };

  render(){
    return (
      <Center p={8}>
        <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />} onClick={this.responseGoogle}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Center>
    )
  }
}