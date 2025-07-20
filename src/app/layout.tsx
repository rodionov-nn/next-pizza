import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Full stack Next.js web application of online Pizza shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable} antialiased`}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
