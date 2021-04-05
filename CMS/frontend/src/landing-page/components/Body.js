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
} from '@chakra-ui/react';

import Head from 'next/head';
import './index.css'

const Body = () => {
    return (
        <>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW='3xl'>
        <Stack
          as="Box"
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Club Management <br />
            <Text as={'span'} color="green">
              Portal
            </Text>
          </Heading>
          <Text color='gray.500'>
            (Fill this up)
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>
      </Container>
      </>
    )
}

export default Body