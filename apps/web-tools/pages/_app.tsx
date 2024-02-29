import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
