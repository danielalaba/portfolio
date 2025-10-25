import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/glass-morph.css";

export const metadata: Metadata = {
  title: "daniel.dev",
  description: "Portfolio website of Daniel Alaba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
