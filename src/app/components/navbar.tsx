"use client";

import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Flex
        bg={"black"}
        color={"white"}
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 4 }}
      >
        {/* Navbar items: logo and nav */}
        <Flex flex={{ base: 1 }} align={"center"} justify={"start"}>
          {/* Brand logo */}
          <Box>
            <Link href="/">
              <Image src="/logo.svg" alt="Landmark Financial Corporation" />
            </Link>
          </Box>

          {/* Desktop nav */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Nav toggle */}
        <Flex align={"center"} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            colorScheme="yellow"
            variant={"outline"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      {/* Mobile nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "yellow.400";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                color={"black"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "yellow.400" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"black"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} color="black" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Link
        py={4}
        borderBottom={"1px solid"}
        borderColor={"gray.500"}
        as="a"
        href={href ?? "#"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"black"}>
          {label}
        </Text>
      </Link>

      <Stack>
        {children &&
          children.map((child) => (
            <Link as="a" key={child.label} color={"gray.500"} href={child.href}>
              {child.label}
            </Link>
          ))}
      </Stack>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Us",
    children: [
      {
        label: "Director",
        href: "/about/director",
      },
      {
        label: "Overview",
        href: "/about/overview",
      },
      {
        label: "Partners",
        href: "/about/partners",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "First Home Buyers",
        href: "/services/first-home-buyers",
      },
      {
        label: "Home Upgrade",
        href: "/services/home-upgrade",
      },
      {
        label: "Investment Property Loans",
        href: "/services/investment-property-loans",
      },
      {
        label: "Refinancing",
        href: "/services/refinancing",
      },
    ],
  },
  {
    label: "Mortgage Resources",
    children: [
      {
        label: "Land Transfer (Stamp) Duty Calculator",
        href: "https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
