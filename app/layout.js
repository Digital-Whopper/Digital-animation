import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderSection from "./component/HeaderSection";
import FooterSection from "./component/FooterSection";
import Preloader from "./component/Preloader";
import SocialIcons from "./component/SocialIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Digital Marketing Agency in Jaipur | Digital Whopper",
  description: "Tired of searching? Digital Whopper is the best digital marketing agency in Jaipur offering SEO, performance marketing, web development, and E-commerce solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        {/* Add the font CSS link here */}
        <link
          rel="stylesheet"
          href="https://examplecdn.com/fonts/samsungsharpsans.css"
        />
        <link
  rel="stylesheet"
  href="https://db.onlinewebfonts.com/c/17cc568f8a73e07cf3ad16b2bdbf43c2?family=SamsungOne-400"
/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E1E1E1]`}
      >
      <HeaderSection/>

<Preloader/>

        {children}
<a href="https://wa.me/916200379161" target="_blank" className="fixed right-0 top-1/2 transform 
translate-x-[25%] rotate-[-90deg] text-black px-[10px] py-[10px] flex items-center justify-center
 text-[18px] no-underline z-[1000]">
let’s talk 
<img src="/whatsapp-icon.png" />

</a>
<SocialIcons/>
        <FooterSection/>
      </body>
    </html>
  );
}
