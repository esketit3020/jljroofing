import { ArrowRight, ArrowUpRight, CheckCircle2, ClipboardList, Clock3, House, MapPin, MessageCircle, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import { Header, Logo } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { QuoteForm } from "@/components/QuoteForm";
import { business, services } from "@/lib/business";

const facebook = "https://www.facebook.com/p/JLJ-Roofing-100063714176094/";
const details = [
  { icon: House, label: "Melbourne-wide", note: "Metropolitan service area" },
  { icon: Wrench, label: "Roofing solutions", note: "Repairs to replacements" },
  { icon: Phone, label: "Speak to JLJ", note: business.phone },
  { icon: Star, label: "Customer feedback", note: "View JLJ on Google", url: business.mapsUrl },
];
const work = [
  { name: "projectRestoration" as const, label: "Roof restoration", title: "Refresh an ageing roof" },
  { name: "projectRepair" as const, label: "Roof repair", title: "Address wear and leaks" },
  { name: "projectReplacement" as const, label: "Roof replacement", title: "Explore a new roof" },
];
const faqs = [
  ["What areas do you cover?", "JLJ Roofing is listed as servicing Melbourne metropolitan areas. Send through your suburb and the team can confirm availability for your job."],
  ["How do I know if my roof needs repairs, a restoration or replacement?", "That depends on the material, age and condition of the roof. Describe what you have noticed and ask JLJ to discuss the suitable options for your property."],
  ["Can I get help with a roof leak?", "Roof repairs and emergency repairs are among JLJ Roofing’s advertised services. If water is coming in, call directly rather than waiting for a form response."],
  ["Can you quote a roof restoration?", "Yes — ask about your roof type, suburb and the areas that need attention. The team can explain the next step for arranging a quote."],
  ["Are these photos JLJ Roofing jobs?", "The photography shown on this concept site is illustrative imagery, not a claim of completed JLJ projects. Visit JLJ’s Facebook or Google listing for business-posted images and customer feedback."],
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="template-utility"><div className="container"><span>Roofing across metropolitan Melbourne</span><a href={business.phoneHref}><Phone size={14} /> {business.phone}</a></div></div>
    <Header />
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span />JLJ Roofing · Melbourne</p>
            <h1 id="hero-title">YOUR ROOF.<br /><em>LOOKED AFTER.</em><br />YOUR HOME.<br />PROTECTED.</h1>
            <p className="hero-description">Roof restorations, roof repairs and replacements for Melbourne homes. Tell us what&apos;s happening overhead — and let&apos;s talk about the next step.</p>
            <div className="hero-actions"><a className="button" href="#quote">Request a free quote <ArrowRight size={19} /></a><a className="button button-ghost" href={business.phoneHref}><Phone size={19} /> Call JLJ Roofing</a></div>
            <div className="hero-services">{services.slice(0,3).map((s,i)=><a href={"#"+s.id} key={s.id}>{i===1?<Wrench size={24}/>:<House size={24}/>}<span><strong>{s.title}</strong><small>{s.short}</small></span></a>)}</div>
          </div>
          <div className="hero-visual"><Photo name="hero" priority alt="Illustrative Melbourne tile roof with a roofer at work" /><span className="image-label">Illustrative roofing photography</span></div>
        </div>
      </section>

      <section className="template-trust" aria-label="JLJ Roofing at a glance"><div className="container template-trust-grid">{details.map((d)=>{const Icon=d.icon; const inner=<><Icon size={28}/><span><strong>{d.label}</strong><small>{d.note}</small></span></>;return d.url?<a href={d.url} key={d.label} target="_blank" rel="noreferrer">{inner}</a>:<div key={d.label}>{inner}</div>})}</div></section>

      <section className="services section container" id="services" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">01 / Our services</p><h2 id="services-title">The right attention for<br/>the roof over your head.</h2></div><p>Whether you&apos;re dealing with a leak or thinking about a complete refresh, start with a conversation about what your roof needs.</p></div>
        <div className="template-services-grid">{services.map((service,i)=><article id={service.id} className="template-service-card" key={service.id}>
          <a className="template-service-image" href="#quote" aria-label={"Enquire about "+service.title}><Photo name={service.crop} alt={"Illustrative "+service.title.toLowerCase()+" image"}/><span className="image-arrow"><ArrowUpRight size={20}/></span></a>
          <div className="template-service-body"><span className="service-number">0{i+1}</span><h3>{service.title}</h3><p>{service.description}</p><a href="#quote" className="template-text-link">Ask about this service <ArrowRight size={17}/></a></div>
        </article>)}</div>
      </section>

      <section id="about" className="template-why section"><div className="container template-why-grid"><div>
        <p className="eyebrow">02 / A better way to begin</p><h2>Start with your roof.<br/>Not a sales pitch.</h2><p className="template-why-intro">Your home deserves an answer that fits the problem. Tell JLJ Roofing what you&apos;re seeing — weathered tiles, a leak, or a roof that may need replacing — and discuss the work before deciding what comes next.</p>
        <div className="template-why-photo"><Photo name="projectRepair" alt="Illustrative roofer working on tiled roof"/><span>Roofing imagery for design preview</span></div>
      </div><div className="template-why-cards">
        <article><span>01</span><h3>Explain what&apos;s happening</h3><p>Tell the team what you&apos;ve noticed and where the issue is. A few details help start the conversation.</p></article>
        <article><span>02</span><h3>Talk through your options</h3><p>Ask about repairs, restoration and replacement based on your home and roof condition.</p></article>
        <article><span>03</span><h3>Know who you&apos;re calling</h3><p>Find the published contact details and go straight to JLJ Roofing on the phone, Facebook or Google.</p></article>
        <article><span>04</span><h3>One clear next step</h3><p>Request a quote without navigating complicated forms or chasing down a contact number.</p></article>
      </div></div></section>

      <section className="section template-process" aria-labelledby="process-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">03 / How to get started</p><h2 id="process-title">From first call to<br/>the next step.</h2></div><p>There&apos;s no need to know the technical terms. Just tell the team what you need help with.</p></div><div className="template-steps">{[
        {Icon:MessageCircle,title:"Tell us about the roof",body:"Call or send a few details about the problem and your Melbourne suburb."},
        {Icon:ClipboardList,title:"Discuss the work",body:"Talk through repairs, restoration or replacement for your property."},
        {Icon:CheckCircle2,title:"Arrange a quote",body:"Confirm the next steps with JLJ Roofing before making a decision."}
      ].map(({Icon,title,body},i)=><div className="template-step" key={title}><span className="template-step-icon"><Icon size={25}/></span><span className="template-step-no">0{i+1}</span><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>

      <section id="our-work" className="section template-work container" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">04 / Roofing inspiration</p><h2 id="work-title">See the roof.<br/>Picture the potential.</h2></div><p>Visual examples of roofing work and finishes. For JLJ&apos;s own updates, head to their Facebook page.</p></div><div className="template-work-grid">{work.map(x=><a className="template-work-card" href="#quote" key={x.name}><Photo name={x.name} alt={"Illustrative photograph: "+x.label}/><div><small>{x.label}</small><h3>{x.title}</h3><ArrowUpRight size={20}/></div></a>)}</div><p className="gallery-note">Photos are illustrative design imagery, not verified completed JLJ Roofing projects. <a href={facebook} target="_blank" rel="noreferrer">Visit JLJ Roofing on Facebook <ArrowUpRight size={13}/></a></p></section>

      <section className="restoration-feature template-feature" aria-labelledby="restoration-title"><div className="feature-photo"><Photo name="comparison" alt="Illustrative tile roof before and after restoration"/><p className="concept-caption">Illustrative restoration concept · not a JLJ project</p></div><div className="feature-copy"><p className="eyebrow">Roof restorations</p><h2 id="restoration-title">Give your roof a<br/>fresh look again.</h2><p>A tired roof doesn&apos;t always mean starting from scratch. Ask JLJ Roofing whether a restoration is appropriate for your roof&apos;s condition.</p><a className="button" href="#quote">Enquire about restoration <ArrowRight size={18}/></a></div></section>

      <section className="template-area section" aria-labelledby="area-title"><div className="container template-area-grid"><div><p className="eyebrow">05 / Where we work</p><h2 id="area-title">Your Melbourne.<br/>Your roof.</h2><p>JLJ Roofing is publicly listed as servicing all Melbourne metropolitan areas. If you&apos;re unsure whether your suburb is covered, give the team a call.</p><div className="template-area-actions"><a className="button" href="#quote">Ask about your suburb <ArrowRight size={18}/></a><a href={business.mapsUrl} target="_blank" rel="noreferrer">View Google listing <ArrowUpRight size={17}/></a></div></div><div className="template-area-image"><Photo name="melbourne" alt="Illustrative view over Melbourne roofs"/><div><MapPin size={18}/> Melbourne metropolitan area</div></div></div></section>

      <section className="template-urgent" aria-label="Roof leak enquiries"><div className="container"><div><p className="eyebrow">Roof leaking?</p><h2>Don&apos;t wait on a form if it&apos;s urgent.</h2><p>JLJ Roofing advertises emergency roof repairs. Call to discuss what&apos;s happening and whether help is available.</p></div><a href={business.phoneHref}><Phone size={20}/> Call {business.phone}</a></div></section>

      <section className="section template-faq container" id="faq" aria-labelledby="faq-title"><div className="section-heading"><div><p className="eyebrow">06 / Frequently asked</p><h2 id="faq-title">A few things worth<br/>knowing first.</h2></div><p>For a specific answer about your roof, it&apos;s always worth speaking with JLJ Roofing directly.</p></div><div className="template-faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="quote-section template-quote" id="quote" aria-labelledby="quote-title"><div className="quote-image"><Photo name="melbourne" alt="Illustrative panorama of Melbourne homes"/><div className="quote-image-overlay"><span className="eyebrow"><MapPin size={15}/> Melbourne roofing</span><h2>Ready to talk<br/>about your roof?</h2><p>Restorations. Repairs. Replacements.</p><a href={business.phoneHref}><Phone size={19}/>{business.phone}</a></div></div><div className="quote-panel"><p className="eyebrow">07 / Get in touch</p><h2 id="quote-title">Let&apos;s get your<br/>roof sorted.</h2><p className="quote-intro">Send the team a few details about your roof. Without an online enquiry service connected, the form prepares a text message for you to send.</p><QuoteForm onlineDelivery={Boolean(process.env.QUOTE_WEBHOOK_URL)}/></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light/><p>Roof restorations, repairs and replacements<br/>across metropolitan Melbourne.</p></div><div className="footer-column"><h3>Explore</h3><a href="#services">Services</a><a href="#our-work">Roofing inspiration</a><a href="#about">How we help</a><a href="#faq">FAQs</a></div><div className="footer-column"><h3>Find JLJ</h3><a href={business.mapsUrl} target="_blank" rel="noreferrer">Google listing <ArrowUpRight size={15}/></a><a href={facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15}/></a><p>Servicing metropolitan Melbourne, VIC</p></div><div className="footer-column footer-contact"><h3>Let&apos;s talk roofing</h3><a className="footer-phone" href={business.phoneHref}>{business.phone}</a><a className="footer-quote" href="#quote">Request a quote <ArrowRight size={15}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JLJ Roofing. All rights reserved.</span><span>Website preview · Images labelled where illustrative</span></div></div></footer>
    <div className="mobile-contact"><a href={business.phoneHref}><Phone size={18}/> Call JLJ Roofing</a><a href="#quote">Get a quote <ArrowRight size={17}/></a></div>
  </>;
}
