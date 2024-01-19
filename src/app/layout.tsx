import { Center, ChakraProvider, Flex, Grid } from "@chakra-ui/react";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../components/shop/ProductCard";
import { NavBar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer/footer";
import { CartProvider } from "../context/cart-context";
import { AuthProvider } from "../context/AuthCtx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "@/context/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ChakraProvider>
            <AuthProvider>
              <CartProvider>{children}</CartProvider>
            </AuthProvider>
          </ChakraProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
