import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuadavid.dev"),
  title: "Joshua David",
  openGraph: {
    title: "Joshua David",
    description:
      "Information Systems Penultimate @ Singapore Management University",
    authors: "Joshua David",
    images: "https://joshuadavid.dev/og.png",
  },
};

type ChildrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={raleway.className}
      suppressHydrationWarning={true}
    >
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ScrollToTop />
          <Navigation />
          <div className="flex min-h-screen px-6 py-8 md:mx-auto md:pt-12 pb-24 md:w-1/2 lg:w-1/3 bg-white text-black dark:bg-black dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
