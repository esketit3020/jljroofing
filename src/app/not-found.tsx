import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() { return <main className="not-found"><p className="eyebrow">JLJ Roofing · Melbourne</p><h1>This page isn’t under this roof.</h1><p>Head back to the homepage or call us about your roofing needs.</p><Link className="button" href="/">Back to home</Link><a className="text-link" href={business.phoneHref}>{business.phone}</a></main>; }
