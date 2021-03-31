import React, { Component,ReactNode ,View}  from 'react';
import {Flex,
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    SimpleGrid,
    Image,
    StackDivider,
} from '@chakra-ui/react';
import history from './../../history';
import {
  IoMailOpenOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLaptopOutline,
} from 'react-icons/io5';
import { FaDrum ,FaRegMinusSquare} from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Head from 'next/head';

interface FeatProps {
  title: string;
  children: string;
  icon: React.ReactElement;
  toGo: String;
}

export const Feat = ({ title, children, icon, toGo }: FeatProps) => {
  return (
    <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
      <Box fontSize="2xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
      <Button onClick={()=>history.push(`/event/${toGo}`)}>
          {title}
      </Button>
        </Text>
        <Box color={useColorModeValue('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  )
}

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}> {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Body = (Info_G,Info_E) => {
    return (
      <>
      {console.log(Info_G.Info_G)}
      {console.log(Info_G.Info_E)}
      <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text textTransform={'uppercase'} color={'blue.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('blue.50', 'blue.900')} p={2} alignSelf={'flex-start'} rounded={'md'}>
            About Us
          </Text>
          <Heading>Fancy Heading</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {Info_G.Info_G.description}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoMailOpenOutline} color={'yellow.500'} w={5} h={5}/>
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={`${Info_G.Info_G.coordinator1_email}`}
            />
            <Feature
              icon={<Icon as={IoLaptopOutline} color={'blue.500'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text={`${Info_G.Info_G.website_link}`}
            />
            <Feature
              icon={<Icon as={IoLogoFacebook} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={`${Info_G.Info_G.fb_link}`}
            />
            <Feature
              icon={
                <Icon as={IoLogoInstagram} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={`${Info_G.Info_G.ig_link}`}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://media-exp1.licdn.com/dms/image/C510BAQH2yEAMzULVqw/company-logo_200_200/0/1570042443442?e=2159024400&v=beta&t=f0Wq6azh4y9gFqzFMZJvMg0VESvv7YWrXyGU7bezYho'
            }
          />
        </Flex>
      </SimpleGrid>
      <Button spacing={10} mt={50} onClick={() => history.push('/form')} bg={useColorModeValue('white', 'white')} rounded={'md'}  border="2px" borderColor="#12d5e3">
          <Text textTransform={'uppercase'} color={'#12d5e3'} fontWeight={600} fontSize={'sm'} p={2} alignSelf={'flex-start'} align="center">
            Propose Event
          </Text>
      </Button>
      <Text textTransform={'uppercase'} color={'red.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('red.50', 'red.900')} p={2} alignSelf={'flex-start'} rounded={'md'} mt={50} paddingRight={2} align="center">
            Upcoming Events
      </Text>
      <Box as="section" py="24">
        <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY="14">
            {
            Object.keys(Info_G.Info_E).map((user, i) =>
            <Feat title={`${Info_G.Info_E[i].name}`} icon={<FaRegMinusSquare />} toGo={`${Info_G.Info_E[i].id}`} key={Info_G.Info_E[i].id}>
              {`${Info_G.Info_E[i].location}`} on {`${Info_G.Info_E[i].date_time}`}
            </Feat>
            )}
          </SimpleGrid>
        </Box>
      </Box>
      <Text textTransform={'uppercase'} color={'red.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('red.50', 'red.900')} p={2} alignSelf={'flex-start'} rounded={'md'} mt={50} paddingRight={2} align="center">
        Previous Events (Not Implemented As of Yet)
      </Text>
      <Box as="section" py="24">
        <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY="14">
            <Feat title="Some Event" icon={<IoLaptopOutline />}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore.
            </Feat>
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
</>
    )
}

export default Body