import React from 'react';
import { HeroNetwork } from '@/components/home/HeroNetwork';

export const BrandLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-[3px] ${className}`} aria-label="Germin">
    <span className="font-display font-extrabold tracking-[-0.03em] leading-none text-[26px] text-[#171717]">Germin</span>
    <svg height="16" viewBox="0 0 40 20" fill="none" aria-hidden>
      <path
        d="M10 3.5C5.9 3.5 3 6.4 3 10s2.9 6.5 7 6.5c3.6 0 6-2.6 10-6.5 4-3.9 6.4-6.5 10-6.5 4.1 0 7 2.9 7 6.5s-2.9 6.5-7 6.5c-3.6 0-6-2.6-10-6.5-4-3.9-6.4-6.5-10-6.5Z"
        stroke="#C9A332"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

interface Props {
  code: string;
  title: React.ReactNode;
  body: string;
  actions?: React.ReactNode;
  /** Show its own logo header (for screens rendered outside the site layout). */
  standalone?: boolean;
  children?: React.ReactNode;
}

/** Shared full-screen status layout (404, errors) in the homepage hero style. */
export const StatusScreen: React.FC<Props> = ({ code, title, body, actions, standalone, children }) => (
  <section
    className={`relative isolate flex flex-col items-center justify-center overflow-hidden bg-[#F7F6F2] px-5 text-center ${
      standalone ? 'min-h-[100svh]' : 'min-h-[88svh] pt-24'
    }`}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20"
      style={{
        background:
          'radial-gradient(ellipse 70% 55% at 50% 45%, #FFFFFF 0%, rgba(255,255,255,0) 70%),linear-gradient(180deg,#F7F6F2 0%,#FFFFFF 55%,#F7F6F2 100%)',
      }}
    />
    <HeroNetwork className="pointer-events-none absolute inset-0 -z-10" />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[5]"
      style={{
        background:
          'radial-gradient(ellipse 42% 38% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0) 100%)',
      }}
    />
    {standalone && (
      <a href="/" className="absolute left-5 top-5 sm:left-8 sm:top-6" aria-label="Germin home">
        <BrandLogo />
      </a>
    )}
    <div className="relative max-w-[640px] py-16">
      <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#171717]/70">
        <span aria-hidden className="h-px w-8 bg-[#C9A332]" />
        {code}
        <span aria-hidden className="h-px w-8 bg-[#C9A332]" />
      </p>
      <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-[60px]">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.65] text-[#171717]/70 sm:text-[17px]">{body}</p>
      {actions && <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div>}
      {children}
    </div>
  </section>
);

export const primaryBtn =
  'inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#171717] px-7 font-display text-[15px] font-semibold text-[#FFFFFF] ring-1 ring-[#171717] transition-all hover:-translate-y-0.5 hover:ring-[#C9A332]';
export const ghostBtn =
  'inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#FFFFFF]/80 px-7 font-display text-[15px] font-semibold text-[#171717] ring-1 ring-[#171717]/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:ring-[#171717]';
