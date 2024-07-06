"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(4)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function About() {
  return (
    <Box
      className="about"
      height={"100%"}
      backgroundImage={"url('/about.jpg')"}
      backgroundPosition={"70% 35%"}
      backgroundSize={"cover"}
      py={{ base: 8, md: 24 }}
    >
      <Container maxW={"container.lg"}>
        <VStack
          color={"white"}
          alignItems={"start"}
          justifyContent={"space-between"}
          height={"100%"}
          spacing={{ base: "1rem", md: "2rem" }}
        >
          <Heading className="about__heading">
            Lorem ipsum dolor sit amet consectetur
          </Heading>
          <Text className="about__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            obcaecati quasi id consectetur? Ducimus omnis libero minima
            dignissimos id. Molestias tempora a, ipsam, tenetur quia sequi
            libero atque voluptatem et hic non, commodi ex doloribus sunt culpa
            deserunt voluptate laudantium.
          </Text>
          <Button
            className="about__cta"
            as="a"
            href="/"
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
            Learn more
            <Icon
              className="about__cta-icon"
              h={5}
              w={5}
              as={ChevronRightIcon}
            />
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
