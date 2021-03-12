import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';
import React, { Component }  from 'react';
import axios from "axios";

export default function GoogleButton() {
    return (
      
      <Center p={8}>
        <Button
          w='full'
          maxW='md'
          variant='outline'
          leftIcon={<FcGoogle />}  onClick={() => {console.log("Sending login request")
                                                    axios.put("http://localhost:8000/admin/",
                                                    {'login': 0,}
                                                    );
                                                  }}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Center>
    );
  }
