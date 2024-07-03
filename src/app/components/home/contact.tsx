"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Box py={24}>
      <Container maxW={"container.lg"}>
        <Box pb={4}>
          <Heading>Contact</Heading>
        </Box>

        <Box border="1px" borderColor="gray.500" borderRadius="lg">
          <Box bg={"white"} p={{ base: 8, md: 10 }} color="#0B0E3F">
            <VStack spacing={5}>
              <FormControl id="name">
                <FormLabel>Your Name:</FormLabel>
                <InputGroup borderColor="gray.200">
                  <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.600" />
                  </InputLeftElement>
                  <Input type="text" size="md" placeholder="John Doe" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Phone:</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input type="text" size="md" placeholder="0123 456 789" />
                </InputGroup>
              </FormControl>

              <FormControl id="name">
                <FormLabel>Email:</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    size="md"
                    placeholder="johndoe@email.com"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Message:</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Enter your message"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button
                  variant="solid"
                  border="1px"
                  borderColor="transparent"
                  bg="yellow.500"
                  color="white"
                  _hover={{
                    borderColor: "yellow.500",
                    bg: "transparent",
                    color: "black",
                  }}
                >
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
