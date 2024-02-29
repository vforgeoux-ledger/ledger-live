import Footer from "@/app/portfolio/(navigation)/footer";
import Header from "@/app/portfolio/(navigation)/header";
import { cn } from "@/utils/cn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("flex bg-background min-h-screen flex-col font-inter antialiased")}>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
}
