import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
