"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Github } from './components/Icons';
import Link from 'next/link';

const content = {
  it: {
    nav: ["ABOUT", "BIO", "PROGETTI", "CONTATTI"],
    name: "FRANCESCA RESTELLI",
    subtitle: "DIGITAL ARCHITECT FOR CLASSICAL MUSIC",
    about: `Credo nella minimalità e nella chiarezza. Sottraggo il superfluo per rivelare l'essenziale. La mia ricerca si concentra sulla purezza della forma e sull'efficienza del codice, lasciando spazio all'opera musicale.`,
    bio: `Classe 1996. Sono cresciuta a pane e tecnologia in una Milano che corre, ma ho sempre avuto un debole per le storie delle persone. La mia carriera non è iniziata davanti a un terminale, ma nel mondo delle Risorse Umane. Perché ti dico questo? Perché prima di imparare a parlare con le macchine, ho imparato ad ascoltare le persone.\n\nDal Capitale Umano alle API: Il mio passaggio dall'HR allo sviluppo web non è stato un cambio di rotta, ma un'evoluzione naturale. Mi sono resa conto che volevo costruire gli strumenti che semplificano la vita delle persone, non solo gestirne i processi.\n\nOggi fondo la mia solidità tecnica (Next.js, React, API) con quella visione multidisciplinare che solo chi ha lavorato con le persone possiede. Non mi limito a scrivere codice: progetto soluzioni 'sartoriali' che hanno un'anima, un obiettivo e, soprattutto, un senso per chi le usa.\n\nMotori, Design e Adrenalina: Cosa mi muove quando non sono connessa? Il dinamismo dei motori: Amo la velocità e la precisione millimetrica. C'è una bellezza cruda nella meccanica che cerco di riportare nella pulizia dei miei siti. Innovazione e Design: Vivo a Milano, ed è impossibile non lasciarsi ispirare dal mix di storico e futuristico che trovi ad ogni angolo. L'approccio umano: In un mondo di bot, credo ancora nel valore di una chiacchierata e di un progetto costruito su misura, proprio come un abito fatto a mano.\n\nIn breve: Metto ordine nel caos digitale con un approccio empatico e una precisione da ingegnere di pista. Se cerchi qualcuno che capisca il tuo business e lo trasformi in un prodotto tech che spacca, eccomi qui.`,
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
    about: `I believe in minimality and clarity.
     I subtract the superfluous to reveal the essential. My research focuses on the purity of form and code efficiency, leaving space for the musical work.`,
    bio: `Born in 1996. I grew up with tech in a fast-paced Milan, but I've always had a soft spot for people's stories. My career didn't start at a terminal, but in Human Resources. Why am I telling you this? Because before learning to talk to machines, I learned to listen to people.\n\nFrom Human Capital to APIs: My transition from HR to web development was a natural evolution. I realized I wanted to build tools that simplify people's lives, not just manage their processes.\n\nToday, I blend my technical expertise (Next.js, React, API) with the multidisciplinary vision that only someone who has worked with people possesses. I don't just write code: I design 'tailor-made' solutions that have a soul, a goal, and, above all, a meaning for those who use them.\n\nMoto, Design, and Adrenaline: What moves me when I'm offline? The dynamism of motors: I love speed and millimetric precision. There is a raw beauty in mechanics that I strive to bring to the cleanliness of my sites. Innovation and Design: Living in Milan, it's impossible not to be inspired by the mix of history and futurism at every corner. The human approach: In a world of bots, I still believe in the value of a conversation and a custom-built project, just like a handmade suit.\n\nIn short: I bring order to digital chaos with an empathetic approach and the precision of a track engineer. If you're looking for someone who understands your business and transforms it into a tech product that rocks, here I am.`,
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

  useEffect(() => { setMounted(true); }, []);

  const getModalContent = (section: string): string => {
    const sectionKey = section.toLowerCase() === 'bio' ? 'bio' : 'about';
    const contentText = t[sectionKey as keyof typeof t];
    return typeof contentText === 'string' ? contentText : '';
  };

  const handleNavClick = (item: string) => {
    const val = item.toLowerCase();
    if (val === 'progetti' || val === 'projects') {
      window.location.href = '/progetti';
    } else { setActiveModal(item); }
  };

  if (!mounted) return <div className="liquid-gradient h-screen w-full" />;

  return (
    <main className="liquid-gradient relative min-h-screen w-full overflow-x-hidden flex flex-col justify-between" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* NAV */}
      <div className="w-full px-6 md:px-12 py-8 z-50 flex justify-end">
        <nav className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar pb-2">
          {t.nav.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
              className="text-white font-bold tracking-[0.15em] uppercase text-[10px] md:text-[11px] whitespace-nowrap bg-transparent border-none cursor-pointer transition-colors"
              style={{ color: hoveredNav === item ? '#FFD700' : '#ffffff' }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* CENTER BUTTONS */}
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-[300px] md:max-w-none justify-center">
          <Link href="/progetti" className="button-horizontal py-5 md:py-6 md:px-20 border border-white/20 flex items-center justify-center no-underline transition-all hover:border-[#FFD700]">
            <span className="text-white font-bold tracking-[0.3em] text-[14px] md:text-[18px] uppercase">{t.button1}</span>
          </Link>
          <button onClick={() => setActiveModal('CONTATTI')} className="button-horizontal py-5 md:py-6 md:px-20 border border-white/20 hover:border-[#FFD700]">
            <span className="text-white font-bold tracking-[0.3em] text-[14px] md:text-[18px] uppercase">{t.button2}</span>
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-6 md:p-12 flex flex-col items-end gap-2">
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-[#FFD700] font-bold text-right opacity-60">
          Access restricted to authorized personnel only
        </p>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl p-6" onClick={() => setActiveModal(null)} style={{ backgroundColor: 'rgba(2, 6, 23, 0.98)' }}>
          <div className="relative w-full max-w-4xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
             <h2 className="text-white font-bold tracking-[0.3em] mb-10 text-[clamp(32px,8vw,88px)] uppercase text-center border-b border-white/10 pb-4 w-full leading-tight">{activeModal}</h2>
             
             {activeModal.toLowerCase().includes('contatt') || activeModal.toLowerCase().includes('contact') ? (
               <div className="flex flex-col items-center gap-12">
                  <a href={`mailto:${t.contactLinks.email}`} className="text-white font-bold text-[clamp(14px,4vw,20px)] tracking-widest no-underline hover:text-[#FFD700]">{t.contactLinks.email}</a>
                  <div className="flex gap-8">
                    <a href={t.contactLinks.instagram} target="_blank" className="text-white hover:text-[#FFD700]"><Instagram size={28}/></a>
                    <a href={`https://${t.contactLinks.linkedin}`} target="_blank" className="text-white hover:text-[#FFD700]"><Linkedin size={28}/></a>
                    <a href={t.contactLinks.github} target="_blank" className="text-white hover:text-[#FFD700]"><Github size={28}/></a>
                  </div>
               </div>
             ) : (
               <div className="max-h-[60vh] overflow-y-auto px-2 w-full custom-scrollbar">
                  <p className="text-slate-200 font-light text-center italic text-[clamp(14px,4vw,17px)] leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Georgia, serif' }}>
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