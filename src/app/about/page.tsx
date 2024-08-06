"use client";

import { Container, Box, Heading } from "@chakra-ui/react";
import Overview from "./overview";
import Director from "./director";
import Partners from "../components/partners";

export default function AboutUs() {
  return (
    <Box>
      <Overview />
      <Director />
      <Partners />
    </Box>
  );
}
