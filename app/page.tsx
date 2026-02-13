"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Github } from './components/Icons';

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

Motors, Design, and Adrenaline: What moves me when I'm offline? The dynamism of motors: I love speed and millimetric precision. There is a raw beauty in mechanics that I strive to bring to the cleanliness of my sites. Innovation and Design: Living in Milan, it's impossible not to be inspired by the mix of history and futurism at every corner. The human approach: In a world of bots, I still believe in the value of a conversation and a custom-built project, just like a handmade suit.

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
    const content = t[sectionKey as keyof typeof t];
    return typeof content === 'string' ? content : '';
  };

  const handleNavClick = (item: string) => {
    if (item.toLowerCase() === 'progetti' || item.toLowerCase() === 'projects') {
      window.open('https://github.com/francescarestelli96-bit', '_blank');
    } else {
      setActiveModal(item);
    }
  };

  if (!mounted) {
    return (
      <main 
        className="liquid-gradient relative h-screen w-full overflow-hidden" 
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }} />
    );
  }

  return (
    <main 
      className="liquid-gradient relative h-screen w-full overflow-hidden" 
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 px-4 sm:px-8 md:px-12 lg:px-24 py-4 sm:py-6 md:py-10 z-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 md:h-44" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {/* BRANDING */}
        <div className="flex flex-col gap-0.5">
          <h1 
            className="text-white font-thin transition-all duration-500"
            style={{ 
              fontSize: 'clamp(18px, 6vw, 32px)', 
              letterSpacing: '0.5em',
              fontWeight: 100,
              lineHeight: 1,
              textShadow: activeModal ? '0 0 15px rgba(234, 179, 8, 0.3)' : 'none'
            }}>
            {t.name}
          </h1>
          <p 
            className="text-white font-thin hidden sm:block"
            style={{ 
              fontSize: 'clamp(10px, 2vw, 13px)', 
              letterSpacing: '0.5em',
              fontWeight: 100,
              lineHeight: 1.2
            }}>
            {t.subtitle}
          </p>
        </div>

        {/* MENU */}
        <nav className="flex gap-4 sm:gap-6 md:gap-12 overflow-x-auto sm:overflow-visible">
          {t.nav.map(item => {
            const isHovered = hoveredNav === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative text-white font-bold transition-all duration-300 whitespace-nowrap"
                style={{ 
                  fontSize: 'clamp(9px, 2vw, 11px)', 
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: isHovered ? '#FFD700' : '#ffffff'
                }}>
                {item}
                {isHovered && (
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{ 
                      width: '100%',
                      backgroundColor: '#FFD700',
                      top: '100%'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* BOTTONI CENTRALI ORIZZONTALI */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 w-full sm:w-auto">
          {/* BOTTONE PROGETTI */}
          <a
            href="https://github.com/francescarestelli96-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="button-horizontal px-6 sm:px-16 md:px-20 py-4 sm:py-6 flex items-center justify-center cursor-pointer w-full sm:w-72"
            style={{ 
              textDecoration: 'none',
              minHeight: '56px'
            }}>
            <span 
              className="text-white font-bold text-center"
              style={{ 
                fontSize: 'clamp(14px, 3vw, 18px)', 
                fontWeight: 700,
                letterSpacing: '0.3em'
              }}>
              {t.button1}
            </span>
          </a>

          {/* BOTTONE CONTATTI */}
          <button
            onClick={() => setActiveModal('CONTATTI')}
            className="button-horizontal px-6 sm:px-16 md:px-20 py-4 sm:py-6 flex items-center justify-center w-full sm:w-72"
            style={{ 
              minHeight: '56px'
            }}>
            <span 
              className="text-white font-bold text-center"
              style={{ 
                fontSize: 'clamp(14px, 3vw, 18px)', 
                fontWeight: 700,
                letterSpacing: '0.3em'
              }}>
              {t.button2}
            </span>
          </button>
        </div>
      </div>

      {/* SELETTORE LINGUE */}
      <div className="fixed bottom-4 sm:bottom-12 left-4 sm:left-24 flex gap-6 sm:gap-10 z-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <button 
          onClick={() => setLang('it')} 
          className="text-white font-bold transition-all duration-300"
          style={{ 
            fontSize: 'clamp(9px, 2vw, 11px)', 
            letterSpacing: '0.15em',
            fontWeight: 700,
            opacity: lang === 'it' ? 1 : 0.4,
            color: lang === 'it' ? '#FFD700' : '#ffffff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            paddingBottom: lang === 'it' ? '4px' : '0px',
            borderBottom: lang === 'it' ? '0.5px solid #FFD700' : 'none'
          }}>
          IT
        </button>
        <button 
          onClick={() => setLang('en')} 
          className="text-white font-bold transition-all duration-300"
          style={{ 
            fontSize: 'clamp(9px, 2vw, 11px)', 
            letterSpacing: '0.15em',
            fontWeight: 700,
            opacity: lang === 'en' ? 1 : 0.4,
            color: lang === 'en' ? '#FFD700' : '#ffffff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            paddingBottom: lang === 'en' ? '4px' : '0px',
            borderBottom: lang === 'en' ? '0.5px solid #FFD700' : 'none'
          }}>
          EN
        </button>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl overflow-y-auto"
          onClick={() => setActiveModal(null)}
          style={{ backgroundColor: 'rgba(2, 6, 23, 0.96)' }}>
          
          {/* CLOSE BUTTON */}
          <button 
            onClick={() => setActiveModal(null)}
            className="absolute top-4 sm:top-20 right-4 sm:right-24 text-white font-bold transition-all duration-300"
            style={{ 
              fontSize: 'clamp(9px, 2vw, 11px)', 
              letterSpacing: '0.15em',
              fontWeight: 700,
              textTransform: 'uppercase',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: hoveredNav === 'close' ? '#FFD700' : '#ffffff'
            }}
            onMouseEnter={() => setHoveredNav('close')}
            onMouseLeave={() => setHoveredNav(null)}>
            {t.close}
          </button>

          {/* MODAL CONTENT */}
          <div 
            className="flex flex-col items-center justify-center max-w-4xl px-4 sm:px-8 md:px-12 py-16 sm:py-20" 
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <h2 
              className="text-white font-bold tracking-[0.4em] mb-8 sm:mb-16 text-center leading-tight"
              style={{ 
                fontSize: 'clamp(32px, 10vw, 88px)', 
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
              {activeModal}
            </h2>
            
            {activeModal && (activeModal.toLowerCase() === 'contatti' || activeModal.toLowerCase() === 'contacts') ? (
              <div className="w-full flex flex-col items-center gap-8 sm:gap-16">
                {/* EMAIL CON ICONA */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                  <Mail className="icon-contact" size={24} />
                  <a 
                    href={`mailto:${t.contactLinks.email}`}
                    className="text-white transition-all duration-300 font-bold text-center sm:text-left"
                    style={{ 
                      fontSize: 'clamp(14px, 3vw, 18px)', 
                      fontWeight: 700, 
                      letterSpacing: '0.08em', 
                      textDecoration: 'none',
                      textTransform: 'uppercase'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#FFD700';
                      (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.5))';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#ffffff';
                      (e.target as HTMLElement).style.filter = 'none';
                    }}>
                    {t.contactLinks.email}
                  </a>
                </div>

                {/* ICONE SOCIAL IN RIGA */}
                <div className="flex gap-6 sm:gap-12 items-center justify-center">
                  <a 
                    href={t.contactLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram">
                    <Instagram className="icon-contact" size={32} />
                  </a>
                  <a 
                    href={`https://${t.contactLinks.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn">
                    <Linkedin className="icon-contact" size={32} />
                  </a>
                  <a 
                    href={t.contactLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub">
                    <Github className="icon-contact" size={32} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="max-h-[70vh] overflow-y-auto pr-4 sm:pr-8 w-full">
                <p 
                  className="text-slate-200 font-light text-center"
                  style={{ 
                    fontSize: 'clamp(14px, 3vw, 17px)', 
                    fontWeight: 300, 
                    lineHeight: '1.8', 
                    opacity: 0.9,
                    whiteSpace: 'pre-line',
                    fontStyle: 'italic',
                    fontFamily: 'Georgia, serif'
                  }}>
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
