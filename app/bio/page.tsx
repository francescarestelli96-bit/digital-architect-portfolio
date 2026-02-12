"use client";
import React, { useState } from 'react';
import Link from 'next/link';

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
  const t = content[lang as keyof typeof content];

  return (
    <main style={{ padding: '80px', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif', boxSizing: 'border-box', backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}>
      
      {/* BACK LINK */}
      <Link href="/" style={{ position: 'fixed', top: '50px', right: '80px', color: '#fff', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.2em', opacity: 0.5 }}>← BACK</Link>

      {/* HEADER */}
      <div style={{ marginBottom: '80px' }}>
        <h1 style={{ fontSize: 'min(60px, 10vw)', fontWeight: 200, textTransform: 'uppercase', margin: 0, lineHeight: 0.9 }}>
          {lang === 'it' ? 'BIO' : 'ABOUT'}
        </h1>
      </div>

      {/* BIO CONTENT */}
      <div style={{ maxWidth: '900px', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8', fontSize: '16px', fontWeight: 300, opacity: 0.7 }}>{t.bio}</p>
      </div>

      {/* LINGUE FISSE BASSO SINISTRA */}
      <div style={{ position: 'fixed', bottom: '50px', left: '80px', display: 'flex', gap: '20px' }}>
        <button onClick={() => setLang('it')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', opacity: lang === 'it' ? 1 : 0.3, borderBottom: lang === 'it' ? '1px solid #fff' : 'none', paddingBottom: '5px' }}>IT</button>
        <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '11px', cursor: 'pointer', opacity: lang === 'en' ? 1 : 0.3, borderBottom: lang === 'en' ? '1px solid #fff' : 'none', paddingBottom: '5px' }}>EN</button>
      </div>

    </main>
  );
}
