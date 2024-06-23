import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Heading</h1>

      <Link href="/about/director">Director</Link>
      <Link href="/about/overview">Overview</Link>
      <Link href="/about/partners">Partners</Link>

      <Link href="/services/first-home-buyers">First Home Buyers</Link>
      <Link href="/services/home-upgrade">Home Upgrade</Link>
      <Link href="/services/investment-property-loans">
        Investment Property Loans
      </Link>
      <Link href="/services/refinancing">Refinancing</Link>

      <Link href="/contact">Contact</Link>
    </main>
  );
}
