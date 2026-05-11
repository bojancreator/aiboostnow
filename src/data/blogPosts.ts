export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-schema-org',
    title: 'What is Schema.org — and why Google, ChatGPT and Perplexity care about it',
    description: 'Schema.org is the shared vocabulary that helps search engines and AI assistants understand what your web pages are really about — not just the words on them.',
    date: '2026-05-01',
    readTime: '6 min read',
    tags: ['Schema.org', 'Structured Data'],
    content: `
## The invisible layer of the web

When you visit a webpage, you see text, images, and layout. But search engines and AI assistants see something different — they see HTML, and they have to guess what everything means. Is that number a price, a phone number, or a star rating? Is that name the author, the business owner, or a fictional character?

Schema.org was created to solve this problem. It is a shared vocabulary — a standardised set of labels — that lets you tell search engines exactly what your content means, not just what it says.

Schema.org is maintained by Google, Bing, Yahoo, and Yandex jointly. It defines types like *Organization*, *Article*, *FAQPage*, *Product*, *Event*, *LocalBusiness*, *Hotel*, and hundreds more. Each type has a set of properties: a Hotel has a starRating and a checkInTime. An Article has an author and a datePublished. A FAQPage has questions and acceptedAnswers.

## Why it matters for traditional search

Google uses Schema.org data to power its **rich results** — the enhanced search listings that show star ratings, event dates, FAQ dropdowns, product prices, and recipe details directly in the search results page, before a user even clicks.

Rich results consistently earn higher click-through rates than plain blue links. A listing with five gold stars stands out. A FAQ accordion that expands directly in the SERP captures attention at zero cost.

Beyond click-through, structured data also helps Google understand your site well enough to show it in the **Knowledge Panel** — the information box that appears on the right side of search results for well-known businesses, people, and places. Getting into the Knowledge Panel requires that Google can confidently identify who you are and what you do. Schema.org is how you make that identification explicit.

## Why it matters for AI search

This is where things get significantly more interesting in 2026.

AI assistants like ChatGPT (with Browse), Perplexity, and Google AI Overviews do not simply rank pages by keyword relevance. They *read* pages, extract facts, and synthesise answers from multiple sources. The pages they choose to cite are the ones they can most confidently understand and verify.

Structured data plays a direct role here. When your FAQ questions and answers are marked up with FAQPage schema, an AI assistant can extract them reliably without having to parse your HTML structure and guess which paragraphs are questions versus answers. When your business hours are in openingHoursSpecification format, Perplexity can answer "Is Acme Hotel open on Sundays?" with confidence.

Google's AI Overviews in particular have been shown to disproportionately cite pages with strong structured data signals. The reason is straightforward: structured data reduces ambiguity, and AI systems prefer unambiguous sources.

## The JSON-LD format

Schema.org data can be embedded in several ways. The format recommended by Google — and the one that causes zero risk of visual interference — is **JSON-LD** (JavaScript Object Notation for Linked Data). It sits in a \`<script type="application/ld+json">\` block in your page's \`<head>\`, completely separate from the visible HTML.

A simple Organization schema looks like this:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acme Hotel Belgrade",
  "url": "https://acme-hotel.com",
  "telephone": "+381 11 123 4567",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RS",
    "addressLocality": "Belgrade"
  }
}
\`\`\`

Every field you add improves the machine's confidence in your data.

## The challenge for Joomla sites

Writing Schema.org JSON-LD by hand is technically straightforward but practically tedious. A proper Hotel schema with opening hours, ratings, amenities, and multilingual fields runs to dozens of lines. Keeping it synchronised with your actual content — when you update phone numbers, add events, or publish new articles — is even harder.

This is exactly what **AI Boost for Joomla** handles automatically. It reads your Joomla configuration, generates the correct Schema.org type for your site (Hotel, Restaurant, MedicalClinic, LocalBusiness, and 10 more), populates all required and recommended fields, and injects a correctly formatted JSON-LD block on every page — without you touching a single line of code.

The result is that your pages communicate their meaning clearly to every search engine and AI assistant that crawls them, giving you the structural foundation for rich results and AI citations.
    `.trim(),
  },
  {
    slug: 'what-is-llms-txt',
    title: 'What is llms.txt — the new standard that helps AI engines understand your site',
    description: 'llms.txt is a simple text file, placed at the root of your website, that gives AI assistants a structured overview of your content so they can crawl and cite it more accurately.',
    date: '2026-05-03',
    readTime: '5 min read',
    tags: ['llms.txt', 'AI Search'],
    content: `
## A new file for a new era

You almost certainly know about \`robots.txt\` — the file that tells search engine crawlers which pages they can and cannot access. And you probably know about \`sitemap.xml\` — the file that lists all your pages so crawlers can find them efficiently.

**\`llms.txt\`** is the newest addition to this family. Proposed in late 2024 and rapidly adopted by websites aiming for visibility in AI-powered search, it is a plain text file that describes your site's content in a format optimised for Large Language Models (LLMs) — the AI systems that power ChatGPT, Perplexity, Claude, and Google AI Overviews.

## What robots.txt and sitemaps cannot do

\`robots.txt\` and \`sitemap.xml\` were designed for traditional web crawlers. They answer two questions: *can you crawl this page?* and *does this page exist?* They say nothing about what the content means, how it is structured, or which parts are most important.

AI assistants face a harder problem than traditional crawlers. They do not just index pages — they understand them. When a user asks "what's the best way to configure Schema.org for a hotel website?", the AI needs to find not just a page that contains those words, but a page that actually addresses that question with accurate, trustworthy content.

\`llms.txt\` gives AI systems the orientation they need before they dive into your individual pages. It answers: *what is this site about, who runs it, and where is the most important content?*

## The format

\`llms.txt\` follows a simple Markdown-like structure:

\`\`\`
# Acme Hotel Belgrade

> A 4-star hotel in Belgrade, Serbia, offering luxury rooms and conference facilities.

## Key pages

- [Home](https://acme-hotel.com/): Hotel overview and booking
- [Rooms](https://acme-hotel.com/rooms): Room types and rates
- [Restaurant](https://acme-hotel.com/restaurant): Dining options
- [Contact](https://acme-hotel.com/contact): Address and directions

## About

Acme Hotel has been operating since 1999. We accommodate both leisure and business travellers.
\`\`\`

The file starts with a level-1 heading (the site name), a blockquote description, and then structured sections linking to the most important pages. The AI uses this as a map — a high-level understanding of your site before it decides which pages to crawl and cite.

## Who reads llms.txt?

The file is read by AI crawlers like **PerplexityBot**, **GPTBot** (OpenAI), **ClaudeBot** (Anthropic), **Googlebot** (for AI Overviews), and emerging crawlers from other AI providers. It is also read by AI tools that allow users to ask questions about specific websites.

As of 2026, support among major AI systems is growing rapidly. Perplexity has confirmed that it uses \`llms.txt\` when present. ChatGPT's Browse feature and Google's AI Overviews are increasingly influenced by the file's existence and content quality.

## Why AI crawlers benefit from it

Without \`llms.txt\`, an AI crawler arrives at your site cold. It crawls your homepage, follows some links, reads some pages, and tries to build a picture of what you offer. It may miss your best content if it is buried in page 3 of category archives. It may misidentify your site's primary purpose.

With \`llms.txt\`, you give the AI a curated introduction. You highlight your most authoritative pages. You provide a precise description of who you are and what you do. This reduces the chance of misattribution — being cited for something tangential when your core expertise is something else entirely.

## How AI Boost for Joomla handles llms.txt

Writing and maintaining \`llms.txt\` by hand requires you to keep it in sync with your site's actual content — updating it whenever you add major new pages or change your site's focus.

**AI Boost for Joomla** generates \`llms.txt\` dynamically and serves it at \`yoursite.com/llms.txt\`. It automatically includes your organisation name, description, and key pages from your Joomla menu and sitemap. When you add new content or update your organisation details, \`llms.txt\` updates with it.

The file is one of the features available on the Developer and Agency plans — because for sites that depend on AI-driven discovery, being invisible to LLM crawlers is a significant competitive disadvantage.
    `.trim(),
  },
  {
    slug: 'what-is-indexnow',
    title: 'What is IndexNow — get your pages indexed in minutes, not days',
    description: 'IndexNow is an open protocol that lets you notify Bing, Yandex, and other search engines the instant you publish or update a page — bypassing the standard crawl queue entirely.',
    date: '2026-05-05',
    readTime: '5 min read',
    tags: ['IndexNow', 'Indexing'],
    content: `
## The crawl queue problem

Traditional search engine indexing works like this: you publish a page, and then you wait. A Googlebot or Bingbot crawler eventually discovers the page — through your sitemap, through a link from another page, or through periodic re-crawling of your domain. This process takes anywhere from a few hours to several days. For large sites with thousands of pages, some content may wait weeks before being indexed.

For news sites, events, time-sensitive promotions, or any business that publishes regularly, this delay is a real problem. A hotel that adds a new special offer wants that offer visible in search results today, not next week.

**IndexNow** solves this directly.

## How IndexNow works

IndexNow is an open protocol developed by Microsoft (Bing) and adopted by Yandex, Seznam, and other search engines. When you publish or update a page, your server sends an HTTP request to the IndexNow endpoint — a simple notification that says: *"this URL has just changed, please re-crawl it now."*

The participating search engines share IndexNow submissions with each other, so a single API call notifies multiple engines at once.

The technical mechanism:

1. You generate a unique API key (a random string)
2. You place a text file at \`yoursite.com/{api-key}.txt\` containing the key — this proves you own the domain
3. When content changes, you send a POST request to \`api.indexnow.org\` with the API key and the URL

The search engine receives the notification and prioritises crawling that URL, typically within minutes.

## What IndexNow does not cover

IndexNow notifies Bing, Yandex, and Seznam. **It does not directly affect Google indexing.** Google has its own inspection API (via Search Console) and its own crawl scheduling. However, Google has signalled interest in IndexNow and partially participates through its membership in the broader ecosystem.

For Google specifically, the best complementary tool is Google Search Console's URL inspection — but that requires manual action per URL. IndexNow is fully automated.

## Who benefits most from IndexNow

- **News and magazine sites** that publish multiple articles per day
- **E-commerce sites** where prices, availability, and products change frequently
- **Event sites** announcing dates, lineups, and ticket availability
- **Hotel and hospitality sites** running limited-time offers
- **Any site** where freshness of content is part of the value proposition

Even for slower-publishing sites, IndexNow ensures that when you do update something important — your homepage, your pricing page, your contact information — search engines know about it immediately.

## IndexNow in AI Boost for Joomla

Setting up IndexNow manually requires generating a key, placing the key file, writing the API call logic, and wiring it to Joomla's content events. For most Joomla site owners, that is an afternoon of work.

**AI Boost for Joomla** handles all of this with a single toggle. Enable IndexNow in the Analytics tab, click "Generate API Key", and save. The plugin:

- Generates a cryptographically random API key
- Serves the key verification file at the correct URL
- Listens to Joomla's \`onContentAfterSave\` events
- Sends an IndexNow notification to Bing, Yandex, and Seznam automatically whenever you publish or update an article

The feature is available on Developer and Agency plans. For sites where content freshness matters, it is one of the fastest wins available in the SEO toolkit.
    `.trim(),
  },
  {
    slug: 'what-is-opengraph',
    title: 'What is OpenGraph — control how your pages look on social media',
    description: 'OpenGraph is a protocol that lets you define exactly how your pages appear when shared on Facebook, LinkedIn, X, and other social platforms — title, description, and image.',
    date: '2026-05-07',
    readTime: '5 min read',
    tags: ['OpenGraph', 'Social Media'],
    content: `
## The preview problem

When someone shares a link on Facebook, LinkedIn, or X (formerly Twitter), the platform automatically generates a preview card — a thumbnail, title, and short description. If you have not configured anything, the platform guesses: it picks whatever image it finds first on the page, takes the first paragraph of text it can scrape, and produces a result that may look completely wrong.

A hotel shares a link to their seasonal offer page. The preview shows their cookie consent banner image and the text from their navigation menu. Not ideal.

**OpenGraph** is the solution.

## What OpenGraph is

OpenGraph (OG) is a protocol created by Facebook in 2010 and now universally supported by every major social platform and messaging app. It uses \`<meta>\` tags in your page's \`<head>\` to explicitly declare:

- **og:title** — the title that should appear in the preview card
- **og:description** — the description text
- **og:image** — the image to use for the preview thumbnail
- **og:url** — the canonical URL of the page
- **og:type** — the type of content (website, article, product, etc.)

When a platform crawls a URL to generate a preview, it reads these tags first and uses them rather than guessing from the page content.

## Why it matters

**Click-through rates.** A well-configured OG image and title dramatically outperforms a randomly scraped image and truncated paragraph. Social sharing is often the primary traffic driver for articles, events, and promotions. A bad preview kills that potential.

**Brand consistency.** Every link shared to your site is an impression. With proper OG tags, every share shows your chosen image — your hero shot, your event poster, your product photo — framed by your headline and description.

**Messaging control.** Different pages serve different purposes. Your homepage, your about page, your latest article, and your pricing page should each have different titles and descriptions when shared. OG tags let you customise each one independently.

## Twitter Cards

Twitter/X uses its own equivalent system called **Twitter Cards**. The tags are slightly different (\`twitter:title\`, \`twitter:description\`, \`twitter:image\`, \`twitter:card\`), but the purpose is identical. The card type \`summary_large_image\` produces the large preview card that performs best for content-driven pages.

In practice, most sites implement both OpenGraph and Twitter Cards. Many platforms fall back to OG tags when Twitter Card tags are absent, but using both ensures correct rendering everywhere.

## Per-article overrides

Site-wide OG configuration — a global default image and description — is the minimum. But the most effective implementation allows each article or page to override the defaults with its own title, description, and image.

For a Joomla blog or news site, this means every article gets its own OG image (ideally the article's featured image) and its own OG description (ideally the article's custom meta description). Each shared link looks distinct and relevant.

## How AI Boost for Joomla handles OpenGraph

**AI Boost for Joomla** injects OpenGraph and Twitter Card meta tags automatically on every page. You configure a global default image (1200×630 pixels is the recommended size) and the plugin handles the rest.

For per-article customisation, the plugin integrates with Joomla's Custom Fields system. Add a custom field for OG image override, OG title override, and OG description override to your article type, and the plugin reads them automatically — no template modifications required.

The Social & Meta tab in the plugin configuration controls all of this: toggle OpenGraph on, upload your default image, and it works across your entire Joomla installation immediately.
    `.trim(),
  },
  {
    slug: 'what-is-robots-txt',
    title: 'What is robots.txt — and why AI crawlers need special rules in 2026',
    description: 'robots.txt is the access control file for web crawlers. In 2026, with 25+ AI bots crawling the web, getting your robots.txt right is more important than ever.',
    date: '2026-05-09',
    readTime: '6 min read',
    tags: ['robots.txt', 'AI Crawlers'],
    content: `
## The original gatekeeping file

Every website that has ever had a \`robots.txt\` file at its root has been using a standard that dates back to 1994. The Robots Exclusion Protocol (REP) was one of the first informal agreements of the web: crawlers should check \`/robots.txt\` before indexing a site and respect the rules they find there.

The file syntax is simple:

\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /
\`\`\`

\`User-agent: *\` means "all crawlers". \`Disallow: /admin/\` means "do not crawl anything under /admin/". \`Allow: /\` means "everything else is fine".

Simple in principle. More consequential in 2026.

## The AI crawler explosion

In 2024 and 2025, the number of distinct web crawlers grew dramatically. Every major AI company deployed its own crawler:

- **GPTBot** — OpenAI (ChatGPT, GPT-4)
- **ClaudeBot** — Anthropic (Claude)
- **PerplexityBot** — Perplexity
- **GoogleOther** — Google AI Overviews and Gemini
- **Applebot-Extended** — Apple AI features
- **Bytespider** — ByteDance (TikTok AI)
- **CCBot** — Common Crawl (training data)
- **DataForSeoBot**, **SemrushBot**, **AhrefsBot** — SEO tools

...and dozens more. Some are search crawlers. Some are training data collectors. Some are fact-checking systems.

For many sites, the question is no longer just "which pages can Google access?" but "which of these 25+ crawlers do I want to allow, and under what conditions?"

## The two failure modes

**Failure mode 1: Blocking AI crawlers that bring traffic.**
Some site owners, concerned about AI systems using their content, added \`Disallow: /\` for GPTBot and others. The problem: GPTBot is not just used for training data — it is also used when ChatGPT Browse answers user questions by reading live web pages. Blocking GPTBot means your site cannot be cited in ChatGPT answers.

**Failure mode 2: Allowing all crawlers unconditionally.**
An unrestricted \`robots.txt\` allows every crawler, including aggressive training data harvesters that may stress your server, bypass your terms of service, and use your content in ways you have not authorised.

The correct approach in 2026 is to **explicitly allow the AI search crawlers** (GPTBot, PerplexityBot, ClaudeBot, Googlebot) while blocking or rate-limiting aggressive training crawlers (CCBot, Common Crawl variants).

## The Sitemap declaration

\`robots.txt\` also serves a secondary purpose: it should declare where your sitemap lives:

\`\`\`
Sitemap: https://yoursite.com/sitemap.xml
\`\`\`

This line alone ensures every crawler that reads \`robots.txt\` also knows where to find your complete list of pages.

## Joomla's default robots.txt

Joomla installs a static \`robots.txt\` by default. It is outdated — written for an era when Googlebot and Bingbot were the only crawlers worth considering. It does not mention AI crawlers at all.

Updating it manually means editing a file on your server and maintaining it yourself every time a new crawler appears.

## How AI Boost for Joomla handles robots.txt

**AI Boost for Joomla** replaces Joomla's static \`robots.txt\` with a dynamically generated one. When a crawler requests \`yoursite.com/robots.txt\`, the plugin serves a file that includes:

- Standard Joomla path restrictions (\`/administrator/\`, \`/cache/\`, etc.)
- Explicit \`Allow: /\` directives for 25+ AI search crawlers
- Explicit rules for training data harvesters
- A \`Sitemap:\` declaration pointing to your dynamic sitemap

The file is regenerated automatically when you save plugin settings, and cached for performance. You never need to touch the server file again.

For site owners who want full control, the plugin provides a custom robots.txt field where you can add your own rules that are appended to the generated output.
    `.trim(),
  },
  {
    slug: 'what-is-xml-sitemap',
    title: 'What is an XML Sitemap — the map that helps search engines find every page',
    description: 'An XML sitemap is a structured file that lists every URL on your website, helping search engines and AI crawlers discover and index your content reliably.',
    date: '2026-05-11',
    readTime: '5 min read',
    tags: ['XML Sitemap', 'SEO'],
    content: `
## The discovery problem

Search engines find pages in two ways: by following links from pages they already know about, and by reading sitemaps. Links are unreliable — a page with no inbound links is effectively invisible to crawlers that rely on link-following alone. A sitemap is the direct solution: it tells crawlers exactly which pages exist, regardless of how well-linked they are.

The **XML Sitemap** format, standardised as the Sitemap Protocol and now supported by Google, Bing, and all major search engines, is the definitive way to give crawlers a complete map of your site.

## The sitemap format

A basic XML sitemap looks like this:

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2026-05-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/about</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
\`\`\`

Each \`<url>\` entry contains:
- **loc**: the canonical URL of the page
- **lastmod**: when the page was last modified (helps crawlers prioritise re-crawling)
- **changefreq**: how often the page typically changes (a hint, not a rule)
- **priority**: relative importance within the site (0.0 to 1.0)

## Hreflang in sitemaps

For multilingual sites, sitemaps can include \`xhtml:link\` elements that declare language variants:

\`\`\`xml
<url>
  <loc>https://yoursite.com/about</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://yoursite.com/en/about"/>
  <xhtml:link rel="alternate" hreflang="de" href="https://yoursite.com/de/about"/>
</url>
\`\`\`

This supplements the \`hreflang\` tags in the page \`<head>\`, giving search engines two independent sources confirming your language structure.

## Why dynamic sitemaps matter

A static sitemap file — one you generate once and upload — goes stale. Every time you publish a new article, the sitemap is outdated. Every time you unpublish a page, the sitemap still points to it.

A **dynamic sitemap** is generated on the fly by your CMS. When a search engine requests \`/sitemap.xml\`, the server queries the database for all published content and returns an always-current response. The sitemap reflects your actual published content at the moment of the request.

For Joomla sites that publish new articles, add menu items, or manage categories regularly, a dynamic sitemap is essential.

## Common sitemap mistakes

**Including non-canonical URLs.** Your sitemap should only list the canonical version of each page. If \`?lang=en\` and the base URL are both valid, list only the one search engines should treat as canonical.

**Setting all priorities to 1.0.** Priority is relative, not absolute. If everything is priority 1.0, the signal is meaningless. Use a range that reflects actual importance.

**Not declaring the sitemap in robots.txt.** Crawlers look for sitemaps in the \`Sitemap:\` declaration in \`robots.txt\` and in your Google Search Console submission. Both are recommended.

**Forgetting large sites need sitemap indices.** A single sitemap file supports a maximum of 50,000 URLs and 50 MB uncompressed. Large sites need a sitemap index file that lists multiple sitemap files.

## How AI Boost for Joomla handles sitemaps

**AI Boost for Joomla** generates a dynamic XML sitemap at \`yoursite.com/sitemap.xml\` with no static file to maintain. It automatically includes published articles, category pages, and menu items from your Joomla installation.

Configuration options let you set per-type priorities and change frequencies, filter specific categories, exclude individual article IDs, and include hreflang entries for multilingual sites. The sitemap updates instantly when you publish, unpublish, or modify content — no manual regeneration needed.
    `.trim(),
  },
  {
    slug: 'what-is-aeo',
    title: 'What is AEO (Answer Engine Optimization) — SEO for the AI era',
    description: 'AEO is the practice of optimising your content to be cited and recommended by AI assistants like ChatGPT, Perplexity, and Google AI Overviews — not just ranked in traditional search.',
    date: '2026-05-13',
    readTime: '7 min read',
    tags: ['AEO', 'AI Search'],
    content: `
## Search is changing

For twenty-five years, the goal of search engine optimisation was straightforward: rank as high as possible in the blue-link results for relevant queries. Position 1 on Google meant the most clicks, the most traffic, and the most revenue.

That model is still valid — but it is no longer the only model that matters.

A growing share of search queries in 2026 are answered not by a list of links, but by a synthesised response from an AI assistant. When someone asks ChatGPT "what is the best way to configure structured data for a hotel website?", they get a direct answer, not ten blue links. When someone asks Perplexity "which Joomla plugins handle Schema.org automatically?", they get a curated recommendation, not a list of sites to visit.

**Answer Engine Optimization (AEO)** is the practice of optimising your content and technical infrastructure so that AI assistants cite, quote, and recommend your site in these synthesised answers.

## How AI assistants decide what to cite

Traditional SEO factors (backlinks, keyword density, domain authority) matter less to AI assistants than they do to Google's PageRank algorithm. AI systems evaluate pages differently:

**Factual clarity.** Can the AI extract clear, specific facts from the page? A page that hedges everything and never commits to a direct statement is harder to cite than a page that says "check-in is at 14:00, check-out is at 12:00".

**Structural clarity.** Is the content organised in a way that maps to questions and answers? Pages with clear headings, FAQ sections, definition lists, and step-by-step guides are structurally easy for AI to process.

**Structured data.** Schema.org markup tells AI crawlers not just what the content says, but what it *means*. FAQPage schema, for example, explicitly marks which paragraphs are questions and which are answers — eliminating ambiguity.

**Authority signals.** AI systems still weight domain authority, publication date, and citation consistency. A site that is mentioned by name across multiple authoritative sources is more likely to be cited.

**Crawl accessibility.** AI crawlers must be able to access your content. A site that blocks GPTBot and PerplexityBot in \`robots.txt\` cannot be cited by those systems, regardless of content quality.

## AEO vs SEO: the relationship

AEO is not a replacement for SEO — it is an extension. The technical foundations overlap significantly:

| Signal | SEO value | AEO value |
|--------|-----------|-----------|
| Fast loading | High | Medium |
| Mobile-friendly | High | Medium |
| Schema.org markup | Medium | Very high |
| FAQPage markup | Medium | Very high |
| llms.txt | None | High |
| Clear factual content | High | Very high |
| Authoritative backlinks | Very high | Medium |
| IndexNow (freshness) | Medium | Medium |

The key difference is emphasis. AEO heavily weights structured data, factual clarity, and AI crawler accessibility — areas that traditional SEO often treated as secondary.

## Practical AEO implementation

**Step 1: Implement Schema.org.** At minimum, implement Organization or LocalBusiness schema with accurate, complete data. Add FAQPage schema to any page with Q&A content. Add Article schema to blog posts and news articles.

**Step 2: Structure content for Q&A.** Use clear headings that match search queries. Use FAQ sections. Provide direct, specific answers to likely user questions.

**Step 3: Create an llms.txt file.** Give AI crawlers an explicit, curated overview of your site's most important content.

**Step 4: Allow AI crawlers.** Review your \`robots.txt\` and ensure major AI crawlers (GPTBot, ClaudeBot, PerplexityBot) have access.

**Step 5: Enable IndexNow.** Fresh content is more likely to be cited accurately. Ensure AI crawlers see your current content, not a cached version from weeks ago.

**Step 6: Build authoritative content.** Write content that directly answers specific questions with specificity and confidence. Vague, hedged content is less citeable.

## AI Boost for Joomla and AEO

**AI Boost for Joomla** was designed from the ground up for the AEO era. Every feature addresses one or more AEO signals:

- **Schema.org generation** (13 site types) — structured data clarity
- **FAQPage auto-detection** — question-and-answer signals
- **llms.txt generator** — AI crawler orientation
- **robots.txt with AI crawler rules** — crawl accessibility
- **IndexNow integration** — content freshness
- **XML Sitemap with hreflang** — complete content discovery

The plugin exists because implementing all of these correctly in Joomla requires deep integration with the CMS — integration that would take weeks to build manually and maintain indefinitely.
    `.trim(),
  },
  {
    slug: 'what-is-json-ld',
    title: 'What is JSON-LD — the structured data format search engines love',
    description: 'JSON-LD is the recommended format for embedding Schema.org structured data in web pages — clean, maintainable, and completely separate from your visible HTML.',
    date: '2026-05-15',
    readTime: '5 min read',
    tags: ['JSON-LD', 'Structured Data'],
    content: `
## Three ways to add structured data

When Schema.org was first proposed, it recommended embedding structured data directly in your HTML using **Microdata** — adding special attributes like \`itemscope\`, \`itemtype\`, and \`itemprop\` to your existing HTML elements.

Later, **RDFa** (Resource Description Framework in Attributes) offered another HTML-attribute-based approach, more expressive but even more verbose.

Both approaches have the same fundamental problem: they require you to modify your HTML template to add semantic attributes to every element. Change your template, and you risk breaking your structured data. Add an element, and you have to remember to annotate it.

**JSON-LD** (JavaScript Object Notation for Linked Data) solves this cleanly.

## What JSON-LD looks like

JSON-LD lives in a \`<script>\` block in your page's \`<head>\`:

\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI Boost for Joomla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Boost for Joomla is an all-in-one SEO and AEO plugin that generates Schema.org, XML sitemaps, llms.txt, and AI crawler signals automatically."
      }
    }
  ]
}
</script>
\`\`\`

The script tag has type \`application/ld+json\`, which tells browsers to treat it as data, not executable JavaScript. Search engines and AI crawlers read it directly from the parsed HTML.

## Why JSON-LD is the recommended format

Google has explicitly stated that JSON-LD is their preferred format for structured data. The reasons are practical:

**No HTML modification required.** JSON-LD is injected as a separate block, completely independent of your visible HTML. You can change your page template, add or remove elements, redesign entirely — and your structured data stays correct.

**Easy to validate and debug.** The JSON structure is self-contained. You can copy the entire block, paste it into Google's Rich Results Test or Schema.org's validator, and see immediately whether it is correct.

**Multiple schemas on one page.** A page can have multiple \`<script type="application/ld+json">\` blocks. Your article page can simultaneously declare an \`Article\` schema, a \`BreadcrumbList\` schema, and a \`FAQPage\` schema — independently, without interference.

**Server-side generation.** Because JSON-LD is just text output, it can be generated server-side by your CMS and inserted into the page's \`<head>\` at render time. No client-side JavaScript required. No rendering delay.

## Common JSON-LD types and their use cases

| Type | Use case |
|------|----------|
| Organization | Business identity, contact, social profiles |
| LocalBusiness | Physical location, opening hours, address |
| Article | Blog posts, news articles |
| FAQPage | FAQ sections, question-and-answer content |
| Event | Concerts, conferences, appointments |
| Product | E-commerce product pages |
| BreadcrumbList | Navigation path (Home > Blog > Article) |
| Hotel | Accommodation with check-in, amenities |
| Person | Author profiles, professional portfolios |

## Validating your JSON-LD

Google provides the **Rich Results Test** at \`search.google.com/test/rich-results\`. Paste a URL or a code snippet and it shows which rich result types your structured data qualifies for, and any errors or warnings.

For development and debugging, **Schema.org's validator** at \`validator.schema.org\` checks structural correctness independent of rich result eligibility.

## How AI Boost for Joomla generates JSON-LD

**AI Boost for Joomla** generates all Schema.org blocks as JSON-LD, injected into the \`<head>\` of every page. You never write or edit JSON-LD manually.

The plugin reads your configuration (organisation name, address, phone, social profiles, schema type, FAQ data, events, ratings), constructs the correct JSON-LD structure for each page, and outputs it server-side. The result is always syntactically valid and semantically correct — ready to pass the Rich Results Test out of the box.
    `.trim(),
  },
  {
    slug: 'what-is-hreflang',
    title: 'What is hreflang — multilingual SEO explained',
    description: 'hreflang is an HTML attribute (and sitemap element) that tells search engines which language version of a page to show to which users — essential for multilingual websites.',
    date: '2026-05-17',
    readTime: '5 min read',
    tags: ['Hreflang', 'Multilingual'],
    content: `
## The multilingual indexing problem

If your website serves content in multiple languages — English for international visitors, German for German-speaking visitors, French for French-speaking visitors — you face a specific SEO challenge: search engines need to know which version of a page to show to which user.

Without explicit signals, Google may index only one language version, show the wrong language to visitors, or treat the multiple language versions as duplicate content (which can negatively affect rankings).

**Hreflang** is the standard solution.

## What hreflang tells search engines

The hreflang attribute declares the relationship between language versions of the same page. It says: "this page at URL X is the English version; the German version is at URL Y; the French version is at URL Z."

Search engines use this to serve the appropriate language version to users based on their browser language, search language setting, and geographic location.

A German speaker searching in German gets the German version of your page. An English speaker searching in English gets the English version. Without hreflang, both might get the same version — likely whichever Google indexed first.

## The two places hreflang lives

**In the HTML \`<head>\`:**

\`\`\`html
<link rel="alternate" hreflang="en" href="https://yoursite.com/en/about" />
<link rel="alternate" hreflang="de" href="https://yoursite.com/de/about" />
<link rel="alternate" hreflang="fr" href="https://yoursite.com/fr/about" />
<link rel="alternate" hreflang="x-default" href="https://yoursite.com/about" />
\`\`\`

Every language version must include hreflang tags pointing to *all* versions, including itself. The \`x-default\` value marks the fallback version for users whose language is not explicitly listed.

**In the XML Sitemap:**

\`\`\`xml
<url>
  <loc>https://yoursite.com/en/about</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://yoursite.com/en/about"/>
  <xhtml:link rel="alternate" hreflang="de" href="https://yoursite.com/de/about"/>
</url>
\`\`\`

Using both the \`<head>\` tags and the sitemap entries is redundant but recommended — it gives Google two independent sources confirming the language structure, reducing the chance of misconfiguration going undetected.

## Common hreflang mistakes

**Missing reciprocal links.** If the English page links to the German page but the German page does not link back to the English page, the signal is broken. All language versions must reference all other versions.

**Wrong language codes.** hreflang uses IETF language tags. \`en\` is correct for generic English. \`en-GB\` is British English. \`en-US\` is American English. \`de\` is German. \`de-CH\` is Swiss German. Using the wrong tag means the signal is ignored.

**Forgetting x-default.** The \`x-default\` tag tells Google what to show when no language match is found. Without it, Google has to guess.

**Applying hreflang to non-translatable pages.** Pages like privacy policies, cookie notices, and technical documents that are not actually translated do not need hreflang. Only apply it to pages with genuine language variants.

## Hreflang and Joomla

Joomla supports multilingual sites natively through its content language system. The core installation supports installing multiple languages, and content can be associated with specific languages. Extensions like Falang provide additional field-level translation for structured data.

However, Joomla does not automatically generate hreflang tags. Without a plugin, your multilingual Joomla site gets zero hreflang signals to search engines.

## How AI Boost for Joomla handles hreflang

**AI Boost for Joomla** automatically generates hreflang tags for all installed Joomla languages and injects them into the \`<head>\` of every page. It also adds the corresponding \`xhtml:link\` entries to the XML sitemap.

The plugin reads your Joomla language configuration, identifies which languages are installed and active, and generates the correct IETF language tags (including region-specific codes like \`en-GB\`, \`pt-BR\`, \`zh-CN\`) for every page. It also generates the \`x-default\` tag pointing to your default language version.

For Falang users, the plugin integrates with Falang's field translation system so that per-language structured data (organisation names, descriptions, addresses in local language) is correctly included in the JSON-LD output for each language version.
    `.trim(),
  },
  {
    slug: 'what-is-twitter-cards',
    title: 'What are Twitter Cards — richer previews on X and beyond',
    description: 'Twitter Cards are meta tags that control how your pages appear when shared on X (formerly Twitter) — enabling large image previews, article summaries, and app download cards.',
    date: '2026-05-19',
    readTime: '4 min read',
    tags: ['Twitter Cards', 'Social Media'],
    content: `
## Beyond the plain link

When you share a URL on X (formerly Twitter), the platform has two options: display a plain link with no decoration, or display a **Twitter Card** — a rich preview with an image, title, description, and sometimes interactive elements.

Twitter Cards are controlled by \`<meta>\` tags in your page's \`<head>\`, similar to OpenGraph tags. Where OpenGraph was created by Facebook and is used by most social platforms, Twitter Cards were created by Twitter specifically for its own platform. In practice, most pages implement both.

## Card types

Twitter supports several card types, but two are most useful for content websites:

**summary** — A small thumbnail image alongside title and description. Good for pages without a strong visual focus (contact pages, about pages, documentation).

**summary_large_image** — A large banner image above the title and description. This is the format that performs best for articles, blog posts, landing pages, and any content with a strong visual component. The image dominates the preview card in the X feed.

**app** — A card for mobile app download links. Specific to app store marketing.

**player** — A card with an embedded video or audio player. Requires approval from X.

For most content sites, \`summary_large_image\` is the right choice for pages with featured images, and \`summary\` for pages without.

## The essential tags

\`\`\`html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="What is Schema.org" />
<meta name="twitter:description" content="Schema.org is the shared vocabulary..." />
<meta name="twitter:image" content="https://yoursite.com/images/schema-og.jpg" />
<meta name="twitter:site" content="@aiboostnow" />
\`\`\`

- **twitter:card** — declares the card type (required)
- **twitter:title** — the title shown in the preview
- **twitter:description** — up to 200 characters of description
- **twitter:image** — the preview image (minimum 300×157 pixels; 1200×630 is ideal for summary_large_image)
- **twitter:site** — your X handle (optional but recommended for attribution)

## Fallback to OpenGraph

X's card system falls back to OpenGraph tags when Twitter Card tags are absent. If your page has \`og:title\` and \`og:image\` but no \`twitter:title\` or \`twitter:image\`, X will use the OG values.

This means implementing OpenGraph correctly gives you baseline Twitter Card support without duplication. Adding explicit Twitter Card tags lets you customise the X-specific presentation independently — for example, writing a shorter title optimised for X's character limits while keeping a longer title for Facebook.

## Validating Twitter Cards

X provides a Card Validator at \`cards-dev.twitter.com/validator\`. Enter a URL and it shows how the card will appear, and any errors or missing tags.

Note: The validator requires your page to be publicly accessible. Local development environments or password-protected staging sites cannot be validated through it.

## Image specifications

For \`summary_large_image\`:
- Recommended size: **1200 × 630 pixels**
- Minimum size: 300 × 157 pixels
- Maximum file size: 5 MB
- Formats: JPG, PNG, WebP, GIF (static only)
- Aspect ratio: 2:1

The image must be served over HTTPS. X will not display HTTP image URLs.

## How AI Boost for Joomla handles Twitter Cards

**AI Boost for Joomla** generates both OpenGraph and Twitter Card meta tags from a single configuration. You set a default OG image, toggle OpenGraph on, and both sets of tags are injected on every page automatically.

The plugin sets \`twitter:card\` to \`summary_large_image\` by default — the format that performs best for most content types. Per-article image overrides (configured through Joomla Custom Fields) apply to both OG and Twitter Card tags simultaneously, so each article shows its own preview image across all social platforms with a single custom field configuration.
    `.trim(),
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags).sort()
}
