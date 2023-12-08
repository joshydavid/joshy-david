import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Navigation from "./components/Navigation";
import Dropdown from "./components/Dropdown";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua David",
  openGraph: {
    title: "Joshua David",
    description:
      "Sophomore at the School of Computing and Information Systems, Singapore Management University",
    authors: "Joshua David",
    images: "https://joshuadavid.dev/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={raleway.className}
      suppressHydrationWarning={true}
    >
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <Dropdown />
          <div className="flex min-h-screen px-6 py-8 md:mx-auto md:py-36 md:w-1/2 lg:w-1/3 bg-white text-black dark:bg-black dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
