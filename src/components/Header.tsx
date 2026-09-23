"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/business";

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? "logo-light" : ""}`} href="/#home" aria-label="JLJ Roofing home">
    <svg viewBox="0 0 68 39" fill="none" aria-hidden="true"><path d="M4 28 28 7 52 28M35 9l9-4 20 18" stroke="currentColor" strokeWidth="6" strokeLinecap="square"/><path d="M20 35V24h16v11" stroke="currentColor" strokeWidth="5"/></svg>
    <span><b>JLJ<span>ROOFING</span></b><small>MELBOURNE</small></span>
  </a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <header className="header">
    <div className="container nav-wrap">
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className="active" href="#home">Home</a><a href="#services">Services</a><a href="#our-work">Our work</a><a href="#about">About</a><a href="#quote">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={business.phoneHref}><Phone size={16} /><span>{business.phone}</span></a>
        <a className="button button-small header-quote" href="#quote">Get a free quote <ArrowUpRight size={17} /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{[["Home", "home"], ["Services", "services"], ["Our work", "our-work"], ["About", "about"], ["Get a free quote", "quote"]].map(([title, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{title}<ArrowUpRight size={18} /></a>)}</nav>}
  </header>;
}
