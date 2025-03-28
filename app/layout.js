import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


// Font files can be colocated inside of `pages`
const devil_breeze = localFont({ src: '../public/fonts/Devil_Breeze_Bold.ttf',variable: '--font-devil_breeze' });

const bimbo = localFont({ src: '../public/fonts/Bimbo_Trial.ttf',variable: '--font-bimbo' });

const poppins = Poppins({
  variable: "--font-poppins",
  weight: [ '400'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Crazy Bee",
  description: "Responsive & mobile optimized by Jaskaran Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${devil_breeze.variable} ${bimbo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
