import type { Metadata } from "next";
import "./globals.css";
import { barlow, barlowCondensed, bellefair } from "@/utils/font";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  description:
    "This is a solution to Space Tourism challenge on FrontEnd Master. Made with Next JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
        >
          <main className="relative flex min-h-svh flex-col">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
