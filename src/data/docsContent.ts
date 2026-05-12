export type DocSection = {
  slug: string
  icon: string
  title: string
  description: string
  content: string
}

export const docSections: DocSection[] = [
  {
    slug: 'getting-started',
    icon: '🚀',
    title: 'Getting Started',
    description: 'Install AI Boost for Joomla and get structured data working in under 5 minutes.',
    content: `
## System Requirements

Before installing, verify your environment meets these requirements:

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Joomla | 4.0.0 | 5.x or 6.x |
| PHP | 8.1.0 | 8.2+ |
| MySQL / MariaDB | 5.7 / 10.3 | 8.0 / 10.6+ |
| Disk space | 2 MB | — |

Super Admin access to the Joomla Extension Manager is required for installation.

## Step 1 — Download the plugin

Download the latest \`plg_system_joomlaboost-x.x.x.zip\` file from [aiboostnow.com/download](https://aiboostnow.com/download).

## Step 2 — Install via Extension Manager

1. Log in to your Joomla administrator panel (\`yoursite.com/administrator\`).
2. Go to **System → Install → Extensions**.
3. Click the **Upload Package File** tab.
4. Drag and drop the ZIP file into the upload area, or click **Browse for file** and select it.
5. Click **Upload & Install**.

You should see a green success message: *"Installation of the plugin was successful."*

## Step 3 — Enable the plugin

1. Go to **System → Manage → Plugins**.
2. Search for \`AI Boost\` in the search box.
3. Click the red circle (disabled) icon to enable it. It turns green when active.

> **Important:** The plugin is disabled by default after installation. You must enable it before any features take effect.

## Step 4 — Run Quick Setup (5 minutes)

Open the plugin configuration and follow these steps:

**Select a Vertical Preset** — Choose the type that best matches your site:

| Preset | Best for |
|--------|----------|
| Hotel / Accommodation | Hotels, guesthouses, rental properties |
| Restaurant / Cafe | Restaurants, cafes, food businesses |
| Blog / Magazine | News sites, personal blogs, online magazines |
| Generic Business | Agencies, services, corporate sites |
| Medical Clinic | Clinics, doctors, health practices |
| Legal Service | Law firms, solicitors, notaries |

After selecting, set **Apply Preset** to **Yes** and save.

**Fill in Organization details** — Go to the Organization tab and enter at minimum your business name, website URL, phone number, and city/country. This data feeds directly into your Schema.org structured data.

**Enable the XML Sitemap** — Go to the Sitemap tab and ensure **Enable XML Sitemap** is set to **Yes**. Your sitemap is immediately available at \`yoursite.com/sitemap.xml\`.

**Enable OpenGraph** — Go to the Social & Meta tab and set **Enable OpenGraph** to **Yes**.

**Save** — Click **Save & Close**.

## Step 5 — Verify the installation

After saving, verify that AI Boost is working:

- Visit \`yoursite.com/sitemap.xml\` — you should see an XML sitemap.
- Visit \`yoursite.com/robots.txt\` — you should see the AI-aware robots.txt with 25+ crawler rules.
- View source on any page and search for \`application/ld+json\` — this is the Schema.org structured data block.
- Visit \`yoursite.com/llms.txt\` — you should see the AI-readable site overview.

## Upgrading from a previous version

Upload the new ZIP through the Extension Manager — it automatically upgrades the existing installation without losing your settings.

## Uninstalling

Go to **System → Manage → Extensions**, find AI Boost for Joomla, and click **Uninstall**. The plugin's database tables and configuration are removed automatically.
    `.trim(),
  },
  {
    slug: 'organization',
    icon: '🏢',
    title: 'Organization & Identity',
    description: 'Set up your business identity, contact information, social profiles, and location.',
    content: `
## Overview

The Organization tab defines who you are — your business identity, contact details, social profiles, and physical location. This data powers the Schema.org \`Organization\` (or \`LocalBusiness\`) structured data that AI engines use to identify and cite your business as a trusted entity.

## Identity Fields

### Organization Name
Your official business or site name as it should appear in search results and AI citations. Example: \`Acme Hotel Belgrade\`.

This field is multilingual — you can provide the name in each of your installed Joomla languages.

### Organization Description
A 1–3 sentence description of your organization. Keep it factual and authoritative — AI engines use this as a source for direct citations. Example:

> *"Acme Hotel is a 4-star hotel in Belgrade, Serbia, offering luxury accommodation and conference facilities since 1999."*

### Organization Logo
Select your logo image via the Joomla media picker. Recommendations:
- Minimum 112×112 pixels
- Square or landscape ratio
- PNG or JPG format
- Transparent background (PNG preferred)

This logo appears in the Google Knowledge Panel and rich results for your business.

## Contact Details

| Field | Description | Example |
|-------|-------------|---------|
| Website URL | Your canonical URL | \`https://www.yourdomain.com\` |
| Email | Public contact email | \`contact@yourdomain.com\` |
| Phone | International format | \`+1 212 555 1234\` |

Phone numbers in international format are used in \`ContactPoint\` Schema and improve local search visibility.

## Social Media Links

Social media URLs feed into the \`sameAs\` property of your Schema.org Organization block — a key signal for AI entity disambiguation, linking your website to your social profiles as the same real-world entity.

| Network | Example |
|---------|---------|
| Facebook | \`https://www.facebook.com/yourbusiness\` |
| Instagram | \`https://www.instagram.com/yourbusiness\` |
| YouTube | \`https://www.youtube.com/c/yourchannel\` |
| Twitter/X | \`https://twitter.com/yourhandle\` |
| LinkedIn | \`https://www.linkedin.com/company/yourcompany\` |

Leave a field empty to exclude that network from the Schema output. Only add networks where you have an active, real presence.

## Location

### Country Code
Two-letter ISO 3166 code. Examples: \`US\`, \`DE\`, \`RS\`, \`FR\`, \`GB\`, \`AU\`.

### Postal Code
Your postal code. Example: \`10001\` or \`11000\`.

### City / Locality
Your city name, per language. Example: \`Belgrade\` (en), \`Beograd\` (sr).

### Street Address
Street and house number. Example: \`Knez Mihailova 10\`.

### GPS Coordinates
Decimal degree format. Example: \`44.8178\` / \`20.4569\`. Highly recommended for LocalBusiness and Hotel schemas — used by Google Maps integration in rich results.

## Guest Ratings (Advanced)

Enable **Show Advanced Options** in the Plugin tab to access rating fields. Adding an \`AggregateRating\` to your Schema.org output enables star ratings in Google search results.

| Field | Description | Example |
|-------|-------------|---------|
| Rating Value | Average score | \`4.6\` |
| Rating Count | Number of reviews | \`2341\` |
| Best Rating | Maximum scale value | \`5\` |
| Worst Rating | Minimum scale value | \`1\` |
| Rating Source | Platform name | \`Booking.com\` |

> **Important:** Only enter ratings from a verifiable third-party platform. Fabricated ratings violate Google's structured data guidelines and can result in manual penalties.
    `.trim(),
  },
  {
    slug: 'schema',
    icon: '🧠',
    title: 'Schema.org Structured Data',
    description: 'Configure structured data types for your site — from LocalBusiness to Hotel to FAQPage.',
    content: `
## What is Schema.org

Schema.org is the shared vocabulary used by Google, Bing, and AI engines to understand the meaning of your content. By embedding JSON-LD structured data in your pages, you tell machines not just what your page says, but what it means — what type of business you are, what your opening hours are, what questions your FAQ answers.

AI Boost for Joomla generates all Schema.org output as JSON-LD, injected into the \`<head>\` of every page.

## Enable Schema.org

Go to the **Schema.org tab** and ensure **Enable Schema.org** is set to **Yes**. This is the master toggle for all structured data output.

## Choosing a Schema Type

The **Schema Type** field determines the primary structured data type for your site.

| Option | When to use |
|--------|-------------|
| Organization (generic) | Businesses, agencies, services without a physical location |
| LocalBusiness | Any brick-and-mortar business with a physical address |
| Hotel / Accommodation | Hotels, hostels, guesthouses, vacation rentals |
| Restaurant | Restaurants, cafes, bars |
| Medical Clinic | Clinics, medical practices, healthcare providers |
| Legal Service | Law firms, solicitors, notaries |
| Educational Organization | Schools, universities, training centres |
| Health Club | Gyms, fitness centres, sports clubs |
| Dentist | Dental practices |
| Real Estate Agent | Property agencies, real estate companies |
| Person / Portfolio | Personal sites, freelancers, authors |
| News Media Organization | News sites, magazines, press outlets |

## 13 Vertical Presets

Each preset automatically configures the right Schema type and recommended settings for your industry. Select your preset in the Plugin tab to apply it instantly. See the [Site Type Presets](/docs/site-types) documentation for the full list.

## Hotel-Specific Fields

When Schema Type is set to **Hotel**, additional fields appear:

| Field | Description | Example |
|-------|-------------|---------|
| Star Rating | Official classification (1–5) | \`4\` |
| Check-in Time | 24-hour format | \`14:00\` |
| Check-out Time | 24-hour format | \`12:00\` |
| Pets Allowed | Yes / No | Yes |
| Price Range | $ to $$$$ | \`$$$\` |

## FAQ Auto-Detection

When **FAQ Auto-Detect** is enabled (recommended), AI Boost scans your article content for FAQ patterns:

- \`<dl>\` / \`<dt>\` / \`<dd>\` HTML structures
- \`<h3>\` headings followed by \`<p>\` paragraphs
- \`<details>\` / \`<summary>\` accordion elements

Detected FAQs are automatically wrapped in \`FAQPage\` Schema — no manual input required. This is one of the most powerful features for AI Search, as AI engines prioritise FAQ-structured content for direct answers.

## Manual FAQ

Enable **Show Advanced Options** in the Plugin tab to access Manual FAQ. Add your own FAQ items in JSON format:

\`\`\`json
[
  {"question": "What is AI Boost for Joomla?", "answer": "An all-in-one SEO and AEO plugin for Joomla 4, 5, and 6."},
  {"question": "Does it work with Joomla 6?", "answer": "Yes, AI Boost fully supports Joomla 4, 5, and 6."}
]
\`\`\`

## Events Schema

For sites that publish events (concerts, conferences, appointments, tours), AI Boost generates \`Event\` Schema automatically. Configure events in the Schema.org tab's Events section:

- Event name, description, date and time
- Location (venue name and address)
- Organizer information
- Ticket URL and price

## Validating Your Schema

After configuring, validate your output:

1. Visit any page on your site and view source — search for \`application/ld+json\`
2. Copy the JSON block and paste it into [Google's Rich Results Test](https://search.google.com/test/rich-results)
3. Check for errors or missing recommended fields
4. Fix any errors in your AI Boost configuration and re-validate

A passing Rich Results Test means search engines and AI engines can correctly parse your structured data.
    `.trim(),
  },
  {
    slug: 'sitemap',
    icon: '🗺️',
    title: 'XML Sitemap & Hreflang',
    description: 'Auto-generate a dynamic XML sitemap and hreflang tags for multilingual Joomla sites.',
    content: `
## Overview

AI Boost for Joomla generates a dynamic XML sitemap and injects hreflang tags — both in the page \`<head>\` and in the sitemap itself — for multilingual Joomla installations.

## Enabling the XML Sitemap

Go to the **Sitemap tab** and set **Enable XML Sitemap** to **Yes**. Your sitemap is immediately available at:

\`\`\`
https://yoursite.com/sitemap.xml
\`\`\`

No server configuration, no .htaccess changes, and no additional plugins are required. The sitemap is generated dynamically and cached.

## What the Sitemap Includes

By default, the sitemap includes:

- **Articles** — all published Joomla articles
- **Category pages** — all published article categories
- **Menu items** — all public menu items and their linked pages

Each URL entry includes:
- \`<loc>\` — the canonical URL
- \`<lastmod>\` — the last modification date from Joomla's database
- \`<changefreq>\` — how often the content typically changes
- \`<priority>\` — relative importance (0.1 to 1.0)

## Excluding Content

To exclude specific articles or categories from the sitemap, use the per-article override fields (via Joomla Custom Fields) or the category exclusion list in the Sitemap tab's advanced settings.

## Sitemap Ping on Publish

When **Sitemap Ping** is enabled, AI Boost sends a notification to Bing and Google Search Console whenever you publish or update an article, prompting them to re-crawl your sitemap. This works alongside [IndexNow](/docs/analytics) for maximum indexing speed.

## Hreflang for Multilingual Sites

For Joomla sites with multiple languages installed, AI Boost automatically generates hreflang tags that tell search engines which language version of a page to show to which users.

### In the page \`<head>\`

\`\`\`html
<link rel="alternate" hreflang="en" href="https://yoursite.com/en/about" />
<link rel="alternate" hreflang="de" href="https://yoursite.com/de/about" />
<link rel="alternate" hreflang="x-default" href="https://yoursite.com/about" />
\`\`\`

### In the sitemap

\`\`\`xml
<url>
  <loc>https://yoursite.com/en/about</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://yoursite.com/en/about"/>
  <xhtml:link rel="alternate" hreflang="de" href="https://yoursite.com/de/about"/>
</url>
\`\`\`

AI Boost reads your installed Joomla languages and generates the correct IETF language tags automatically — including region codes like \`en-GB\`, \`pt-BR\`, and \`zh-CN\`.

## Advanced Sitemap Settings

Enable **Show Advanced Options** in the Plugin tab to access:

| Setting | Description |
|---------|-------------|
| Article priority | Priority value for article URLs (default: 0.8) |
| Category priority | Priority value for category URLs (default: 0.6) |
| Menu item priority | Priority value for menu URLs (default: 0.5) |
| Change frequency | How often pages are expected to change |
| Include custom HTML pages | Add non-Joomla URLs manually |
| Max articles per sitemap | Split into multiple files for large sites |

## Submitting to Search Engines

After enabling the sitemap, submit it to:

- **Google Search Console** — go to Search Console → Sitemaps → add your sitemap URL
- **Bing Webmaster Tools** — go to Sitemaps → Submit sitemap

Once submitted, search engines will re-crawl it automatically whenever it changes. AI Boost also pings search engines on every article publication if you have that option enabled.
    `.trim(),
  },
  {
    slug: 'social',
    icon: '📱',
    title: 'OpenGraph & Social Meta',
    description: 'Control how your pages appear when shared on Facebook, LinkedIn, Twitter/X, and Slack.',
    content: `
## Overview

OpenGraph and Twitter Cards are meta tags that control how your pages appear when shared on social media. Without them, platforms guess — picking random images, truncated paragraphs, and wrong titles. With them, every shared link looks exactly as you intend.

## Enabling OpenGraph

Go to the **Social & Meta tab** and set **Enable OpenGraph** to **Yes**.

AI Boost immediately injects the following tags on every page:

\`\`\`html
<meta property="og:title" content="Your page title" />
<meta property="og:description" content="Your page description" />
<meta property="og:image" content="https://yoursite.com/your-og-image.jpg" />
<meta property="og:url" content="https://yoursite.com/current-page" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Your site name" />
\`\`\`

## Setting a Default OG Image

Upload a default OG image in the Social & Meta tab. This image is used for all pages that do not have a per-article override.

**Recommended specifications:**
- Size: **1200 × 630 pixels** (2:1 aspect ratio)
- Format: JPG or PNG
- File size: under 1 MB
- Content: your logo or a branded header image

Facebook, LinkedIn, and Slack all use this image for the preview card when a page is shared.

## Twitter Cards

AI Boost generates Twitter Card meta tags alongside OpenGraph. The card type is set to \`summary_large_image\` by default — the format that produces a large banner image in the X feed, which significantly outperforms the smaller \`summary\` card for content-driven pages.

\`\`\`html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your page title" />
<meta name="twitter:description" content="Your page description" />
<meta name="twitter:image" content="https://yoursite.com/your-og-image.jpg" />
\`\`\`

## Per-Article Overrides

For blog posts, news articles, and events, you can override the global defaults with article-specific OG data. AI Boost integrates with Joomla's Custom Fields system:

1. Create a Custom Field of type **Text** for OG title override (\`og_title\`)
2. Create a Custom Field of type **Textarea** for OG description override (\`og_description\`)
3. Create a Custom Field of type **Media** for OG image override (\`og_image\`)
4. Assign these fields to your Article type

When an article has these custom fields filled in, AI Boost uses those values instead of the global defaults. When left empty, the global defaults apply automatically.

## Meta Pixel (Facebook Ads)

The Social & Meta tab also includes Meta Pixel (formerly Facebook Pixel) integration:

1. Enter your **Pixel ID** from Facebook Business Manager
2. Set **Enable Meta Pixel** to **Yes**
3. The pixel fires on every page load automatically

On the Professional plan, Meta Pixel activation is a paid feature. Enable it in the Debug tab's Dev Bypass if you need to test on a development license.

## Troubleshooting OG Tags

**Facebook/LinkedIn showing cached old image:** Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to force-refresh the cached preview.

**OG image not showing:** Ensure the image URL is absolute (starts with \`https://\`), the image is publicly accessible (not behind login), and is at least 200×200 pixels.

**Wrong title or description:** Check whether an article-level Custom Field override is in place — those take priority over the global settings.
    `.trim(),
  },
  {
    slug: 'analytics',
    icon: '📊',
    title: 'Analytics & Tracking',
    description: 'Connect GA4, Google Tag Manager, Google Search Console verification, and IndexNow.',
    content: `
## Overview

The Analytics tab connects your Joomla site to the measurement and indexing tools you need: Google Analytics 4, Google Tag Manager, Google Search Console verification, Meta Pixel, and IndexNow for instant page submission.

## Google Analytics 4

1. Go to your [Google Analytics](https://analytics.google.com) account and create a new property (or open an existing one).
2. Copy the **Measurement ID** — it starts with \`G-\` (e.g., \`G-XXXXXXXXXX\`).
3. Paste it into the **GA4 Measurement ID** field in AI Boost's Analytics tab.
4. Set **Enable GA4** to **Yes** and save.

AI Boost injects the GA4 tracking snippet on every page. No template modification needed.

### GDPR / Consent Manager Integration

If you use YooTheme Pro's GDPR Consent Manager, AI Boost detects consent status and only fires GA4 after the user has accepted analytics cookies. No additional configuration is required — the integration is automatic.

## Google Tag Manager

If you prefer to manage all tags through GTM:

1. Copy your **GTM Container ID** (e.g., \`GTM-XXXXXXX\`).
2. Enter it in the **GTM Container ID** field.
3. Set **Enable GTM** to **Yes** and save.

AI Boost injects both the \`<head>\` GTM snippet and the \`<body>\` \`<noscript>\` fallback correctly.

> **Note:** If you enable both GA4 and GTM, disable GA4 in AI Boost and manage it through GTM to avoid double-counting pageviews.

## Google Search Console Verification

To verify your site ownership in Google Search Console without editing template files:

1. In Google Search Console, choose the **HTML tag** verification method.
2. Copy the \`content\` attribute value from the meta tag (a long string starting with \`google-site-verification=\`).
3. Paste it into the **GSC Verification Code** field in AI Boost.
4. Save, then click **Verify** in Google Search Console.

AI Boost injects the verification meta tag automatically on your homepage.

## IndexNow

IndexNow is an open protocol that notifies Bing, Yandex, and Seznam the instant you publish or update a page — bypassing the standard crawl queue.

### Setting up IndexNow

1. Click **Generate API Key** in the Analytics tab.
2. AI Boost creates a random key, saves it, and serves it at \`yoursite.com/{key}.txt\` automatically.
3. Set **Enable IndexNow** to **Yes** and save.

From this point, every time you publish or update an article, AI Boost sends an IndexNow notification automatically. Pages that were previously taking days to index are typically indexed within minutes.

IndexNow is available on the Professional plan.

## llms.txt

llms.txt is a plain text file that gives AI assistants (ChatGPT, Perplexity, Claude) a structured overview of your site's content before they crawl individual pages.

Enable **Generate llms.txt** in the Analytics tab. AI Boost serves a dynamically generated \`llms.txt\` at \`yoursite.com/llms.txt\`, automatically including:

- Your organization name and description
- Key pages from your Joomla menu and sitemap
- Your contact information

The file updates automatically when you change your organization details or add new content.

llms.txt is available on the Professional plan.

## Meta Pixel

Enter your **Meta Pixel ID** from Facebook Business Manager and set **Enable Meta Pixel** to **Yes**. The pixel fires on every page load.

Meta Pixel integration is a paid feature available on the Professional plan.
    `.trim(),
  },
  {
    slug: 'robots',
    icon: '🤖',
    title: 'robots.txt & AI Crawlers',
    description: 'Manage crawler access rules for AI engines, search bots, and your staging environment.',
    content: `
## Overview

robots.txt is the access control file for web crawlers. Every crawler — from Googlebot to GPTBot — checks this file before indexing your site. In 2026, with 25+ AI bots crawling the web, getting your robots.txt right is critical for both traditional SEO and AI search visibility.

## Enabling Dynamic robots.txt

Go to the **Plugin tab** → **Robots.txt section** and set **Enable Dynamic robots.txt** to **Yes**.

AI Boost serves a dynamically generated \`robots.txt\` at \`yoursite.com/robots.txt\`. This replaces any static \`robots.txt\` file you may have.

> **Note:** If you have a physical \`robots.txt\` file in your Joomla site root, remove it. The dynamic version from AI Boost takes precedence, but removing the static file avoids confusion.

## What the Generated robots.txt Includes

\`\`\`
User-agent: *
Disallow: /administrator/
Disallow: /cache/
Disallow: /tmp/
Disallow: /installation/
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
\`\`\`

AI Boost adds explicit \`Allow\` directives for 25+ AI crawlers, ensuring none of them are accidentally blocked by a broad \`Disallow\` rule targeting Joomla's system paths.

## The 25+ AI Crawlers Widget

In the Schema.org tab, AI Boost provides a compact widget with all major AI crawlers:

| Crawler | Company | Default |
|---------|---------|---------|
| GPTBot | OpenAI (ChatGPT) | Allow |
| ClaudeBot | Anthropic | Allow |
| PerplexityBot | Perplexity AI | Allow |
| Googlebot | Google | Allow |
| Bingbot | Microsoft | Allow |
| DuckDuckBot | DuckDuckGo | Allow |
| BaiduBot | Baidu | Allow |
| YandexBot | Yandex | Allow |
| facebookexternalhit | Meta | Allow |
| Twitterbot | X (Twitter) | Allow |
| LinkedInBot | LinkedIn | Allow |

You can toggle individual crawlers on or off without editing the file manually.

## Staging Mode

When you are working on a staging or development copy of your site and do not want it indexed:

1. Go to the **Debug tab** in AI Boost.
2. Enable **Staging Mode**.

AI Boost switches the robots.txt to:

\`\`\`
User-agent: *
Disallow: /
\`\`\`

This blocks all crawlers on your staging environment without touching your production robots.txt. Remember to disable Staging Mode before launching.

## Custom robots.txt Rules

Enable **Show Advanced Options** in the Plugin tab to access the custom robots.txt editor. You can append additional \`User-agent\` / \`Disallow\` / \`Allow\` rules for specific crawlers or paths.

## Troubleshooting

**robots.txt showing old content:** Clear Joomla's cache (**System → Clear Cache**) and reload \`yoursite.com/robots.txt\`.

**AI crawlers still blocked:** If you previously had a static \`robots.txt\` with \`Disallow: /\`, check that the static file has been removed from the server root. Some caching plugins or CDNs may also cache the old robots.txt — flush your CDN cache.

**Google Search Console robots.txt fetcher error:** The GSC robots.txt tester fetches the file with a specific user agent. Ensure your hosting does not block the GSC user agent. AI Boost's dynamic robots.txt serves correctly to all user agents.
    `.trim(),
  },
  {
    slug: 'business-hours',
    icon: '🕐',
    title: 'Business Hours Widget',
    description: 'Set your opening hours using a compact 7-row table — generates proper Schema.org automatically.',
    content: `
## Overview

The Business Hours widget is a compact 7-row table in the Organization tab that lets you set your opening hours for each day of the week. AI Boost converts these hours into the correct \`openingHoursSpecification\` format in your Schema.org output — enabling AI engines to answer questions like "Is this business open on Sundays?" with confidence.

The Business Hours widget is available on the **Professional plan**.

## Setting Up Business Hours

1. Go to the **Organization tab** in AI Boost.
2. Scroll to the **Business Hours** section.
3. Set your hours using the 7-row weekly table.

Each row represents one day of the week: Monday through Sunday.

## All Same / Individual Toggle

At the top of the Business Hours widget, there are two mode buttons:

**All same** — applies the same opening hours to all seven days. Enter the hours once and they apply to every day. Ideal for businesses with consistent hours throughout the week.

**Individual** — sets different hours for each day. Each row becomes independently editable.

## Setting Hours

For each day, you can:

- Enter an **opening time** (e.g., \`09:00\`)
- Enter a **closing time** (e.g., \`18:00\`)
- Mark the day as **Closed** — tick the checkbox to exclude that day from the Schema output

Use 24-hour time format throughout.

## Example Configuration

A hotel reception with extended weekend hours might be configured as:

| Day | Opens | Closes |
|-----|-------|--------|
| Monday | 08:00 | 20:00 |
| Tuesday | 08:00 | 20:00 |
| Wednesday | 08:00 | 20:00 |
| Thursday | 08:00 | 20:00 |
| Friday | 08:00 | 22:00 |
| Saturday | 09:00 | 22:00 |
| Sunday | 10:00 | 18:00 |

## Schema.org Output

AI Boost converts your business hours into the \`openingHoursSpecification\` format:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "22:00"
    }
  ]
}
\`\`\`

Days with the same hours are grouped automatically to keep the Schema clean and valid.

## Validating Business Hours

After setting your hours, validate the output:

1. Visit any page on your site and view source — find the \`application/ld+json\` block.
2. Copy it and paste it into [Google's Rich Results Test](https://search.google.com/test/rich-results).
3. Check that \`openingHoursSpecification\` is listed without errors.

Correct business hours in Schema.org improve your eligibility for the Google Business Profile-style rich result panel in search results.

## Why Business Hours Matter for AI Search

When a user asks an AI assistant "Is [business name] open on Saturday?", the AI engine looks for \`openingHoursSpecification\` in your structured data to answer confidently. Without this data, the AI either cannot answer or may give incorrect information from another source. With properly formatted hours, your business gets cited correctly.
    `.trim(),
  },
  {
    slug: 'site-types',
    icon: '🏪',
    title: '13 Site Type Presets',
    description: 'One-click presets that fill the right schema fields for your industry automatically.',
    content: `
## Overview

AI Boost for Joomla includes 13 vertical presets — one-click configurations that set the correct Schema.org type and recommended field defaults for your specific industry. Instead of manually configuring every option, you select your site type and get a pre-optimised starting point.

Presets are applied in the **Plugin tab → Quick Setup → Vertical Preset**.

## The 13 Presets

### Free Plan Presets

| Preset | Schema Type | Best for |
|--------|-------------|---------|
| **Generic Business** | \`Organization\` | Agencies, consultancies, SaaS products |
| **Blog / Magazine** | \`Blog\` + \`Article\` | News sites, personal blogs, online magazines |
| **Restaurant / Cafe** | \`Restaurant\` | Restaurants, cafes, bars, food businesses |
| **E-commerce** | \`Store\` + \`Product\` | Online shops, product catalogues |
| **Event / Entertainment** | \`Event\` | Ticketing sites, concert venues, event pages |

### Professional Plan Presets

| Preset | Schema Type | Best for |
|--------|-------------|---------|
| **Hotel / Accommodation** | \`Hotel\` | Hotels, hostels, guesthouses, vacation rentals |
| **Medical Clinic** | \`MedicalClinic\` | Clinics, GP practices, healthcare providers |
| **Legal Service** | \`LegalService\` | Law firms, solicitors, legal advisors |
| **Educational Organization** | \`EducationalOrganization\` | Schools, universities, training centres |
| **Health Club** | \`HealthClub\` + \`SportsActivityLocation\` | Gyms, fitness centres, yoga studios |
| **Dentist** | \`Dentist\` | Dental practices, orthodontists |
| **Real Estate Agent** | \`RealEstateAgent\` | Property agencies, estate agents |
| **Person / Portfolio** | \`Person\` | Freelancers, consultants, personal portfolios |
| **News Media** | \`NewsMediaOrganization\` | Newspapers, news sites, press agencies |

## What a Preset Configures

Applying a preset automatically sets:

- **Schema type** — the primary \`@type\` for your Organization block
- **FAQ auto-detect** — enabled for content-heavy types (Blog, FAQ, Educational)
- **Sitemap settings** — priorities and change frequencies appropriate for the content type
- **Advanced fields** — hotel-specific fields (check-in/check-out, star rating) for Hotel preset, opening hours fields for retail presets

After applying a preset, all individual settings can still be overridden. The preset is a starting point, not a lock.

## Applying a Preset

1. Go to the **Plugin tab**.
2. Select your site type from the **Vertical Preset** dropdown.
3. Set **Apply Preset** to **Yes**.
4. Click **Save & Close**.

The preset is applied on save and the **Apply Preset** toggle resets to **No** automatically — preventing accidental re-application on future saves.

## Schema.org Output by Preset

### Hotel Preset example

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Acme Hotel Belgrade",
  "starRating": { "@type": "Rating", "ratingValue": "4" },
  "checkinTime": "14:00",
  "checkoutTime": "12:00",
  "petsAllowed": false,
  "openingHoursSpecification": [...]
}
\`\`\`

### Medical Clinic preset example

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "City Health Clinic",
  "medicalSpecialty": "General Practice",
  "availableService": { "@type": "MedicalTherapy", "name": "Primary Care" },
  "openingHoursSpecification": [...]
}
\`\`\`

## Mixing Presets with Custom Configuration

Most sites are best served by a preset plus a few manual adjustments. For example:

- Apply the **Hotel** preset → then manually add your specific star rating, GPS coordinates, and business hours.
- Apply the **Legal Service** preset → then add your practice areas in the Organization description.
- Apply the **Blog / Magazine** preset → then enable Manual FAQ for your most common reader questions.

The FAQ schema, OpenGraph, IndexNow, and llms.txt features work across all preset types — they are not limited to specific verticals.
    `.trim(),
  },
]

export function getDocSection(slug: string): DocSection | undefined {
  return docSections.find(s => s.slug === slug)
}

export function getAdjacentSections(slug: string): { prev?: DocSection; next?: DocSection } {
  const idx = docSections.findIndex(s => s.slug === slug)
  return {
    prev: idx > 0 ? docSections[idx - 1] : undefined,
    next: idx < docSections.length - 1 ? docSections[idx + 1] : undefined,
  }
}
