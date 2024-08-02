import "../app/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sobokkiworld",
  description: "Generated by soeun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
