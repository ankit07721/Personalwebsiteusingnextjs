import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankit Gyanwali | Front-End Developer",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} bg-gray-50 text-gray-800 flex flex-col min-h-screen`}
        // 🛑 FIX: This prop safely prevents the hydration error
        // caused by browser extensions modifying the body tag's attributes.
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
