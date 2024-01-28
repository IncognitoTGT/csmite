"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Update classes here based on changes in the parent class

    return () => {
      // Clean up any resources if needed
    };
  }, [/* Add dependencies here that trigger the update */]);

  return (
    <ThemeProvider defaultTheme="mocha" enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
