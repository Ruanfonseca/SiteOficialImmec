import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { UserProvider } from "./context/usuarioContext/UsuarioContext";
import { ThemeProvider } from "./components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Immec Church",
  description: "Site oficial da Immec Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon/LogoImmecChurch.jpg" type="image/jpeg" />
        <title>Immec Church</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class" defaultTheme="system" enableSystem
          >
        <UserProvider>
            {children}
        </UserProvider>
         <Toaster />
         </ThemeProvider>
      </body>
    </html>
  );
}
