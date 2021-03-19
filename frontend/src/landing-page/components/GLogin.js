import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "./googleLogin"

const responseGoogle = async(response) => {
  let googleResponse  = await googleLogin(response)
  console.log(googleResponse);
  }

export default function GoogleButton() {
    return (
      
      <Center p={8}>
        <GoogleLogin
        clientId="431885344310-8rt98qaf06l6dgvhe6im3hshbtqom5u9.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        accessType="offline"
        responseType="code"
      />
      </Center>
    );
  }