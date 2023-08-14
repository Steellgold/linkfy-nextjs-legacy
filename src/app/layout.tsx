/* eslint-disable camelcase */
import { ThemeProvider } from "@/lib/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import { Providers } from "./providers";
import "./tailwind.css";
export { metadata } from "@/lib/configs/metadata";

const os = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={cn("bg-background h-full", os.className)}>
        <Analytics />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
