import type { Metadata } from "next";
import "./globals.css";
import "@/components/selection.css";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Argus Cements — Grades, Plants & Ready-Mix",
  description:
    "Demo site for Argus Cements: Portland, rapid hardening, sulphate resistant, white cement, and ready-mix from three works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
