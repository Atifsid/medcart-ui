import "./globals.css";
import Header from "@/components/layout/Header";
import { poppins } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
