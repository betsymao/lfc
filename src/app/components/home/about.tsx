"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

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
    <Box py={10}>
      <Container maxW={"container.lg"}>
        <Box>
          <Heading>Lorem ipsum dolor sit amet consectetur</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            obcaecati quasi id consectetur? Ducimus omnis libero minima
            dignissimos id. Molestias tempora a, ipsam, tenetur quia sequi
            libero atque voluptatem et hic non, commodi ex doloribus sunt culpa
            deserunt voluptate laudantium.
          </Text>
          <Button as="a">Learn more</Button>
        </Box>
      </Container>
    </Box>
  );
}
