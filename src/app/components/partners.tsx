"use client";
// https://medium.com/geekculture/using-owl-carousel-with-nextjs-e63a166225b0
import Script from "next/script";

import Slider from "../js/slider";

import { Box, Container, Heading } from "@chakra-ui/react";

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
