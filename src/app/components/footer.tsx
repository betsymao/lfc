"use client";

import { Link } from "@chakra-ui/next-js";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Container as={Stack} maxW="992px" px={{ base: 4, lg: 0 }} pt={10} pb={4}>
        <SimpleGrid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            // lg: "2fr 1fr 1fr 1fr",
            lg: "1fr 2fr 2fr 2fr",
          }}
          spacing={8}
        >
          {/* <Stack spacing={6}>
            <Box>
              <Image
                src="/logo.svg"
                alt="Landmark Financial Corporation Alternative Logo"
              />
            </Box>
            <Text>
              <Text as="b">Lawrence Mao</Text>
              <br></br>
              Director/Senior Mortgage Advisor
              <br></br>
              <br></br>
              Suite 10/1 Main St, Box Hill VIC 3128<br></br>
              <Text as="b">Mobile:</Text> 0413 108 186<br></br>
              <Text as="b">Email:</Text> law@landmarkfinancial.com.au
            </Text>
          </Stack> */}
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
          direction={{ base: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align={{ md: "flex-end" }}
          mt={8}
        >
          <Box py={2}>
            <Text fontSize={"sm"}>
              Landmark Financial Corporation Pty Ltd.<br></br>
              Australian Credit License 123456789<br></br>
              ABN 1234567891234
            </Text>
          </Box>
          <Box py={2}>
            <Text fontSize={"sm"}>
              © 2024 Landmark Financial Corporation Pty Ltd.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
