import React, { Component,ReactNode }  from 'react';
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
import {
  IoMailOpenOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLaptopOutline,

} from 'react-icons/io5';

import Head from 'next/head';
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
const Body = () => {
    return (
      <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text textTransform={'uppercase'} color={'blue.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('blue.50', 'blue.900')} p={2} alignSelf={'flex-start'} rounded={'md'}>
            About Us
          </Text>
          <Heading>Fancy Heading</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
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
                <Icon as={IoMailOpenOutline} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Email ID'}
            />
            <Feature
              icon={<Icon as={IoLaptopOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text={'Website'}
            />
            <Feature
              icon={<Icon as={IoLogoFacebook} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Facebook'}
            />
            <Feature
              icon={
                <Icon as={IoLogoInstagram} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Instagram'}
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

      <Text textTransform={'uppercase'} color={'red.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('red.50', 'red.900')} p={2} alignSelf={'flex-start'} rounded={'md'} mt={50} paddingRight={2}>
            Upcoming Events
          </Text>
      <Text textTransform={'uppercase'} color={'red.400'} fontWeight={600} fontSize={'sm'} bg={useColorModeValue('red.50', 'red.900')} p={2} alignSelf={'flex-start'} rounded={'md'} mt={50} paddingRight={2}>
            Previous Events
          </Text>
    </Container>

    )
}

export default Body