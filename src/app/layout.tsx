import Navigation from "@/components/Navigation";
import Container from "@/components/Container";

import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "900"] });

export const metadata = {
 title: "Coneygraph",
 description: "Coneygraph landingpage",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={poppins.className}>
    <header>
     <Container>
      <Navigation />
     </Container>
    </header>
    {children}
    <Footer />
   </body>
  </html>
 );
}
