"use client";

import { Container, Box, Heading, Text } from "@chakra-ui/react";

export default function Director() {
  return (
    <Box pt={{ base: 8, md: 24 }}>
      <Container maxW={"container.lg"}>
        <Heading>Directors</Heading>
      </Container>
    </Box>
  );
}
