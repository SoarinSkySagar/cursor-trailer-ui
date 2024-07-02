import { Inter } from "next/font/google";
import "./globals.css";
import PixelTrailCanvas from "@/components/PixelTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <PixelTrailCanvas 
        pixelSize={30} 
        pixelColor="255, 0, 0" // Red color
        fadeSpeed={0.01} 
        trailDuration={50}
      />
        {children}</body>
    </html>
  );
}
