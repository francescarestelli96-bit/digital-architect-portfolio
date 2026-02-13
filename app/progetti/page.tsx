'use client';
import React from 'react';
import Link from 'next/link';

const projects = [
  { name: "The Tár Archive", url: "https://lydia-tar-mockup.vercel.app/" },
  { name: "Alberto Chines", url: "https://albertochines-site.vercel.app/" },
  { name: "Francesca Restelli Portfolio", url: "https://www.francescarestelli.com/" },
  { name: "Ridescape", url: "https://ridescape.bike/" },
  { name: "Merry Xmas Dave", url: "https://merry-xmas-dave.vercel.app/" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-serif p-10 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[10px] uppercase tracking-[0.5em] opacity-50 hover:opacity-100 transition-opacity">
          ← Back
        </Link>

        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mt-12 mb-20 border-b border-white/10 pb-10">
          Selected <br/> Works
        </h1>

        <ul className="space-y-12">
          {projects.map((project, index) => (
            <li key={index} className="group border-b border-white/5 pb-8 last:border-0">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-baseline justify-between hover:opacity-50 transition-all duration-500"
              >
                <span className="text-4xl md:text-6xl font-light italic uppercase tracking-tighter">
                  {project.name}
                </span>
                <span className="text-[10px] font-sans tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                  OPEN SITE ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-40 pt-10 border-t border-white/10 flex justify-between items-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#EAB308] animate-pulse">
            Access restricted to authorized personnel only
          </p>
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-30">
            © 2026 Francesca Restelli
          </p>
        </footer>
      </div>
    </div>
  );
}