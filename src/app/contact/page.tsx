"use client";

import { useForm } from "react-hook-form";
import Form from "./form";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box>
      <Box
        className="contact-hero"
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
              className="contact-hero__heading"
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Contact Us
            </Heading>
            <Text
              className="contact-hero__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Lorem ipsum dolor sit amet.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Flex className="contact" py={{ base: 8, md: 24 }}>
        <Container maxWidth={"container.lg"}>
          <Box
          // maxW={{ base: "100%", lg: "50%" }}
          >
            <Box pb={8}>
              <Heading className="contact__heading">
                Placeholder heading text
              </Heading>
            </Box>
            <Form />
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name" className="contact__form-label">
                First name
              </FormLabel>
              <Input
                id="firstname"
                className="contact__form-input"
                type="text"
                placeholder="John"
                {...register("First name", {
                  required: "This is required.",
                  min: 1,
                })}
              />
              <FormErrorMessage>
                {errors.firstname && errors.firstname.message}
              </FormErrorMessage>
            </FormControl>

            <FormLabel htmlFor="name" className="contact__form-label">
              Last name
            </FormLabel>
            <Input
              className="contact__form-input"
              type="text"
              placeholder="Doe"
              {...register("Last name", {
                required: "This is required.",
                maxLength: 100,
              })}
            />

            <FormLabel htmlFor="name" className="contact__form-label">
              Email
            </FormLabel>
            <Input
              className="contact__form-input"
              type="email"
              placeholder="johndoe@email.com"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <FormLabel htmlFor="name" className="contact__form-label">
              Mobile number
            </FormLabel>
            <Input
              className="contact__form-input"
              type="tel"
              placeholder="0123 456 789"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />

            <Input type="submit" className="contact__form-btn" />
          </form> */}
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}
