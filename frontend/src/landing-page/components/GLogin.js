import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "./googleLogin"
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";

export default class GoogleButton extends React.Component{
    
  responseGoogle = async(response) => {
    console.log(response);
    let googleResponse  = await googleLogin(response)
    console.log(googleResponse.data["response"]);
    //window.open(googleResponse.data["response"], '_self');
    }
  


  render(){
    return (
      <Center p={8}>
        <GoogleLogin
            clientId={"431885344310-8rt98qaf06l6dgvhe6im3hshbtqom5u9.apps.googleusercontent.com"}
            render={renderProps => ( <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />} onClick={renderProps.onClick} disabled={renderProps.disabled}> Sign in with Google </Button>)}
            buttonText="Continue with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            isSignedIn={true}
        />
      </Center>
    )
  }
}