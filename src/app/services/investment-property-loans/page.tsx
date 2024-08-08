"use client";

import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";
export default function InvestmentPropertyLoans() {
  return (
    <Box>
      <Box
        className="services-hero"
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
              className="services-hero__heading"
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Investment Property Loans
            </Heading>
            <Text
              className="services-hero__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Heading>Placeholder heading text</Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore a,
            voluptas nostrum cum repudiandae eos eaque totam. Veniam tenetur
            natus mollitia, magni eligendi ipsam. Laborum excepturi maxime
            facilis ea molestiae?
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore a,
            voluptas nostrum cum repudiandae eos eaque totam. Veniam tenetur
            natus mollitia, magni eligendi ipsam. Laborum excepturi maxime
            facilis ea molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus similique illum dolor illo maiores autem ut
            non doloribus ducimus ratione?
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
