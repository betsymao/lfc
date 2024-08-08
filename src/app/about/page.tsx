"use client";

import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";
import Overview from "./overview";
import Director from "./director";
import Partners from "../components/partners";

export default function AboutUs() {
  return (
    <Box>
      <Box
        className="about-hero"
        height={{ base: "25vh", md: "50vh" }}
        backgroundImage={"url('/about.jpg')"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Container maxW="container.lg">
          <VStack
            color={"white"}
            alignItems={"start"}
            justifyContent="center"
            height={{ base: "25vh", md: "50vh" }}
            spacing={{ base: "1rem", md: "2rem" }}
          >
            <Heading
              className="about-hero__heading"
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              About Us
            </Heading>
            <Text
              className="about-hero__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Overview />
      <Director />
      <Partners />
    </Box>
  );
}
