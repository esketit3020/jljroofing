# JLJ Roofing Melbourne

A responsive Next.js / TypeScript implementation of the approved navy-and-orange homepage mockup.

## Development

```sh
npm ci
npm run dev
```

The development server uses port 4173. Production: `npm run build`, then `npm start`.

## Included

- App Router, responsive navigation, tap-to-call buttons, service details and a quote flow.
- Original design-reference artwork reused as photographic regions. Page text, controls and layout are live HTML/CSS, not an embedded page screenshot.
- Keyboard focus styles, labelled inputs, reduced-motion support, custom favicon and page metadata.
- No fabricated reviews, credentials, guarantees, years of experience, or completed projects.

## Enquiries

Without environment configuration, the form validates details and prepares a text message to the business's published mobile, **0423 850 602**. It clearly tells the visitor that nothing has been sent yet. Visitors choose to open their SMS app or copy the request. There is no fake submission confirmation.

For automatic delivery, set `QUOTE_WEBHOOK_URL` to your HTTPS Make, n8n, CRM or other enquiry receiver in Vercel. Optionally set `QUOTE_WEBHOOK_SECRET` for a bearer token. Redeploy after adding these values. The server validates input and forwards name, phone, suburb, service and optional details as JSON. A success message is shown only after the receiver returns success. Keep secrets on the server; never use `NEXT_PUBLIC_` for webhook settings. Add provider-level rate limiting/CAPTCHA before enabling an unattended public receiver.

## Content status

This is a published design proposal. Imagery is illustrative artwork from the supplied mockup and is labelled as such, including the restoration comparison. It must not be represented as actual completed JLJ projects. Replace `public/images/design-reference.png` and the `Photo` component with owner-approved project photos before an operational launch. The public directory phone listing was checked on 23 September 2026; confirm the contact number, quote terms and service coverage with the business before launch.

Robots are set to `noindex, nofollow` while this is a proposal. Change `metadata.robots` in `src/app/layout.tsx` after business approval. No street address, invented email, review rating, or unverified structured business data is published.

## Deploy to Vercel

Import the GitHub repository `jljroofing` in Vercel. The root directory is the repository root and the framework preset is **Next.js**. Use the default install/build/output settings; `vercel.json` identifies the framework. Environment variables are optional for the text-message flow.

## Reference

Design supplied by the user: **JLJ Roofing Melbourne Website Mockup.png**.
Business contact source: https://www.chinesebusinessguide.com.au/cbg-listing/roofRepairs.asp
