import { b as createAstro, c as createComponent, m as maybeRenderHead, e as renderSlot, d as addAttribute, a as renderTemplate } from './astro/server_D_CmcNH8.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://yourname-pm.netlify.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, image, imageAlt = "", date, url, tags = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col"> ${image && renderTemplate`<div class="relative h-48 overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div>`} <div class="p-6 flex-grow flex flex-col"> ${date && renderTemplate`<p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${date}</p>`} <h3 class="text-xl font-semibold mb-3"> ${url ? renderTemplate`<a${addAttribute(url, "href")} class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"> ${title} </a>` : renderTemplate`<span class="text-gray-900 dark:text-white">${title}</span>`} </h3> <div class="text-gray-600 dark:text-gray-300 mb-4 flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-auto"> ${tags.map((tag) => renderTemplate`<span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"> ${tag} </span>`)} </div>`} </div> </article>`;
}, "/home/project/src/components/Card.astro", void 0);

export { $$Card as $ };
