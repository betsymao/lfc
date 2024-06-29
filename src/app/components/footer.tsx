"use client";

import { Link } from "@chakra-ui/next-js";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2} color={"yellow.500"}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Container
        as={Stack}
        // maxW="992px"
        maxW="container.lg"
        // px={{ base: 4, lg: 0 }}
        pt={{ base: 4, md: 10 }}
        pb={4}
      >
        <SimpleGrid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 2fr 2fr 2fr",
          }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>About Us</ListHeader>
            <Box>
              <Link href="/about/director">Director</Link>
            </Box>
            <Box>
              <Link href="/about/overview">Overview</Link>
            </Box>
            <Box>
              <Link href="/about/partners">Partners</Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            <Box>
              <Link href="/services/first-home-buyers">First Home Buyers</Link>
            </Box>
            <Box>
              <Link href="/services/home-upgrade">Home Upgrade</Link>
            </Box>
            <Box>
              <Link href="/services/investment-property-loans">
                Investment Property Loans
              </Link>
            </Box>
            <Box>
              <Link href="/services/refinancing">Refinancing</Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Mortgage Resources</ListHeader>
            <Box>
              <Link href="https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty">
                Land Transfer (Stamp) Duty Calculator
              </Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Box>
              <Text>
                {/* <Text as="b">Lawrence Mao</Text>
                <br></br>
                Director/Senior Mortgage Advisor
                <br></br>
                <br></br> */}
                <Text as="b">Address:</Text> Suite 10/1 Main St,<br></br>
                Box Hill VIC 3128
                <br></br>
                <br></br>
                <Text as="b">Mobile:</Text> 0413 108 186
                <br></br>
                <br></br>
                <Text as="b">Email:</Text> law@landmarkfinancial.com.au
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>

        <Flex
          borderTop={"1px solid"}
          borderColor={"gray.700"}
          direction={{ base: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align={{ md: "flex-end" }}
          mt={{ base: 2, md: 6 }}
        >
          <Box py={4}>
            <Text fontSize={"sm"}>
              Landmark Financial Corporation Pty Ltd.<br></br>
              Australian Credit License 123456789<br></br>
              ABN 1234567891234
            </Text>
          </Box>
          <Box py={4}>
            <Text fontSize={"sm"}>
              © 2024 Landmark Financial Corporation Pty Ltd.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
