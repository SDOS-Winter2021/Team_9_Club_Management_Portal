import React, { Component, ReactNode, View } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import history from "./../../history";

const csrftoken = Cookies.get("csrftoken");

export default function Body() {
  const [name, setname] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [coord1, setcoord1] = React.useState("");
  const [coord2, setcoord2] = React.useState("");
  const [coord3, setcoord3] = React.useState("");
  const [coord1email, setcoord1email] = React.useState("");
  const [coord2email, setcoord2email] = React.useState("");
  const [coord3email, setcoord3email] = React.useState("");
  const [fblink, setfblink] = React.useState("");
  const [iglink, setiglink] = React.useState("");
  const [weblink, setweblink] = React.useState("");
  const [clubemail, setclubemail] = React.useState("");
  const [logo, setlogo] = React.useState("");

  const clubOut = async (request) => {
    console.log("Sending Post request to add club");
    console.log(request);
    let res = await axios.post(
      "https://iiitd-cms.herokuapp.com/api/clubinfo",
      request,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": csrftoken,
        },
      }
    );
    console.log(res);
    return await res.status;
  };

  const handleSubmit = async (event) => {
    var data = {
      name: name,
      description: description,
      coordinator1: coord1,
      coordinator2: coord2,
      coordinator3: coord3,
      coordinator1_email: coord1email,
      coordinator2_email: coord2email,
      coordinator3_email: coord3email,
      fb_link: fblink,
      ig_link: iglink,
      website_link: weblink,
      club_email: clubemail,
      // logo: logo,
    };

    if (
      data["name"] == "" ||
      data["description"] == "" ||
      data["coordinator1"] == "" ||
      data["coordinator1_email"] == "" ||
      data["club_email"] == ""
    ) {
      alert(
        "The following fields are required - Name, Description, Coodinator 1 Name, Coodinator 1 Email, Club Email"
      );
      return 0;
    } else {
      data = JSON.stringify(data);
      var club_info = new FormData();
      club_info.append("request", data);
      club_info.append("logo", logo);
      let eResponse = await clubOut(club_info);
      console.log(eResponse);
      return 1;
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Add Club Form</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Add Club Details
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord1" isRequired>
              <FormLabel>Name of Co-ordinator 1</FormLabel>
              <Input
                type="text"
                value={coord1}
                onChange={(e) => setcoord1(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord2">
              <FormLabel>Name of Co-ordinator 2</FormLabel>
              <Input
                type="text"
                value={coord2}
                onChange={(e) => setcoord2(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord3">
              <FormLabel>Name of Co-ordinator 3</FormLabel>
              <Input
                type="text"
                value={coord3}
                onChange={(e) => setcoord3(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord1email" isRequired>
              <FormLabel>Email ID of Co-ordinator 1</FormLabel>
              <Input
                type="text"
                value={coord1email}
                onChange={(e) => setcoord1email(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord2email">
              <FormLabel>Email ID of Co-ordinator 2</FormLabel>
              <Input
                type="text"
                value={coord2email}
                onChange={(e) => setcoord2email(e.target.value)}
              />
            </FormControl>
            <FormControl id="coord3email">
              <FormLabel>Email ID of Co-ordinator 3</FormLabel>
              <Input
                type="text"
                value={coord3email}
                onChange={(e) => setcoord3email(e.target.value)}
              />
            </FormControl>
            <FormControl id="clubemail" isRequired>
              <FormLabel>Email ID of Club</FormLabel>
              <Input
                type="text"
                value={clubemail}
                onChange={(e) => setclubemail(e.target.value)}
                required={true}
              />
            </FormControl>
            <FormControl id="fblink">
              <FormLabel>FB Link</FormLabel>
              <Input
                type="url"
                value={fblink}
                onChange={(e) => setfblink(e.target.value)}
              />
            </FormControl>
            <FormControl id="iglink">
              <FormLabel>Instagram Link</FormLabel>
              <Input
                type="url"
                value={iglink}
                onChange={(e) => setiglink(e.target.value)}
              />
            </FormControl>
            <FormControl id="weblink">
              <FormLabel>Website Link</FormLabel>
              <Input type="url" onChange={(e) => setweblink(e.target.value)} />
            </FormControl>
            <FormControl id="weblink">
              <FormLabel>Logo</FormLabel>
              <Input type="file" onChange={(e) => setlogo(e.target.files[0])} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                onClick={(e) => {
                  status = handleSubmit(e);
                  if (status == 1) {
                    alert("Club Created!");
                    history.push({
                      pathname: "/home",
                    });
                    location.reload();
                  }
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
