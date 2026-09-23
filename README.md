# JLJ Roofing — Template 1 website adaptation

JLJ Roofing website concept, using the 12-section structure and charcoal/ember/cream styling of [template-1](https://github.com/esketit3020/template-1).

## Verified business information
- Name: JLJ Roofing
- Contact: 0423 850 602 (confirm with owner before launch)
- Coverage: Melbourne metropolitan areas
- Services: roof restorations, repairs, emergency repairs, replacements
- [Facebook](https://www.facebook.com/p/JLJ-Roofing-100063714176094/)
- [Google profile](https://maps.app.goo.gl/cmovwUKJaud3tnC18)

Sources checked: Chinese Business Guide listings and Support Local Vic. Facebook was supplied as a source but could not be read without access; no unverified ratings, testimonials, licences, names, experience, or emergency response guarantees have been invented.

## Photography
The site reuses the image regions of the design illustration already provided in the JLJ project. All concept images are labelled illustrative, not examples of JLJ's finished work. Replace the image library with approved photographs of actual jobs before public launch.

## Launch
npm ci
npm run build
npm run dev

The free quote form prepares an SMS for visitor confirmation when QUOTE_WEBHOOK_URL is unset. Set HTTPS QUOTE_WEBHOOK_URL and optionally QUOTE_WEBHOOK_SECRET in hosting for automatic form delivery. Until owner approval, src/app/layout.tsx sets noindex/nofollow.
