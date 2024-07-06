"use client";

import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Hero() {
  return (
    <Box
      className="hero"
      height={{ base: "50vh", md: "100vh" }}
      backgroundImage={"url('/hero.jpg')"}
      backgroundPosition={"bottom center"}
      backgroundSize={"cover"}
    >
      <Container maxW="container.lg">
        <VStack
          color={"white"}
          alignItems={"start"}
          justifyContent="center"
          height={{ base: "50vh", md: "100vh" }}
          spacing={{ base: "1rem", md: "2rem" }}
        >
          <Heading
            className="hero__heading"
            as="h1"
            size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Placeholder Heading
          </Heading>
          <Text
            className="hero__text"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight={"semibold"}
          >
            Lorem ipsum dolor sit amet.
          </Text>
          <HStack spacing={{ base: 3, md: 4, lg: 6 }} wrap={"wrap"}>
            <Button
              className="hero__cta"
              as="a"
              href="/about"
              bgColor="yellow.500"
              border="1px"
              borderColor="transparent"
              color="white"
              _hover={{
                bgColor: "transparent",
                borderColor: "yellow.500",
                color: "yellow.500",
                textDecoration: "none",
              }}
            >
              About us
              <Icon
                className="hero__cta-icon"
                h={5}
                w={5}
                as={ChevronRightIcon}
              />
            </Button>
            <Button
              className="hero__cta"
              as="a"
              href="/services"
              bgColor="yellow.500"
              border="1px"
              borderColor="transparent"
              color="white"
              _hover={{
                bgColor: "transparent",
                borderColor: "yellow.500",
                color: "yellow.500",
                textDecoration: "none",
              }}
            >
              View our services
              <Icon
                className="hero__cta-icon"
                h={5}
                w={5}
                as={ChevronRightIcon}
              />
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
