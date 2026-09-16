import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nako Defense Group",
  description: "Defense logistics, program support and compliant market access across West Africa.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
