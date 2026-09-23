"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Copy, MessageSquare, Phone } from "lucide-react";
import { business, services } from "@/lib/business";

export function QuoteForm({ onlineDelivery }: { onlineDelivery: boolean }) {
  const [state, setState] = useState<"idle" | "busy" | "ready" | "sent">("idle");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const digits = String(data.phone).replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) { setError("Please enter a valid phone number."); return; }
    setError("");
    const text = `Hi JLJ Roofing, I'd like a roofing quote.\nName: ${data.name}\nPhone: ${data.phone}\nSuburb: ${data.suburb}\nService: ${data.service}${data.details ? `\nDetails: ${data.details}` : ""}`;
    setMessage(text);
    if (!onlineDelivery) { setState("ready"); return; }
    setState("busy");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Request failed");
      setState("sent");
    } catch { setState("idle"); setError("Your request couldn’t be delivered. Please try again or call 0423 850 602."); }
  }
  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); }
    catch { setError("Please select and copy your request below, or give us a call."); }
  }
  if (state === "ready" || state === "sent") return <div className="quote-result" aria-live="polite">
    <div className="result-icon">{state === "sent" ? <Check /> : <MessageSquare />}</div>
    <h3>{state === "sent" ? "Thanks. Your request is on its way." : "Your request is ready to send."}</h3>
    <p>{state === "sent" ? "JLJ Roofing will be in touch to discuss your roof." : "Send the prepared message to JLJ Roofing from your phone, or copy it to your messaging app. Your details haven’t been sent yet."}</p>
    {state === "ready" && <><pre className="message-preview">{message}</pre><div className="result-actions"><a className="button" href={`sms:${business.smsNumber}?body=${encodeURIComponent(message)}`}><MessageSquare size={17} />Open text message</a><button className="button button-outline" onClick={copy} type="button">{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copied" : "Copy request"}</button></div></>}
    <a className="text-link" href={business.phoneHref}><Phone size={16} />Prefer to call? {business.phone}</a>
    {error && <p role="alert" className="form-error">{error}</p>}
    <button className="back-button" type="button" onClick={() => { setState("idle"); setCopied(false); }}>Start another request</button>
  </div>;
  return <form className="quote-form" onSubmit={submit}>
    <div className="form-grid">
      <label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Your name" maxLength={100} required /></label>
      <label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="04XX XXX XXX" maxLength={24} required /></label>
      <label>Suburb <span>*</span><input name="suburb" autoComplete="address-level2" placeholder="Your Melbourne suburb" maxLength={100} required /></label>
      <label>What does your roof need? <span>*</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(service => <option key={service.id}>{service.title}</option>)}<option>Not sure — I need advice</option></select></label>
    </div>
    <label className="details-label">Anything else we should know? <span className="optional">(optional)</span><textarea name="details" placeholder="A leak, ageing tiles, a fresh start… tell us a little about your roof." rows={3} maxLength={2000} /></label>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button form-submit" type="submit" disabled={state === "busy"}>{state === "busy" ? "Sending your request…" : "Request a free quote"}<ArrowRight size={18} /></button>
    <p className="form-note">{onlineDelivery ? "Your details are used to respond to your roofing enquiry." : "We’ll prepare a text message. You choose when to send it."}</p>
  </form>;
}
