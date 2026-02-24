'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/builds', label: 'Builds' },
  { href: '/thinking', label: 'Thinking' },
  { href: '/now', label: 'Now' },
  { href: '/connect', label: 'Connect' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.04]" />
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link
          href="/"
          className="font-mono text-xs font-bold tracking-[0.3em] text-white/70 hover:text-white transition-all duration-300"
        >
          SURYANSH
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[11px] font-mono tracking-[0.15em] px-3 py-1.5 rounded-full transition-all duration-300 ${
                pathname === link.href
                  ? 'text-white bg-white/[0.08]'
                  : 'text-white/30 hover:text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/50 hover:text-white transition-colors"
        >
          <span className="font-mono text-xs">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden relative bg-[#050505]/95 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="max-w-2xl mx-auto px-6 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-mono tracking-wider py-2 transition-colors ${
                  pathname === link.href
                    ? 'text-white'
                    : 'text-white/30 hover:text-white/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
