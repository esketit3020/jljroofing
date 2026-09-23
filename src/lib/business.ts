export const business = {
  name: "JLJ Roofing",
  location: "Melbourne",
  phone: "0423 850 602",
  phoneHref: "tel:+61423850602",
  smsNumber: "+61423850602",
  mapsUrl: "https://maps.app.goo.gl/cmovwUKJaud3tnC18",
} as const;

export const services = [
  { id: "restorations", title: "Roof restorations", short: "Bring your roof back to life", description: "Give an ageing roof a fresh start. Restore its appearance and condition, and help protect your home for the years ahead.", detail: "Tell us about your roof’s age, its condition and any areas you’re concerned about. We’ll discuss the restoration work that may be suitable for your home.", crop: "restoration" },
  { id: "repairs", title: "Roof repairs", short: "Take care of the little things", description: "A leak or a damaged tile shouldn’t become a bigger problem. Get help finding the cause and the right repair for your roof.", detail: "Let us know where you’ve noticed a leak, broken tiles or storm damage. For urgent roofing enquiries, please call us directly.", crop: "repair" },
  { id: "replacements", title: "Roof replacements", short: "A new roof. A fresh start.", description: "When your roof is ready for a new chapter, talk through your options and find a solution that suits your home.", detail: "We’ll discuss your existing roof, the result you’re looking for and the next steps for a replacement quote.", crop: "replacement" },
] as const;
