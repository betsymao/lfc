"use client";

import { Container, Box, Heading, Text } from "@chakra-ui/react";

export default function Overview() {
  return (
    <Box pt={{ base: 8, md: 24 }}>
      <Container maxW={"container.lg"}>
        <Heading>Overview</Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore a,
          voluptas nostrum cum repudiandae eos eaque totam. Veniam tenetur natus
          mollitia, magni eligendi ipsam. Laborum excepturi maxime facilis ea
          molestiae?
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore a,
          voluptas nostrum cum repudiandae eos eaque totam. Veniam tenetur natus
          mollitia, magni eligendi ipsam. Laborum excepturi maxime facilis ea
          molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus similique illum dolor illo maiores autem ut non doloribus
          ducimus ratione?
        </Text>
      </Container>
    </Box>
  );
}
