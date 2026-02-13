"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Github } from './components/Icons';
import Link from 'next/link';

const content = {
  it: {
    nav: ["ABOUT", "BIO", "PROGETTI", "CONTATTI"],
    name: "FRANCESCA RESTELLI",
    subtitle: "DIGITAL ARCHITECT FOR CLASSICAL MUSIC",
    about: `Credo nel less is more. Sottraggo il superfluo per far emergere l'essenziale. La mia ricerca si concentra sulla purezza della forma e sull'efficienza del codice, lasciando spazio all'opera musicale.`,
    bio: `Classe 1996. Sono cresciuta a pane e tecnologia in una Milano che corre, ma ho sempre avuto un debole per le storie delle persone. La mia carriera non è iniziata davanti a un terminale, ma nel mondo delle Risorse Umane. Perché ti dico questo? Perché prima di imparare a parlare con le macchine, ho imparato ad ascoltare le persone.

Dal Capitale Umano alle API: Il mio passaggio dall'HR allo sviluppo web non è stato un cambio di rotta, ma un'evoluzione naturale. Mi sono resa conto che volevo costruire gli strumenti che semplificano la vita delle persone, non solo gestirne i processi.

Oggi fondo la mia solidità tecnica (Next.js, React, API) con quella visione multidisciplinare che solo chi ha lavorato con le persone possiede. Non mi limito a scrivere codice: progetto soluzioni 'sartoriali' che hanno un'anima, un obiettivo e, soprattutto, un senso per chi le usa.

Motori, Design e Adrenalina: Cosa mi muove quando non sono connessa? Il dinamismo dei motori: Amo la velocità e la precisione millimetrica. C'è una bellezza cruda nella meccanica che cerco di riportare nella pulizia dei miei siti. Innovazione e Design: Vivo a Milano, ed è impossibile non lasciarsi ispirare dal mix di storico e futuristico che trovi ad ogni angolo. L'approccio umano: In un mondo di bot, credo ancora nel valore di una chiacchierata e di un progetto costruito su misura, proprio come un abito fatto a mano.

In breve: Metto ordine nel caos digitale con un approccio empatico e una precisione da ingegnere di pista. Se cerchi qualcuno che capisca il tuo business e lo trasformi in un prodotto tech che spacca, eccomi qui.`,
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
    name: "FRANCESCA RESTELLI",
    subtitle: "DIGITAL ARCHITECT FOR CLASSICAL MUSIC",
    about: `I believe in less is more. I subtract the superfluous to reveal the essential. My research focuses on the purity of form and code efficiency, leaving space for the musical work.`,
    bio: `Born in 1996. I grew up with tech in a fast-paced Milan, but I've always had a soft spot for people's stories. My career didn't start at a terminal, but in Human Resources. Why am I telling you this? Because before learning to talk to machines, I learned to listen to people.

From Human Capital to APIs: My transition from HR to web development was a natural evolution. I realized I wanted to build tools that simplify people's lives, not just manage their processes.

Today, I blend my technical expertise (Next.js, React, API) with the multidisciplinary vision that only someone who has worked with people possesses. I don't just write code: I design 'tailor-made' solutions that have a soul, a goal, and, above all, a meaning for those who use them.

Motors, Design, and Adrenaline: What moves me when I've offline? The dynamism of motors: I love speed and millimetric precision. There is a raw beauty in mechanics that I strive to bring to the cleanliness of my sites. Innovation and Design: Living in Milan, it's impossible not to be inspired by the mix of history and futurism at every corner. The human approach: In a world of bots, I still believe in the value of a conversation and a custom-built project, just like a handmade suit.

In short: I bring order to digital chaos with an empathetic approach and the precision of a track engineer. If you're looking for someone who understands your business and transforms it into a tech product that rocks, here I am.`,
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
  
  const t = content[lang as keyof typeof content];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getModalContent = (section: string): string => {
    const sectionKey = section.toLowerCase() === 'bio' ? 'bio' : 'about';
    const contentText = t[sectionKey as keyof typeof t];
    return typeof contentText === 'string' ? contentText : '';
  };

  const handleNavClick = (item: string) => {
    const val = item.toLowerCase();
    if (val === 'progetti' || val === 'projects') {
      window.location.href = '/progetti';
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
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
              className="text-white font-bold tracking-[0.15em] uppercase text-[11px] cursor-pointer bg-none border-none transition-all"
              style={{ color: hoveredNav === item ? '#FFD700' : '#ffffff' }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* BOTTONI CENTRALI */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="flex flex-col sm:flex-row gap-12">
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

      {/* FOOTER */}
      <div className="fixed bottom-6 right-12 z-50 opacity-30">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#FFD700] font-bold">
            Access restricted to authorized personnel only
          </p>
      </div>

      {/* LINGUE */}
      <div className="fixed bottom-12 left-24 flex gap-10 z-50">
        <button onClick={() => setLang('it')} className={`text-white font-bold text-[11px] tracking-[0.15em] bg-none border-none cursor-pointer ${lang === 'it' ? 'opacity-100 border-b border-[#FFD700]' : 'opacity-40'}`}>IT</button>
        <button onClick={() => setLang('en')} className={`text-white font-bold text-[11px] tracking-[0.15em] bg-none border-none cursor-pointer ${lang === 'en' ? 'opacity-100 border-b border-[#FFD700]' : 'opacity-40'}`}>EN</button>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl" onClick={() => setActiveModal(null)} style={{ backgroundColor: 'rgba(2, 6, 23, 0.96)' }}>
          <button className="absolute top-20 right-24 text-white font-bold text-[11px] tracking-[0.15em] uppercase bg-none border-none cursor-pointer">{t.close}</button>
          <div className="flex flex-col items-center justify-center max-w-4xl px-12" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-white font-bold tracking-[0.4em] mb-16 text-[88px] uppercase">{activeModal}</h2>
            
            {(activeModal.toLowerCase() === 'contatti' || activeModal.toLowerCase() === 'contacts') ? (
              <div className="w-full flex flex-col items-center gap-16">
                <div className="flex items-center gap-4">
                  <Mail size={24} />
                  <a href={`mailto:${t.contactLinks.email}`} className="text-white font-bold text-[18px] no-underline uppercase tracking-[0.08em] hover:text-[#FFD700]">{t.contactLinks.email}</a>
                </div>
                <div className="flex gap-12">
                  <a href={t.contactLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={32} /></a>
                  <a href={`https://${t.contactLinks.linkedin}`} target="_blank" rel="noopener noreferrer"><Linkedin size={32} /></a>
                  <a href={t.contactLinks.github} target="_blank" rel="noopener noreferrer"><Github size={32} /></a>
                </div>
              </div>
            ) : (
              <div className="max-h-[70vh] overflow-y-auto pr-8 w-full">
                <p className="text-slate-200 font-light text-center italic text-[17px] leading-[1.8] whitespace-pre-line" style={{ fontFamily: 'Georgia, serif' }}>
                  {getModalContent(activeModal)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}