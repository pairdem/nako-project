import type { Metadata } from "next";
import "./globals.css";

// 1. Define your deployment base URL
const baseUrl = "https://nakodefensegroup.com"; // Replace with your exact custom domain

export const metadata: Metadata = {
  title: {
    default: "Nako Defense Group",
    template: "%s | Nako Defense Group", // Allows subpages to easily append their own title (e.g., "About Us | Nako Defense Group")
  },
  description: "Defense logistics, program support and compliant market access across West Africa.",
  icons: {
    icon: "/icon.svg",
  },
  // 2. Crucial for Vercel: This stops Google from indexing the .vercel.app deployment string
  alternates: {
    canonical: baseUrl,
  },
  // 3. Open Graph formatting for professional social media sharing (LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Nako Defense Group",
    description: "Defense logistics, program support and compliant market access across West Africa.",
    url: baseUrl,
    siteName: "Nako Defense Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // Place an explicit 1200x630px image in your /public folder for clean link previews
        width: 1200,
        height: 630,
        alt: "Nako Defense Group Operations",
      },
    ],
  },
};

// Interface definition to cleanly type your LayoutProps
interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
