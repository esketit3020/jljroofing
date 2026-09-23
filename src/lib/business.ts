export const business = {
  name: "JLJ Roofing",
  location: "Melbourne",
  phone: "0423 850 602",
  phoneHref: "tel:+61423850602",
  smsNumber: "+61423850602",
  mapsUrl: "https://maps.app.goo.gl/cmovwUKJaud3tnC18",
  facebookUrl: "https://www.facebook.com/p/JLJ-Roofing-100063714176094/",
} as const;

export const services = [
  { id: "restorations", title: "Roof restorations", short: "Refresh the roof you have", description: "Looking to revive an ageing roof? Ask about restoration options and what work could make sense for your home.", detail: "Share your roof type and what you have noticed, and discuss the next step for a restoration quote.", crop: "restoration" },
  { id: "repairs", title: "Roof repairs", short: "Leaks, damage and wear", description: "Noticed a leak or roof damage? Speak with JLJ Roofing about the problem and how it can be addressed.", detail: "For urgent water entry or storm damage, call rather than relying on the website form.", crop: "repair" },
  { id: "replacements", title: "Roof replacements", short: "A new roof for a new chapter", description: "When a roof is past its best, explore the next step towards replacing it with something right for your property.", detail: "Tell the team about your existing roof and discuss your replacement options.", crop: "replacement" },
  { id: "emergency", title: "Emergency roof repairs", short: "When the roof needs attention", description: "A roof leak can’t always wait. Call JLJ Roofing to ask about emergency repair availability.", detail: "Availability and timing must be confirmed directly with JLJ Roofing.", crop: "repair" },
] as const;
