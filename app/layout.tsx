import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { business, serviceAreaLine } from "@/lib/business";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Carlos Reyes Lawn Service | Bradenton, FL Lawn Care & Landscaping",
  description:
    "Family-owned lawn care and landscaping in Bradenton, Sarasota, Venice, Casey Key, and Siesta Key. Mowing, fertilization, irrigation, sod, and more. 5.0-star rated. 20% off your first month.",
  keywords: [
    "lawn care Bradenton",
    "lawn service Sarasota",
    "landscaping Venice FL",
    "lawn maintenance Siesta Key",
    "sod installation",
    "irrigation repair",
  ],
  openGraph: {
    type: "website",
    title: "Carlos Reyes Lawn Service | Bradenton, FL Lawn Care & Landscaping",
    description:
      "Family-owned, 5.0-star lawn care and landscaping serving Bradenton, Sarasota, Venice, Casey Key, and Siesta Key. 20% off your first month.",
    url: business.url,
    siteName: business.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Reyes Lawn Service | Bradenton, FL Lawn Care",
    description:
      "Family-owned, 5.0-star lawn care and landscaping serving the Bradenton–Sarasota area. 20% off your first month.",
  },
  alternates: { canonical: business.url },
};

// LocalBusiness structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  image: `${business.url}/og.png`,
  url: business.url,
  telephone: business.phoneHref.replace("tel:", ""),
  email: business.email,
  priceRange: "$$",
  description:
    "Family-owned lawn care and landscaping serving the Bradenton and Sarasota area for 10+ years.",
  areaServed: business.serviceArea.map((name) => ({
    "@type": "City",
    name,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "27",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        {/* Google Search Console verification — paste the content value when available. */}
        {/* <meta name="google-site-verification" content="" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-green-900 focus:px-5 focus:py-2 focus:text-sand"
        >
          Skip to content
        </a>
        {children}
        {/* Service area: {serviceAreaLine} */}
      </body>
    </html>
  );
}
