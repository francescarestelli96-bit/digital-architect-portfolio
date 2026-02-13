import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Mail, Instagram, Linkedin, Github } from "./components/Icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Francesca Restelli | Digital Architect for Classical Music",
  description: "Digital architect specializing in elegant, minimalist web solutions for classical music and cultural projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="liquid-gradient" style={{ minHeight: '100dvh' }}>
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} aria-hidden>
            <div className="film-grain" />
          </div>

          <header style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '28px 48px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, pointerEvents: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', pointerEvents: 'auto' }}>
              <div style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 300, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#ffffff' }}>
                <div style={{ fontSize: 'clamp(18px, 2.6vw, 26px)', lineHeight: 1 }}>{'FRANCESCA RESTELLI'}</div>
                <div style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', opacity: 0.95 }}>{'DIGITAL ARCHITECT FOR CLASSICAL MUSIC'}</div>
              </div>
            </div>
          </header>

          <main style={{ position: 'relative', zIndex: 10 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
