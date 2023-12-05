import React from "react";
import Navigation from "./components/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen items-center bg-white text-black dark:bg-black dark:text-white">
      <Navigation />
      <div className="flex min-h-screen mt-24 md:mt-36 mx-6 lg:w-1/3">
        {children}
      </div>
    </main>
  );
};

export default Layout;
