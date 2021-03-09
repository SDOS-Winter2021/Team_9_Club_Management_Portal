import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Box,
    Image,
    Badge,
    Text,
    Icon,
    Stack,
    Avatar,
    AvatarBadge,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    FormLabel,
    Input,
    FormHelperText,
    FormErrorMessage,
    Grid,
    Switch,
    InputGroup,
    InputRightElement,
    Flex,
    Tag,
    Heading
  } from '@chakra-ui/react'

const Clubs = () => {
    return (
        <div>
            <Box bg="#fffff" border="2px" width="90%" ml="5%" mb="2px" flexDirection="row">
      <Flex display="flex" flexDirection="row">
        <Text ml={3} mt={3} mb={3} fontWeight="bold">Club 1</Text>
        <Text ml={3} mt={3} mb={3} fontWeight="light">Club Description 1 Liner</Text>
        <Image ml="70%" mt={3} size="5px" src="https://i.pinimg.com/originals/71/72/16/7172161b580470deb78078669236d2c1.jpg" width="25px" height="25px"/>
        <Image mt={3} size="5px" src="https://i.pinimg.com/originals/1d/ba/53/1dba53feeadf1a746f160396a6401135.png" width="25px" height="25px"/>
      </Flex></Box>
    
      <Box bg="#fffff" border="2px" width="90%" ml="5%" mb="2px" flexDirection="row">
      <Flex display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
        <Text ml={3} mt={3} mb={3} fontWeight="bold">Club 2</Text>
        <Text ml={3} mt={3} mb={3} fontWeight="light">Club Description 1 Liner</Text>
        <Image ml="70%" mt={3} size="5px" src="https://i.pinimg.com/originals/71/72/16/7172161b580470deb78078669236d2c1.jpg" width="25px" height="25px"/>
        <Image mt={3} size="5px" src="https://i.pinimg.com/originals/1d/ba/53/1dba53feeadf1a746f160396a6401135.png" width="25px" height="25px"/>
      </Flex></Box>
        </div>
    )
}

export default Clubs
