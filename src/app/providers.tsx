"use client";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider defaultTheme="mocha" themes={["mocha", "macchiato","frappe","latte"]} enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
