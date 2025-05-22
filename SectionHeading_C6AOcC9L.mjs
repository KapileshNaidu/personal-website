import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, m as maybeRenderHead, e as renderSlot, f as renderHead } from './astro/server_D_CmcNH8.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$a = createAstro("https://yourname-pm.netlify.app");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/project/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro("https://yourname-pm.netlify.app");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/project/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro("https://yourname-pm.netlify.app");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/project/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro("https://yourname-pm.netlify.app");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/project/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro("https://yourname-pm.netlify.app");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/project/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro("https://yourname-pm.netlify.app");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/project/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro("https://yourname-pm.netlify.app");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/project/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro("https://yourname-pm.netlify.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/project/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$2 = createAstro("https://yourname-pm.netlify.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Motorcycling", href: "/motorcycling" },
    { name: "Reading", href: "/reading" },
    { name: "Contact", href: "/contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"> <div class="container-wide flex items-center justify-between h-16 md:h-20"> <a href="/" class="text-xl font-bold tracking-tight group"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
John Doe
</span> <span class="block text-xs text-gray-500 dark:text-gray-400 font-normal">
Product Manager
</span> </a> <!-- Mobile nav toggle --> <button id="mobile-nav-toggle" class="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Desktop navigation --> <nav class="hidden md:flex items-center space-x-1 lg:space-x-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-3 py-2 text-sm rounded-md transition-colors ${currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href) ? "bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400"}`, "class")}> ${item.name} </a>`)} <!-- Dark mode toggle --> <button id="theme-toggle" class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden dark:block" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block dark:hidden" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> </nav> </div> <!-- Mobile navigation --> <div id="mobile-nav" class="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col p-4 md:hidden transform translate-x-full transition-transform duration-300"> <div class="flex items-center justify-between mb-8"> <a href="/" class="text-xl font-bold tracking-tight"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
John Doe
</span> </a> <button id="mobile-nav-close" class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col space-y-4"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`px-4 py-3 rounded-md text-lg ${currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href) ? "bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium" : "text-gray-700 dark:text-gray-300"}`, "class")}> ${item.name} </a>`)} <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-800"> <span class="text-sm text-gray-500 dark:text-gray-400">Toggle theme</span> <button id="mobile-theme-toggle" class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden dark:block" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block dark:hidden" viewBox="0 0 20 20" fill="currentColor"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> </div> </nav> </div> </header> `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/johndoe", icon: "twitter" },
    { name: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/johndoe", icon: "github" },
    { name: "Medium", url: "https://medium.com/@johndoe", icon: "medium" }
  ];
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume.pdf" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"> <div class="container-wide py-12"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Brand and social --> <div class="lg:col-span-2"> <a href="/" class="inline-block text-xl font-bold tracking-tight mb-4"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
John Doe
</span> </a> <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
Product Manager with a passion for user-centered design, motorcycling, and storytelling. 
          Let's create something amazing together.
</p> <div class="flex space-x-4"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"${addAttribute(link.name, "aria-label")}> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> ${link.icon === "twitter" && renderTemplate`<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>`} ${link.icon === "linkedin" && renderTemplate`<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>`} ${link.icon === "github" && renderTemplate`<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>`} ${link.icon === "medium" && renderTemplate`<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>`} </svg> </a>`)} </div> </div> <!-- Quick links --> <div> <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3> <ul class="space-y-2"> ${footerLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Newsletter --> <div> <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h3> <p class="text-gray-600 dark:text-gray-400 mb-4">
Subscribe to my newsletter for the latest articles, projects and thoughts.
</p> <form class="space-y-2"> <div> <label for="email-address" class="sr-only">Email address</label> <input id="email-address" name="email" type="email" autocomplete="email" required class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email"> </div> <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
Subscribe
</button> </form> </div> </div> <div class="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"> <p class="text-sm text-gray-500 dark:text-gray-400">
&copy; ${currentYear} John Doe. All rights reserved.
</p> <div class="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400"> <a href="/privacy" class="hover:text-gray-900 dark:hover:text-gray-300">Privacy Policy</a> <a href="/terms" class="hover:text-gray-900 dark:hover:text-gray-300">Terms of Service</a> </div> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://yourname-pm.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "John Doe | Product Manager",
    description = "Product Manager specializing in user-centered design with a passion for motorcycling, reading, and writing.",
    image = "/images/social-share.jpg",
    canonicalURL = Astro2.url.href
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', ">", "<script>\n      // Initialize dark mode based on user preference or system setting\n      const theme = (() => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n          return localStorage.getItem('theme');\n        }\n        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n          return 'dark';\n        }\n        return 'light';\n      })();\n      \n      if (theme === 'dark') {\n        document.documentElement.classList.add('dark');\n      } else {\n        document.documentElement.classList.remove('dark');\n      }\n      \n      window.localStorage.setItem('theme', theme);\n    <\/script>", '</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300"> ', ' <main class="flex-grow"> ', " </main> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalURL, "openGraph": {
    basic: {
      title,
      type: "website",
      image,
      url: canonicalURL
    },
    optional: {
      description,
      siteName: "John Doe | Product Manager"
    }
  }, "twitter": {
    card: "summary_large_image",
    site: "@johndoe",
    creator: "@johndoe",
    title,
    description,
    image
  } }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://yourname-pm.netlify.app");
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { title, subtitle, centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`, "class")}> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">${title}</h2> ${subtitle && renderTemplate`<p class="text-lg text-gray-600 dark:text-gray-400">${subtitle}</p>`} </div>`;
}, "/home/project/src/components/SectionHeading.astro", void 0);

export { $$Layout as $, $$SectionHeading as a };
