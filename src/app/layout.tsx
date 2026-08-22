import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hurray!",
  description: "Celebrate the moment with a little confetti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
