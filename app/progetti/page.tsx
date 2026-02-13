'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const projects = [
  { name: "The Tár Archive", url: "https://lydia-tar-mockup.vercel.app/" },
  { name: "Alberto Chines", url: "https://albertochines-site.vercel.app/" },
  { name: "Francesca Restelli Portfolio", url: "https://www.francescarestelli.com/" },
  { name: "Ridescape", url: "https://ridescape.bike/" },
  { name: "Relax Room & Diary", url: "https://merry-xmas-dave-je0oblgc4-francescas-projects-a654bd16.vercel.app/" },
];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main 
      className="liquid-gradient min-h-screen w-full overflow-y-auto px-6 py-12 sm:px-12 md:px-24 md:py-20"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* BACK BUTTON - Stile Nav Home */}
        <Link 
          href="/" 
          className="text-white font-bold transition-all duration-300 no-underline inline-block mb-16"
          style={{ 
            fontSize: '11px', 
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD700')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
        >
          ← Back
        </Link>

        {/* TITOLO - Stile Modal */}
        <h1 
          className="text-white font-bold tracking-[0.4em] mb-20 leading-tight border-b border-white/10 pb-10"
          style={{ 
            fontSize: 'clamp(40px, 8vw, 80px)', 
            textTransform: 'uppercase'
          }}
        >
          Selected Projects
        </h1>

        {/* LISTA PROGETTI */}
        <ul className="space-y-10 sm:space-y-16">
          {projects.map((project) => (
            <li key={project.name} className="relative">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-end justify-between no-underline transition-all duration-500"
                onMouseEnter={() => setHovered(project.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <span 
                  className="font-bold tracking-[0.1em] transition-all duration-500 italic"
                  style={{ 
                    fontSize: 'clamp(24px, 5vw, 48px)',
                    fontFamily: 'Georgia, serif',
                    color: hovered === project.name ? '#FFD700' : '#ffffff',
                    opacity: hovered && hovered !== project.name ? 0.3 : 1,
                    textTransform: 'uppercase'
                  }}
                >
                  {project.name}
                </span>
                
                <span 
                  className="text-[10px] font-bold tracking-[0.3em] transition-all duration-500 mb-2"
                  style={{ 
                    color: '#FFD700',
                    opacity: hovered === project.name ? 1 : 0,
                    transform: hovered === project.name ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  VISIT SITE ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* FOOTER LYDIA TÁR STYLE */}
        <footer className="mt-40 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#FFD700] font-bold animate-pulse">
            Access restricted to authorized personnel only
          </p>
          <p className="text-[9px] uppercase tracking-[0.5em] text-white opacity-30">
            ID: FR_PROJ_2026
          </p>
        </footer>
      </div>
    </main>
  );
}