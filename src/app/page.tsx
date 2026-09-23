import { ArrowRight, ArrowUpRight, ClipboardList, House, MapPin, MessageSquare, Phone, Wrench } from "lucide-react";
import { Header, Logo } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { QuoteForm } from "@/components/QuoteForm";
import { business, services } from "@/lib/business";

const serviceIcons = [House, Wrench, House];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span />Melbourne roofing specialists</p>
            <h1 id="hero-title">A BETTER ROOF.<br /><em>A BETTER-PROTECTED</em><br />HOME.</h1>
            <p className="hero-description">Roof restorations, repairs and replacements<br className="desktop-break" /> across Melbourne.</p>
            <div className="hero-actions"><a className="button" href="#quote">Get a free quote <ArrowRight size={19} /></a><a className="button button-ghost" href="#our-work">Explore our work <ArrowUpRight size={19} /></a></div>
            <div className="hero-services">{services.map((service, i) => { const Icon = serviceIcons[i]; return <a key={service.id} href={`#${service.id}`}><Icon size={24} strokeWidth={1.6} /><span><strong>{service.title}</strong><small>{service.short}</small></span></a>; })}</div>
          </div>
          <div className="hero-visual"><Photo name="hero" alt="Illustrative image of a roofer on a tiled Melbourne roof" priority /><span className="image-label">Illustrative imagery</span></div>
        </div>
      </section>

      <section className="services section container" id="services" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">What we do</p><h2 id="services-title">Roofing work,<br className="mobile-break" /> done with care.</h2></div><p>From a small repair to a new roof, it starts with understanding what your home needs. Let’s find the right way forward.</p></div>
        <div className="services-grid">{services.map((service, i) => <article className="service-card" id={service.id} key={service.id}>
          <a href="#quote" className="service-image-link" aria-label={`Enquire about ${service.title.toLowerCase()}`}><Photo name={service.crop} alt={`Illustrative ${service.title.toLowerCase()} photography`} /><span className="image-arrow"><ArrowUpRight size={22} /></span></a>
          <div className="service-number">0{i + 1}</div><h3>{service.title}</h3><p>{service.description}</p>
          <details className="service-details"><summary>Learn more <ArrowRight size={17} /></summary><p>{service.detail}</p><a href="#quote">Ask about your roof <ArrowUpRight size={16} /></a></details>
        </article>)}</div>
      </section>

      <section className="restoration-feature" id="our-work" aria-labelledby="work-title">
        <div className="feature-photo"><Photo name="comparison" alt="Illustrative comparison of an aged tiled roof and a restored roof; not a completed JLJ project" /><p className="concept-caption">Restoration concept · illustrative imagery</p></div>
        <div className="feature-copy"><p className="eyebrow">The difference is overhead</p><h2 id="work-title">A fresh look.<br />A stronger first impression.</h2><p>A roof is a big part of your home. Restoration can refresh its appearance and address wear before it becomes a bigger concern.</p><a className="button" href="#quote">Let’s talk about your roof <ArrowRight size={18} /></a></div>
      </section>

      <section className="gallery-section container" aria-labelledby="gallery-title"><div className="gallery-heading"><h2 id="gallery-title">Made for Melbourne homes.</h2><p>A look at the roof styles we can discuss.</p></div><div className="gallery-grid">{([{ name: "projectRestoration", title: "Restore what you love", tag: "Roof restorations" }, { name: "projectRepair", title: "Look after your home", tag: "Roof repairs" }, { name: "projectReplacement", title: "Ready for a new chapter", tag: "Roof replacements" }] as const).map(photo => <a className="gallery-item" href="#quote" key={photo.name}><Photo name={photo.name} alt={`${photo.tag} concept illustration`} /><div><span>{photo.tag}</span><h3>{photo.title}</h3><ArrowUpRight size={22} /></div></a>)}</div><p className="gallery-note">Images are illustrative design concepts, not photographs of completed JLJ Roofing projects.</p></section>

      <section className="process section" id="about" aria-labelledby="process-title"><div className="container process-layout"><div className="process-heading"><p className="eyebrow">How it works</p><h2 id="process-title">A simple process.<br />A clear next step.</h2><p>Roofing shouldn’t feel complicated.</p></div><div className="steps">{[{ Icon: ClipboardList, title: "Tell us about your roof", text: "Fill in the quick form or give us a call. A few details are all we need to start." }, { Icon: MessageSquare, title: "Talk through your options", text: "Discuss what your roof needs and ask the questions on your mind." }, { Icon: House, title: "Get your quote", text: "Find out what’s involved before deciding on your roofing work." }].map(({ Icon, title, text }, i) => <div className="step" key={title}><div className="step-top"><span className="step-icon"><Icon size={25} strokeWidth={1.5} /></span><span className="step-number">0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="quote-section" id="quote" aria-labelledby="quote-title"><div className="quote-image"><Photo name="melbourne" alt="Illustrative view of Melbourne homes and the city skyline" /><div className="quote-image-overlay"><span className="eyebrow"><MapPin size={15} />Locally focused</span><h2>Your home.<br />Your Melbourne.<br />Your next chapter.</h2><p>Roofing for homes across Melbourne.</p><a href={business.phoneHref}><Phone size={19} />{business.phone}</a></div></div><div className="quote-panel"><p className="eyebrow">Let’s get started</p><h2 id="quote-title">A better roof starts here.</h2><p className="quote-intro">Tell us what you have in mind.<br />Request a free quote for your roofing work.</p><QuoteForm onlineDelivery={Boolean(process.env.QUOTE_WEBHOOK_URL)} /></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light /><p>Roof restorations, repairs and replacements<br />across Melbourne.</p></div><div className="footer-column"><h3>Roofing services</h3>{services.map(service => <a key={service.id} href={`#${service.id}`}>{service.title}</a>)}</div><div className="footer-column"><h3>Melbourne, VIC</h3><p>For homes across<br />metropolitan Melbourne.</p><a href={business.mapsUrl} target="_blank" rel="noreferrer">Find us on Google <ArrowUpRight size={15} /></a></div><div className="footer-column footer-contact"><h3>Let’s talk roofing</h3><a className="footer-phone" href={business.phoneHref}>{business.phone}</a><a className="footer-quote" href="#quote">Get a free quote <ArrowRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JLJ Roofing. All rights reserved.</span><span>Melbourne homes. Stronger roofs.</span></div></div></footer>
    <div className="mobile-contact"><a href={business.phoneHref}><Phone size={18} />Call JLJ Roofing</a><a href="#quote">Get a free quote <ArrowRight size={17} /></a></div>
  </>;
}
