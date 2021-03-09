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

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
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
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
      <Box display="flex" flexDirection="column" alignItems="left" justifyContent="center" p={10}>
        <Text
          fontSize="lg"
          lineHeight="normal"
          textAlign="center"
          mb={5}
          color="twitter.900"
          maxWidth="sm"
        >
          Event 1
        </Text>
        <Box
          bg="#ffffff"
          rounded="lg"
          width="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
        >
          <Box>
            <Image
              size="100px"
              fallbackSrc="https://via.placeholder.com/150"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              width="100%"
              height="245px"
              minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                variantColor="teal"
                mr={2}
                rounded="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              Event Name
            </Text>
            <Text fontSize="sm" mb={3}>
              Club Name
            </Text>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Icon name="star" color="yellow.400" mr={1} />
              <Text fontWeight="bold" mr={1}>
                Date Time
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="left" justifyContent="center" p={10}>
        <Text
          fontSize="lg"
          lineHeight="normal"
          textAlign="center"
          mb={5}
          color="twitter.900"
          maxWidth="sm"
        >
          Event 2
        </Text>
        <Box
          bg="#ffffff"
          rounded="lg"
          width="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
        >
          <Box>
            <Image
              size="100px"
              fallbackSrc="https://via.placeholder.com/150"
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              width="100%"
              height="245px"
              minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                variantColor="teal"
                mr={2}
                rounded="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              Event Name
            </Text>
            <Text fontSize="sm" mb={3}>
              Club Name
            </Text>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Icon name="star" color="yellow.400" mr={1} />
              <Text fontWeight="bold" mr={1}>
                Date Time
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="left" justifyContent="center" p={10}>
        <Text
          fontSize="lg"
          lineHeight="normal"
          textAlign="center"
          mb={5}
          color="twitter.900"
          maxWidth="sm"
        >
          Event 3
        </Text>
        <Box
          bg="#ffffff"
          rounded="lg"
          width="sm"
          minHeight="sm"
          border="1px solid lightgrey"
          overflow="hidden"
        >
          <Box>
            <Image
              size="100px"
              fallbackSrc="https://via.placeholder.com/150"
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              width="100%"
              height="245px"
              minHeight="245px"
            />
          </Box>
          <Box p={5} pb={8}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              mb={1}
              flexDirection="row"
            >
              <Badge
                variant="subtle"
                variantColor="teal"
                mr={2}
                rounded="lg"
                pl={2}
                pr={2}
              >
                NEW
              </Badge>
            </Box>
            <Text fontWeight="bold" fontSize="xl">
              Event Name
            </Text>
            <Text fontSize="sm" mb={3}>
              Club Name
            </Text>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Icon name="star" color="yellow.400" mr={1} />
              <Text fontWeight="bold" mr={1}>
                Date Time
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>

      <Box bg="#fffff" border="2px" width="90%" ml="5%">
        <Text ml={3} mt={3} mb={3} fontWeight="bold">Club 1</Text>
        <Image size="5px" fle src="https://i.pinimg.com/originals/71/72/16/7172161b580470deb78078669236d2c1.jpg" width="25px" height="25px"/>
        <Image size="5px" align="right" fallbackSrc="https://via.placeholder.com/150" src="https://i.pinimg.com/originals/1d/ba/53/1dba53feeadf1a746f160396a6401135.png" width="25px" height="25px"/>
      </Box>
    
    
  </ThemeProvider>
)

export default App
