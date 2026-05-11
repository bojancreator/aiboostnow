export interface FaqItem {
  q: string
  a: string
}

export interface FaqGroup {
  id: string
  title: string
  items: FaqItem[]
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'about',
    title: 'About the plugin',
    items: [
      {
        q: 'What is AI Boost for Joomla?',
        a: 'AI Boost for Joomla is an all-in-one SEO and AEO (Answer Engine Optimization) system plugin for Joomla 4, 5, and 6. It automatically generates Schema.org JSON-LD structured data, an XML sitemap with hreflang, OpenGraph and Twitter Card tags, a robots.txt with AI crawler rules, llms.txt for AI-readable site description, and integrations for Google Analytics 4, Google Tag Manager, Meta Pixel, and IndexNow — all from a single plugin configuration panel.',
      },
      {
        q: 'How is AI Boost for Joomla different from other Joomla SEO plugins?',
        a: 'Most Joomla SEO plugins focus on traditional Google SEO: meta tags, redirects, and basic sitemap generation. AI Boost for Joomla is designed for the AI Search era of 2025–2026. It adds the signals that AI assistants like ChatGPT, Perplexity, and Google AI Overviews use to cite and recommend content: Schema.org JSON-LD with 13 site type presets, FAQPage auto-detection, llms.txt, IndexNow for instant indexing, and a robots.txt that correctly handles 25+ AI crawlers.',
      },
      {
        q: 'Does the plugin work with Joomla 4, 5, and 6?',
        a: 'Yes. AI Boost for Joomla is fully tested and supported on Joomla 4.0 through 6.x. It is designed to remain compatible as Joomla releases new major versions.',
      },
      {
        q: 'Which PHP versions are supported?',
        a: 'PHP 8.1, 8.2, 8.3, 8.4, and 8.5 are all supported. PHP 8.1 is the minimum requirement.',
      },
      {
        q: 'Is the plugin compatible with YooTheme Pro, Helix Ultimate, and other Joomla templates?',
        a: 'Yes. AI Boost for Joomla is a system plugin — it operates independently of the template and is injected into the page before the template renders. It has been tested with Cassiopeia (the Joomla default), YooTheme Pro, Helix Ultimate, T4 Framework, Helium, and all standards-compliant Joomla templates.',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation & setup',
    items: [
      {
        q: 'How do I install the plugin?',
        a: 'Download the latest ZIP file from aiboostnow.com/download. Log in to your Joomla admin panel, go to System → Install → Extensions, and upload the ZIP using the "Upload Package File" tab. After installation, go to System → Manage → Plugins, search for "AI Boost", and click the red circle to enable it (it turns green). Then click the plugin name to open the configuration panel.',
      },
      {
        q: 'What should I do if the installation fails?',
        a: 'The most common causes are: PHP version below 8.1 (check your hosting PHP version), file upload size limit (the ZIP is under 1 MB, so this is rare), or a permissions issue on the Joomla plugins directory. If the Extension Manager shows an error message, include it when you contact support@aiboostnow.com and we will help you resolve it.',
      },
      {
        q: 'Can I use the plugin on a localhost or staging environment?',
        a: 'Yes. The plugin works on localhost and staging environments. The Staging Mode option in the Debug tab automatically adds a noindex directive when the plugin detects it is running on a non-production domain (localhost, .local, .test, or a subdomain you designate). This prevents staging content from accidentally being indexed.',
      },
      {
        q: 'Will the plugin affect my site\'s performance?',
        a: 'AI Boost for Joomla is designed with performance in mind. The output it generates (Schema.org JSON-LD, sitemap, robots.txt, llms.txt) is cached server-side with a configurable TTL (default 1 hour). The plugin does not load any third-party scripts on the frontend except the analytics tags you explicitly enable (GA4, GTM, Meta Pixel). In our testing, the impact on Time to First Byte is under 5ms with caching enabled.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    items: [
      {
        q: 'What is Schema.org and does the plugin generate it automatically?',
        a: 'Schema.org is a shared vocabulary of structured data types — Organisation, LocalBusiness, Hotel, FAQPage, Article, Event, and more — that helps search engines and AI assistants understand your content. AI Boost for Joomla generates Schema.org JSON-LD automatically and injects it into every page\'s <head>. You select your site type (from 13 presets), fill in your organisation details, and the correct schema is generated without any coding.',
      },
      {
        q: 'Does the plugin generate an XML sitemap, or do I need a separate sitemap plugin?',
        a: 'AI Boost for Joomla includes a full dynamic XML sitemap generator — no separate plugin needed. The sitemap is served at yoursite.com/sitemap.xml and includes published articles, categories, and menu items. It updates automatically when you publish or modify content. For multilingual sites, it also generates hreflang entries inside the sitemap.',
      },
      {
        q: 'What is llms.txt and do all sites need it?',
        a: 'llms.txt is a plain text file (served at yoursite.com/llms.txt) that describes your site\'s structure and key pages in a format optimised for AI assistants like ChatGPT and Perplexity. Sites that want to be accurately cited by AI search engines benefit from it. It is not required for basic SEO, but for any site targeting AI-driven discovery in 2025–2026, it is a meaningful signal. AI Boost for Joomla generates it dynamically on the Developer and Agency plans.',
      },
      {
        q: 'How does the IndexNow integration work?',
        a: 'IndexNow is a protocol that notifies Bing, Yandex, and Seznam the moment you publish or update a page. In the Analytics tab, enable IndexNow and click "Generate API Key". The plugin generates a unique key, serves the key verification file at the correct URL, and automatically sends IndexNow notifications whenever you save a Joomla article. Pages are typically indexed within minutes of publication instead of waiting for the next crawl cycle.',
      },
      {
        q: 'Can I override OpenGraph tags on a per-article basis?',
        a: 'Yes. AI Boost for Joomla integrates with Joomla\'s Custom Fields system. After enabling the custom fields integration (Show Advanced Options → Yes), you can add per-article fields for OG title override, OG description override, and OG image override. When a custom field value is present for an article, it takes precedence over the global defaults.',
      },
      {
        q: 'Does the plugin support multilingual Joomla sites?',
        a: 'Yes. AI Boost for Joomla supports Joomla\'s native multilingual system and integrates with Falang for field-level translations. Structured data fields (organisation name, description, address, city, FAQ items, event descriptions) can be entered per installed language. Hreflang tags are generated automatically for all active Joomla languages. The plugin is available in 11 languages: English, German, French, Spanish, Italian, Russian, Portuguese, Chinese, Arabic, Japanese, and Serbian.',
      },
      {
        q: 'Which AI crawlers does the plugin allow or block in robots.txt?',
        a: 'AI Boost for Joomla generates a robots.txt that explicitly allows all major AI search crawlers: GPTBot (ChatGPT), ClaudeBot (Anthropic), PerplexityBot, GoogleOther (Google AI Overviews), Applebot-Extended, and others that bring referral traffic from AI-powered responses. It includes appropriate rules for training data harvesters. You can add your own custom rules via the plugin configuration, which are appended to the generated output.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & licensing',
    items: [
      {
        q: 'How much does AI Boost for Joomla cost?',
        a: 'AI Boost for Joomla is available in three tiers: Starter at €59 (1 site), Developer at €119 (5 sites), and Agency at €199 (unlimited sites). All are one-time payments — no subscriptions. EU VAT is handled automatically at checkout.',
      },
      {
        q: 'What are the differences between Starter, Developer, and Agency?',
        a: 'The primary difference is the number of sites: Starter covers 1 site, Developer covers 5 sites, Agency covers unlimited sites. Developer and Agency also unlock advanced features: the 8 specialised Site Type presets (Medical, Law Firm, School, Gym, Dentist, Real Estate, Portfolio, News), Advanced Opening Hours (day-by-day schedules, seasonal hours, holiday closures), Manual FAQ editor, Events Schema, IndexNow, and llms.txt generation.',
      },
      {
        q: 'Is this a one-time purchase or a subscription?',
        a: 'One-time purchase. You pay once and own the plugin forever. The purchase includes 1 year of updates and bug fixes. After 1 year, the plugin continues to work — you just do not receive new feature updates unless you optionally renew your update plan at 50% of the original price.',
      },
      {
        q: 'Does the plugin stop working if I do not renew my license?',
        a: 'No. The plugin continues to work on its installed version indefinitely, regardless of renewal. Renewal gives you access to new versions and new features released after your first year. Your existing installation is not locked, disabled, or degraded.',
      },
      {
        q: 'Which plan do I need if I manage multiple client sites?',
        a: 'If you manage up to 5 client sites, the Developer plan (€119) covers you. For more than 5 client sites, the Agency plan (€199 unlimited) is the right choice. Both Developer and Agency include priority email support.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    items: [
      {
        q: 'Can I access the source code?',
        a: 'The plugin source code is not publicly distributed. The plugin ZIP contains compiled PHP files and assets. For customisation requests or integration questions, contact support@aiboostnow.com.',
      },
      {
        q: 'Where are the plugin settings stored?',
        a: 'Plugin settings are stored in Joomla\'s standard #__extensions table in the database, as a JSON params field. This is the standard Joomla mechanism for all extension configuration. Settings are preserved across plugin updates and are backed up with your standard Joomla database backup.',
      },
      {
        q: 'How do I uninstall the plugin, and will any data remain?',
        a: 'Uninstall via System → Manage → Extensions → search for AI Boost → check the box → click Uninstall. The plugin and all its files are removed. The plugin settings are removed from the #__extensions table. If you installed the plugin with SQL (which creates a sessions or log table), those tables are dropped by the uninstall script. No data remains after a clean uninstall.',
      },
      {
        q: 'Is there an API or webhook for integrations?',
        a: 'AI Boost for Joomla does not currently expose its own REST API. It integrates with Joomla\'s event system (onContentAfterSave, onContentPrepareForm, etc.) internally. If you need webhook support — for example, to trigger IndexNow notifications from an external deployment pipeline — contact support@aiboostnow.com to discuss your use case.',
      },
    ],
  },
]
