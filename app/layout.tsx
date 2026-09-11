import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nako Defense Group | Operational reach",
  description: "Defense logistics, program support and compliant market access across West Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
