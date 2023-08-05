/* eslint-disable camelcase */
import { HomeLayoutGradient } from "@/lib/components/layout/gradient";
import { ThemeProvider } from "@/lib/components/theme-provider";
import { Navbar } from "@/lib/molecules/navbar";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import "./tailwind.css";
export { metadata } from "@/lib/configs/metadata";

const os = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-white dark:bg-[#09090b]", os.className)}>
        <Analytics />

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
}
