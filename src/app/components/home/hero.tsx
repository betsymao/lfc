"use client";

import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      height={{ base: "50vh", md: "100vh" }}
      backgroundImage={
        "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url('/hero.jpg')"
      }
      backgroundPosition={"bottom center"}
      backgroundSize={"cover"}
    >
      <Container maxW="container.lg">
        <VStack
          color={"white"}
          alignItems={{ base: "center", lg: "start" }}
          justifyContent="center"
          height={{ base: "50vh", md: "100vh" }}
          spacing={{ base: "0.75rem", md: "2rem" }}
        >
          <Heading as="h1" size={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Placeholder Heading
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight={"semibold"}
          >
            Lorem ipsum dolor sit amet.
          </Text>
          <HStack spacing={{ base: 2, md: 4, lg: 6 }}>
            <Button
              as="a"
              href="/about"
              bgColor="yellow.500"
              size={{ base: "md", md: "lg" }}
              _hover={{
                bgColor: "white",
                textDecoration: "none",
              }}
            >
              Learn more
              {/* <span>icon</span> */}
            </Button>
            <Button
              as="a"
              href="/services"
              bgColor="yellow.500"
              size={{ base: "md", md: "lg" }}
              _hover={{
                bgColor: "white",
                textDecoration: "none",
              }}
            >
              View our services
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
    // <Flex
    //   w={"full"}
    //   h={"100vh"}
    //   backgroundImage={
    //     "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/hero.jpg')"
    //   }
    //   backgroundSize={"cover"}
    //   backgroundPosition={"center center"}
    // >
    //   <VStack
    //     w={"full"}
    //     justify={"center"}
    //     px={useBreakpointValue({ base: 4, md: 8 })}
    //   >
    //     <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
    //       <Text
    //         color={"white"}
    //         fontWeight={700}
    //         lineHeight={1.2}
    //         fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
    //       >
    //         Lorem ipsum dolor
    //       </Text>
    //       <Stack direction={"row"}>
    //         <Button
    //           border={"2px solid transparent"}
    //           bg={"yellow.500"}
    //           color={"black"}
    //           rounded={"full"}
    //           size="lg"
    //           _hover={{
    //             bg: "transparent",
    //             border: "2px solid",
    //             borderColor: "yellow.500",
    //             color: "white",
    //           }}
    //         >
    //           About Us
    //         </Button>
    //         {/* <Button
    //           bg={"whiteAlpha.300"}
    //           rounded={"full"}
    //           color={"white"}
    //           _hover={{ bg: "whiteAlpha.500" }}
    //         >
    //           Show me more
    //         </Button> */}
    //       </Stack>
    //     </Stack>
    //   </VStack>
    // </Flex>
  );
}
