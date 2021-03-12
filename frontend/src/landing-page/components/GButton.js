import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import axios from "axios";
import GoogleLogin from 'react-google-login';
import googleLogin from "./googleLogin"

export default function GoogleButton() {
    return (
      
      <Center p={8}>
        
        <GoogleLogin
        clientId="<GOOGLE CLIENT ID>"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </Center>
    );
  }
const responseGoogle = async(response) => {
    let googleResponse  = await googleLogin(response.accessToken)
    console.log(googleResponse);
    console.log(response);
  }