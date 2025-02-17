import Footer from "@/components/Footer";
import Header from "@/components/shared/header";
import "@/assets/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col" suppressHydrationWarning={true}>
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
