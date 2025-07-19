import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lambda | Moderne Datenlösungen für die Gesundheitsforschung",
  description: "Maßgeschneiderte Datenlösungen und interaktive Berichte für Krebsregister und Gesundheitsinstitutionen",
  keywords: ["Gesundheitsdaten", "Krebsregister", "Datenanalyse", "Dashboard", "Gesundheitsforschung"],
  authors: [{ name: 'Lambda' }],
  themeColor: '#065f46', // emerald-800
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 dark:text-slate-100 transition-colors duration-200`}>
        <div className="min-h-screen flex flex-col">
          <nav className="w-full py-4 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                <span className="mr-1">λ</span> Lambda
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Startseite
                </Link>
                <Link href="/cv" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Lebenslauf
                </Link>
              </div>
            </div>
          </nav>
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            © {new Date().getFullYear()} Lambda: moderne Datenlösungen für die Gesundheitsforschung. Alle Rechte vorbehalten.
          </footer>
        </div>
      </body>
    </html>
  );
}
