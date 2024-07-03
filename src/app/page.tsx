"use client";
import { Link } from "@chakra-ui/next-js";

import Hero from "./components/home/hero";
import Services from "./components/home/services";
import About from "./components/home/about";
import Contact from "./components/home/contact";
import Partners from "./components/home/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Partners />
      <Contact />

      {/* <Link
        href="/about/director"
        color="blue.400"
        _hover={{ color: "blue.500" }}
      >
        Director
      </Link>
      <Link href="/about/overview">Overview</Link>
      <Link href="/about/partners">Partners</Link>

      <Link href="/services/first-home-buyers">First Home Buyers</Link>
      <Link href="/services/home-upgrade">Home Upgrade</Link>
      <Link href="/services/investment-property-loans">
        Investment Property Loans
      </Link>
      <Link href="/services/refinancing">Refinancing</Link>

      <Link href="/contact">Contact</Link> */}
    </>
  );
}
