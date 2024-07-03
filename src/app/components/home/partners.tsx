"use client";

import Script from "next/script";

import {
  Box,
  Container,
  Heading,
  Text,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Partners() {
  return (
    <Box py={10}>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="../../js/main.js"
      />

      <Container maxW={"container.lg"}>
        <Heading>Partners</Heading>
        <Text>Carousel of logos</Text>
      </Container>
    </Box>
  );
}
