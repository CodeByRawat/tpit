# The Primeinfotech — Single Page Scrollable Website

## Task
Build a single `index.html` file — a fully scrollable one-page website for **The Primeinfotech**, a loan lead generation company serving the USA and Canada. All sections scroll on one page. No separate pages.

---

## Tech Stack
- Single file: `index.html`
- Tailwind CSS via CDN
- Vanilla JS (mobile menu, smooth scroll, FAQ accordion, form handling, scroll animations)
- No backend — forms are UI only
- Fully mobile responsive

---

## Brand & Design
- **Primary:** `#0A1628` (deep navy)
- **Accent:** `#1E6FFF` (electric blue)
- **Highlight:** `#C8952A` (gold)
- **Light BG:** `#F5F7FA`
- **Font:** Inter via Google Fonts
- **Style:** Premium fintech — trustworthy, bold, modern
- **Effects:** Fade-in on scroll, hover lift on cards, smooth transitions on everything

---

## SEO (in `<head>`)
```html
<title>Trusted Loan Leads for Financial Companies | The Primeinfotech</title>
<meta name="description" content="The Primeinfotech connects lenders with verified loan seekers across the USA and Canada, delivering quality leads from homebuyers, refinancers, and property buyers.">
<meta name="keywords" content="loan leads, home financing, refinance leads">
```

---

## Navbar
- Sticky top, navy background
- Logo left: **The Primeinfotech** (bold, white)
- Links right — smooth scroll anchors: Home | About | Services | Contact
- Active link highlights in gold as user scrolls
- Mobile: hamburger toggle menu

---

## Section 1 — Hero `#home`
- Full viewport height
- Dark navy gradient overlay on background image
- BG: `https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600`
- Headline: `Connecting You with Loan Seekers`
- Subheadline: `Quality leads for home, refinance, and personal loans across USA and Canada`
- Buttons: **Learn More** (outline, scrolls to #about) | **Get Leads** (gold, scrolls to #contact)

---

## Section 2 — Who We Are `#about`
- 2-col layout: text left, image right
- Image: `https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=600`
- Heading: `Who We Are`
- Body: `Connecting financial companies with serious loan seekers across the USA and Canada. We source verified, motivated borrowers actively seeking home loans, refinancing, and personal financing solutions.`
- CTA Button: **Get Leads** (scrolls to #contact)

---

## Section 3 — Services `#services`
- Navy background, white text
- Heading: `Our Services`
- Subheading: `Connecting financial companies with ready-to-act loan seekers across USA and Canada.`
- 3 cards in a grid:

| Title | Description | Image |
|---|---|---|
| Loan Leads | High-quality leads from customers actively seeking loans. | `https://images.unsplash.com/photo-1647365363162-54f983245cf1?w=600` |
| Home Buyers | Verified prospects looking to purchase homes or properties. | `https://images.unsplash.com/photo-1592599457566-c660153d9548?w=600` |
| Refinance Leads | Leads interested in refinancing to better rates and terms. | `https://images.unsplash.com/photo-1587697446083-e96d16f0be94?w=600` |

Each card: image top, title, description, **Get Leads** button (scrolls to #contact).

---

## Section 4 — Sample Properties
- Light BG
- Heading: `Sample Lead Properties`
- Subheading: `Examples of property types our leads are seeking financing for.`
- 3-col grid, 6 cards:

| Title | Description | Price | Image |
|---|---|---|---|
| Cozy Family Home | Perfect for first-time buyers | $250K | `https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?w=400` |
| Urban Apartment | Ideal for city living | $320K | `https://images.unsplash.com/photo-1691425648793-8412963f3909?w=400` |
| Luxury Condo | High-end finishes included | $450K | `https://images.unsplash.com/photo-1604170665198-4f7185bc3c01?w=400` |
| Country Ranch | Peaceful setting, lots of space | $380K | `https://images.unsplash.com/photo-1606130887452-7d0cb055e30b?w=400` |
| Starter Home | Affordable and move-in ready | $200K | `https://images.unsplash.com/photo-1683472698811-f0f52f50434c?w=400` |
| Modern Townhouse | Close to schools and shops | $310K | `https://images.unsplash.com/photo-1696846911635-83b97e53fb65?w=400` |

Each card: image, title, price badge (gold), description, **Get Leads** button.

---

## Section 5 — FAQ `#faq`
- White background
- Heading: `Frequently Asked Questions`
- Accordion style, first item open by default

| Question | Answer |
|---|---|
| What is PrimeInfotech? | We provide loan leads to financial companies in the US and Canada. |
| How do you collect leads? | We gather data from platforms like Google Ads, Meta, and others where interested customers fill out forms. |
| Who can use your leads? | Financial companies looking for customers interested in loans, home buying, refinancing, or property purchases. |
| Where are your leads from? | Our leads primarily come from the USA and Canada. |
| Is the data verified? | Yes, we ensure the leads are genuine and interested in financial services. |
| How can I get started? | Simply contact us through our website or loaneg.com to discuss your requirements and start receiving leads. |

---

## Section 6 — Testimonial
- Light BG, centered
- Quote: *"Thanks to the primeinfotech, we connected with serious homebuyers quickly and boosted our loan approvals."*
- Name: **J. Lee** | Stars: ★★★★★
- Avatar: `https://images.unsplash.com/photo-1552345387-6ba8e88460a7?w=80`

---

## Section 7 — Our Projects
- Navy BG, white text
- Heading: `Our Projects`
- Subheading: `Connecting lenders with eager borrowers.`
- 4-col icon grid:

| Icon | Title | Description |
|---|---|---|
| 🏠 | Home Loans | Qualified buyers seeking new homes. |
| 📉 | Refinance | Clients looking to lower rates. |
| 🏢 | Property Loans | Investors ready to buy properties. |
| 📊 | Lead Sourcing | Data collected from top platforms. |

---

## Section 8 — Contact `#contact`
- Split layout: form left, info right
- Heading: `Contact Us`

**Form (left)**
- Fields: Full Name | Email Address (required) | Phone Number (required)
- Button: **Get Loan Leads** (gold)
- On submit: show success message → *"Thanks! We'll be in touch shortly."*

**Info (right)**
- Banner image: `https://images.unsplash.com/photo-1703072662739-70940f1fe9d6?w=800`
- USA: 123 Finance Ave, New York — 9am–6pm Mon–Fri
- Canada: 456 Maple St, Toronto — 9am–5pm Mon–Fri
- Email: support@loaneg.com | info@primeinfotech.com
- Phone: +1-555-789-1234

---

## Footer
- Navy background
- Logo + tagline: *"Helping you connect with the right leads"*
- Nav links: Home | About | Services | FAQ | Contact (all smooth scroll)
- Social icons: Facebook, Instagram, TikTok, Twitter/X
- `© 2025 The Primeinfotech. All rights reserved.`

---

## JS Behaviour
- Smooth scroll for all anchor links
- Navbar highlights active section on scroll (Intersection Observer)
- FAQ accordion — click to open/close, only one open at a time
- Scroll animations — elements fade up as they enter viewport
- Mobile hamburger — toggles nav links
- Contact form — prevent default, show success message inline

---

## Deliverable
- Single file: `index.html`
- All sections in one scrollable page
- No separate HTML files
