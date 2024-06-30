import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./ThemeProvider";
import Navigation from "./components/Navigation";
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
          <Navigation />
          <div className="flex min-h-screen bg-white px-6 py-8 pb-24 text-black dark:bg-black dark:text-white md:mx-auto md:w-1/2 md:pt-12 lg:w-1/3">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
