import{Flex,  
    Box,
    Image,
    Badge,
    Text,
    Icon} from '@chakra-ui/react'


import React from 'react'

const Header = () => {
    return (
        <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={4}
         >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold">
            ⚡️Club Management Portal
          </Text>
          <Badge variant="subtle" variantColor="pink" ml={1}>
            BETA
          </Badge>
        </Flex>
        <Text color="gray.500">Sup Bitches</Text>
      </Flex>
    )
}

export default Header
