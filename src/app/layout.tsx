import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import "./css/main.css";

export const metadata: Metadata = {
  title: "Landmark Financial Corporation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
