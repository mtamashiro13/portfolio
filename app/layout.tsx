import React from "react";

import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./providers/ThemeProvider";
import "./globals.css";
import SideCard from "./components/SideCard";
import { Container } from "@mui/material";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hello World",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Header />
          <Container
            maxWidth="lg"
            sx={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: 2 }}
          >
            <SideCard />
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
