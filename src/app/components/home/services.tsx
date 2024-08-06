"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, href }: CardProps) => {
  return (
    <Box
      className="services__item"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} justify={"space-between"} spacing={2}>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>

        <Link
          className="services__link"
          href={href}
          _hover={{
            color: "gray.500",
          }}
        >
          Learn more
          <Icon
            className="services__link-icon"
            h={5}
            w={5}
            as={ChevronRightIcon}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default function ServicesList() {
  return (
    <Box className="services" py={{ base: 8, md: 24 }}>
      <Container maxW={"container.lg"}>
        <Box pb="10">
          <Heading>Lorem ipsum dolor sit</Heading>
        </Box>
        <Grid
          className="services__list"
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <Card
            heading={"First Home Buyers"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/services/first-home-buyers"}
          />
          <Card
            heading={"Home Upgrade"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/services/home-upgrade"}
          />
          <Card
            heading={"Investment Property Loans"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/services/investment-property-loans"}
          />
          <Card
            heading={"Refinancing"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"/services/refinancing"}
          />
        </Grid>
      </Container>
    </Box>
  );
}
