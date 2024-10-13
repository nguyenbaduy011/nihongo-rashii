import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "@/styles/globals.css";
const epilogue = Epilogue({ subsets: ["latin"] });
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} flex flex-grow flex-col`}>
        <SessionProvider>
          <Header />
          <main className="flex-1" style={{ minHeight: `calc(100vh - 80px)` }}>
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
