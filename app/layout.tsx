import type { Metadata } from "next";
import "./globals.css";
import { titilliumWeb } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MaeztraTeste",
  description: "Teste para a Maeztra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${titilliumWeb.className} bg-surfacePrimary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
