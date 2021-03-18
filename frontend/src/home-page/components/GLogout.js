import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import { GoogleLogout } from 'react-google-login';

const responseGoogle = async(response) => {
    console.log(response);
  //let googleResponse  = await googleLogin(x,z)
  }

export default function GoogleButton() {
    return (
      <GoogleLogout
        clientId="431885344310-8rt98qaf06l6dgvhe6im3hshbtqom5u9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}
        ></GoogleLogout>
    );
  }