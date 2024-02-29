import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/utils/cn";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html suppressHydrationWarning className={`${inter.variable}`}>
      <body className={cn("flex bg-background  min-h-screen flex-col font-inter antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className={inter.variable}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
