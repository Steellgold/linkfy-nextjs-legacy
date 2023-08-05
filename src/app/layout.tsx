/* eslint-disable camelcase */
import { HomeLayoutGradient } from "@/lib/components/layout/gradient";
import { ThemeProvider } from "@/lib/components/theme-provider";
import type { Component } from "@/lib/utils/component";
export { metadata } from "@/lib/configs/metadata";
import { Navbar } from "@/lib/molecules/navbar";
import type { PropsWithChildren } from "react";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./tailwind.css";


const os = Open_Sans({ subsets: ["latin"] });

const RootLayout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-white dark:bg-[#09090b]", os.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <HomeLayoutGradient />

          <div className="relative">
            <Navbar />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;