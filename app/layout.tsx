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

          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '28px 48px', position: 'relative', zIndex: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 300, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#ffffff' }}>
                <div style={{ fontSize: '14px' }}>FRANCESCA RESTELLI</div>
                <div style={{ fontSize: '11px', opacity: 0.85 }}>DIGITAL ARCHITECT FOR CLASSICAL MUSIC</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', pointerEvents: 'auto' }}>
              <a href="mailto:francesres@icloud.com" style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff', textDecoration: 'none', fontSize: '13px', opacity: 0.9 }}>
                <Mail size={16} className="icon-contact" />
                <span style={{ letterSpacing: '0.06em' }}>francesres@icloud.com</span>
              </a>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href="https://www.instagram.com/francescarestelli_webiker/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={18} className="icon-contact" />
                </a>
                <a href="https://www.linkedin.com/in/francesca-restelli-413b6376" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} className="icon-contact" />
                </a>
                <a href="https://github.com/francescarestelli96-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} className="icon-contact" />
                </a>
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
