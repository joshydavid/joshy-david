import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ReactNode } from "react";
import Navigation from "./components/Navigation";
import { BIO, EXTERNAL_LINKS, Theme } from "./constant";
import "./globals.css";
import { TanStackProvider } from "./TanStackProvider";
import { ThemeProvider } from "./ThemeProvider";

const raleway = Raleway({
  subsets: ["latin"],
});

const { OPEN_GRAPH } = EXTERNAL_LINKS;
const { NAME, DESCRIPTION, SITE_URL } = BIO;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: NAME,
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    authors: NAME,
    images: OPEN_GRAPH,
  },
};

type ChildrenProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html
      lang="en"
      className={raleway.className}
      suppressHydrationWarning={true}
    >
      <body className="bg-white dark:bg-stone-950">
        <TanStackProvider>
          <ThemeProvider attribute="class" defaultTheme={Theme.DARK}>
            <Navigation />
            <div className="flex min-h-screen bg-white px-6 py-8 pb-24 text-black dark:bg-stone-950 dark:text-white md:mx-auto md:w-1/2 md:pt-12 lg:w-1/3">
              {children}
            </div>
          </ThemeProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
