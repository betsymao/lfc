"use client";
// https://medium.com/geekculture/using-owl-carousel-with-nextjs-e63a166225b0
import Script from "next/script";

import Slider from "../js/slider";

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
    <Box py={{ base: 8, md: 24 }}>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="../../js/main.js"
      />

      <Container maxW={"container.lg"}>
        <Heading>Partners</Heading>
        <Slider />
      </Container>
    </Box>
  );
}
