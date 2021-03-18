import React from "react";
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
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

class Clubs extends React.Component {
  constructor() {
    super();
  }

  state = {
    clubs: [],
  };

  componentDidMount() {
    this.getClubs();
  }

  getClubs = () => {
    console.log("Getting Clubs");
    axios
      .get("http://127.0.0.1:8000/api/clubs")
      .then((data) => this.setState({ clubs: data.data }));
  };

  Redirect_Club = (name) => {
    console.log("Sending you to Club Page ------------->");
    
  };

  render() {
    return (
      <div>
        {
        this.state.clubs.map((user, i) =>
        <Box bg="#fffff" border="2px" width="90%" ml="5%" mb="2px" flexDirection="row" onClick={() =>this.Redirect_Club(this.state.clubs[i]["club_name"])}>
          <Flex display="flex" flexDirection="row">
            {this.state.clubs.length !== 0 ? (
              <Text ml={3} mt={3} mb={3} fontWeight="bold">
                {this.state.clubs[i]["club_name"]}
              </Text>
            ) : null}

            {this.state.clubs.length !== 0 ? (
              <Text ml={3} mt={3} mb={3} fontWeight="light">
                {this.state.clubs[i]["name"]}
              </Text>
            ) : null}

            <Image ml="70%" mt={3} size="5px" src="https://i.pinimg.com/originals/71/72/16/7172161b580470deb78078669236d2c1.jpg" width="25px" height="25px"/>
            <Image mt={3} size="5px" src="https://i.pinimg.com/originals/1d/ba/53/1dba53feeadf1a746f160396a6401135.png" width="25px" height="25px" />
          </Flex>
        </Box>
      )
      }
      </div>
    );
  }
}

export default Clubs;
