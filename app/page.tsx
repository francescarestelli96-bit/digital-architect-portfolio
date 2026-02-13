"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Github } from './components/Icons';
import Link from 'next/link'; // IMPORTANTE: aggiungiamo questo

const content = {
  it: {
    nav: ["ABOUT", "BIO", "PROGETTI", "CONTATTI"],
    // ... (resto del content IT uguale a prima)
    button1: "PROGETTI",
    button2: "CONTATTI",
    close: "CHIUDI",
    contactLinks: {
      email: "francesres@icloud.com",
      linkedin: "www.linkedin.com/in/francesca-restelli-413b6376",
      instagram: "https://www.instagram.com/francescarestelli_webiker/",
      github: "https://github.com/francescarestelli96-bit"
    }
  },
  en: {
    nav: ["ABOUT", "BIO", "PROJECTS", "CONTACTS"],
    // ... (resto del content EN uguale a prima)
    button1: "PROJECTS",
    button2: "CONTACT",
    close: "CLOSE",
    contactLinks: {
      email: "francesres@icloud.com",
      linkedin: "www.linkedin.com/in/francesca-restelli-413b6376",
      instagram: "https://www.instagram.com/francescarestelli_webiker/",
      github: "https://github.com/francescarestelli96-bit"
    }
  }
};

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('it');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  
  // @ts-ignore
  const t = content[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getModalContent = (section: string): string => {
    const sectionKey = section.toLowerCase() === 'bio' ? 'bio' : 'about';
    // @ts-ignore
    const contentText = t[sectionKey];
    return typeof contentText === 'string' ? contentText : '';
  };

  const handleNavClick = (item: string) => {
    const val = item.toLowerCase();
    // MODIFICA QUI: Non window.open, ma lasciamo che il router gestisca se serve o usiamo Link
    if (val === 'progetti' || val === 'projects') {
      window.location.href = '/progetti'; // Reindirizza alla tua nuova pagina
    } else {
      setActiveModal(item);
    }
  };

  if (!mounted) return <main className="liquid-gradient h-screen w-full" />;

  return (
    <main className="liquid-gradient relative h-screen w-full overflow-hidden" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HEADER NAV */}
      <div className="fixed top-0 left-0 right-0 px-4 sm:px-12 py-10 z-50 flex items-center justify-end">
        <nav className="flex gap-12">
          {t.nav.map((item: string) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-white font-bold tracking-[0.15em] uppercase text-[11px] cursor-pointer bg-none border-none transition-all"
              style={{ color: hoveredNav === item ? '#FFD700' : '#ffffff' }}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* BOTTONI CENTRALI */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="flex flex-col sm:flex-row gap-12">
          {/* MODIFICA QUI: Usiamo Link invece di <a> verso GitHub */}
          <Link href="/progetti" className="button-horizontal px-20 py-6 flex items-center justify-center no-underline w-72">
            <span className="text-white font-bold tracking-[0.3em] text-[18px]">
              {t.button1}
            </span>
          </Link>

          <button
            onClick={() => setActiveModal('CONTATTI')}
            className="button-horizontal px-20 py-6 flex items-center justify-center w-72"
          >
            <span className="text-white font-bold tracking-[0.3em] text-[18px]">
              {t.button2}
            </span>
          </button>
        </div>
      </div>

      {/* FOOTER NOTA LYDIA TAR */}
      <div className="fixed bottom-6 right-12 z-50 opacity-30">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#FFD700] font-bold">
            Access restricted to authorized personnel only
          </p>
      </div>

      {/* (Resto del codice: Selettore lingue e Modal rimangono uguali) */}
      {/* ... */}
      
    </main>
  );
}