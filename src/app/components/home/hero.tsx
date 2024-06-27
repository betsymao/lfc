"use client";

import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box></Box>
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
