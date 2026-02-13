"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Folder } from '../components/Icons';

const content = {
  it: {
    bio: `Classe 1996. Sono cresciuta a pane e tecnologia in una Milano che corre, ma ho sempre avuto un debole per le storie delle persone. La mia carriera non è iniziata davanti a un terminale, ma nel mondo delle Risorse Umane. Perché ti dico questo? Perché prima di imparare a parlare con le macchine, ho imparato ad ascoltare le persone.

Dal Capitale Umano alle API: Il mio passaggio dall'HR allo sviluppo web non è stato un cambio di rotta, ma un'evoluzione naturale. Mi sono resa conto che volevo costruire gli strumenti che semplificano la vita delle persone, non solo gestirne i processi.

Oggi fondo la mia solidità tecnica (Next.js, React, API) con quella visione multidisciplinare che solo chi ha lavorato con le persone possiede. Non mi limito a scrivere codice: progetto soluzioni 'sartoriali' che hanno un'anima, un obiettivo e, soprattutto, un senso per chi le usa.

Motori, Design e Adrenalina: Cosa mi muove quando non sono connessa? Il dinamismo dei motori: Amo la velocità e la precisione millimetrica. C'è una bellezza cruda nella meccanica che cerco di riportare nella pulizia dei miei siti. Innovazione e Design: Vivo a Milano, ed è impossibile non lasciarsi ispirare dal mix di storico e futuristico che trovi ad ogni angolo. L'approccio umano: In un mondo di bot, credo ancora nel valore di una chiacchierata e di un progetto costruito su misura, proprio come un abito fatto a mano.

In breve: Metto ordine nel caos digitale con un approccio empatico e una precisione da ingegnere di pista. Se cerchi qualcuno che capisca il tuo business e lo trasformi in un prodotto tech che spacca, eccomi qui.`
  },
  en: {
    bio: `Born in 1996. I grew up with tech in a fast-paced Milan, but I've always had a soft spot for people's stories. My career didn't start at a terminal, but in Human Resources. Why am I telling you this? Because before learning to talk to machines, I learned to listen to people.

From Human Capital to APIs: My transition from HR to web development was a natural evolution. I realized I wanted to build tools that simplify people's lives, not just manage their processes.

Today, I blend my technical expertise (Next.js, React, API) with the multidisciplinary vision that only someone who has worked with people possesses. I don't just write code: I design 'tailor-made' solutions that have a soul, a goal, and, above all, a meaning for those who use them.

Motors, Design, and Adrenaline: What moves me when I'm offline? The dynamism of motors: I love speed and millimetric precision. There is a raw beauty in mechanics that I strive to bring to the cleanliness of my sites. Innovation and Design: Living in Milan, it's impossible not to be inspired by the mix of history and futurism at every corner. The human approach: In a world of bots, I still believe in the value of a conversation and a custom-built project, just like a handmade suit.

In short: I bring order to digital chaos with an empathetic approach and the precision of a track engineer. If you're looking for someone who understands your business and transforms it into a tech product that rocks, here I am.`
  }
};

export default function BioPage() {
  const [lang, setLang] = useState('it');
  const [mounted, setMounted] = useState(false);
  const t = content[lang as keyof typeof content];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={{ padding: '100px 48px', minHeight: '100vh', overflow: 'hidden', fontFamily: 'var(--font-geist-sans)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      
      {/* BACK LINK */}
      <Link href="/" style={{ position: 'fixed', top: '62px', right: '80px', color: '#fff', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', opacity: 0.5 }}>← BACK</Link>

      {/* CENTER FLOATING BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginBottom: '40px' }}>
        <a href="mailto:francesres@icloud.com" className="button-horizontal" style={{ padding: '18px 36px', borderRadius: '999px', color: '#fff', display: 'inline-flex', gap: '10px', alignItems: 'center', textDecoration: 'none', fontWeight: 600 }}>
          <Mail size={16} />
          Contact
        </a>

        <Link href="/" className="button-horizontal" style={{ padding: '18px 36px', borderRadius: '999px', color: '#fff', display: 'inline-flex', gap: '10px', alignItems: 'center', textDecoration: 'none', fontWeight: 600 }}>
          <Folder size={16} />
          Portfolio
        </Link>
      </div>

      {/* BIO CONTENT */}
      <div style={{ maxWidth: '900px', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {mounted ? (
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.9', fontSize: '16px', fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>{t.bio}</p>
        ) : (
          <div style={{ height: '220px' }} />
        )}
      </div>

      {/* LINGUE FISSE BASSO SINISTRA */}
      <div style={{ position: 'fixed', bottom: '50px', left: '80px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button onClick={() => setLang('it')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', opacity: lang === 'it' ? 1 : 0.3, paddingBottom: '5px', position: 'relative' }}>
          <span style={{ position: 'relative', paddingBottom: '6px' }}>IT</span>
          {lang === 'it' && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: '2px', background: 'linear-gradient(90deg,#FFD700, rgba(255,215,0,0))' }} />}
        </button>

        <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', opacity: lang === 'en' ? 1 : 0.3, paddingBottom: '5px', position: 'relative' }}>
          <span style={{ position: 'relative', paddingBottom: '6px' }}>EN</span>
          {lang === 'en' && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: '2px', background: 'linear-gradient(90deg,#FFD700, rgba(255,215,0,0))' }} />}
        </button>
      </div>

    </main>
  );
}
