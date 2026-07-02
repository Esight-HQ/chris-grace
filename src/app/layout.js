import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/style.scss";
import "../../public/assets/css/main.scss";

const montserrat = Montserrat({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Chris Edu solutions",
  description: "Your partner in education solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
