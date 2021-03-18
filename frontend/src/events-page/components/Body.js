import React, { Component, ReactNode } from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import Head from "next/head";

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="white">
        {text}
      </Text>
    </Stack>
  );
};
const Body = () => {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "row", lg: "row" }}>
          <Stack>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Stack
                flex={1}
                color={"gray.400"}
                justify={{ lg: "center" }}
                py={{ base: 4, md: 20, xl: 5 }}
              >
                <Box mb={{ base: 8, md: 20 }}>
                  <Text fontSize={"xl"} color={"white"}>
                    Event Description
                  </Text>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      <Text
                        fontFamily={"heading"}
                        fontSize={"3xl"}
                        color={"white"}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                      <Text fontSize={"xl"} color={"gray.400"}>
                        {stat.content}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Stack>
          </Stack>
          <Stack paddingLeft="500">
            <Image
              src="https://i.pinimg.com/736x/43/29/c2/4329c2824fec2873b5e0569180e482cf.jpg"
              width="300px"
              height="500px"
            />
          </Stack>
        </Stack>
        <Flex flex={1} />
        <Text fontSize={"3xl"} color={"white"} paddingTop="100">
          {" "}
          Admin Information
        </Text>
        <Stack direction={{ base: "row", lg: "row" }}>
          <Stack>
            <Feature
              mt={10}
              icon={<Icon as={IoPencil} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Edit"}
            />
          </Stack>
          <Stack ml="100">
            <Feature
              mt={10}
              icon={
                <Icon as={IoTrashOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Delete"}
            />
          </Stack>
        </Stack>
        <Stack direction={{ base: "row", lg: "row" }}>
          <Stack>
            <Text fontSize={"xl"} color={"white"} paddingTop="100">
              {" "}
              Club Receipt
            </Text>
            <Image
              src="https://templates.invoicehome.com/receipt-template-us-band-blue-750px.png"
              width="300px"
              height="500px"
            />
          </Stack>
          <Stack paddingLeft="300">
            <Text fontSize={"xl"} color={"white"} paddingTop="100">
              {" "}
              Admin Receipt
            </Text>
            <Image
              src="https://templates.invoicehome.com/receipt-template-us-band-blue-750px.png"
              width="300px"
              height="500px"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Location",
    content: (
      <>
        <StatsText>Date Time</StatsText> Location
      </>
    ),
  },
  {
    title: "Pre-Reqs",
    content: (
      <>
        <StatsText>None</StatsText>
      </>
    ),
  },
  {
    title: "Prize Money",
    content: (
      <>
        <StatsText>10k</StatsText>
      </>
    ),
  },
  {
    title: "Additional Info",
    content: (
      <>
        <StatsText>Nop</StatsText>
      </>
    ),
  },
];
export default Body;
