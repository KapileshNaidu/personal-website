/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D_CmcNH8.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionHeading } from '../chunks/SectionHeading_C6AOcC9L.mjs';
import { $ as $$Button } from '../chunks/Button_BIn2MQwD.mjs';
import { $ as $$Card } from '../chunks/Card_BOnlfeV3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredPosts = [
    {
      title: "User Research Methods for Product Managers",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 12, 2025",
      url: "/blog/user-research-methods",
      excerpt: "A deep dive into effective user research methods that every product manager should know.",
      tags: ["Product Management", "UX Research"]
    },
    {
      title: "My Journey Through the Alps: A Motorcycle Diary",
      image: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 28, 2025",
      url: "/blog/alpine-motorcycle-journey",
      excerpt: "Reflecting on my two-week motorcycle adventure through the Swiss and Italian Alps.",
      tags: ["Motorcycling", "Travel"]
    },
    {
      title: 'Book Review: "Building Products That Matter"',
      image: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "February 10, 2025",
      url: "/blog/building-products-review",
      excerpt: "My thoughts on this groundbreaking book about purpose-driven product development.",
      tags: ["Books", "Product Strategy"]
    }
  ];
  const featuredProjects = [
    {
      title: "HealthTrack Mobile App",
      image: "https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/healthtrack",
      excerpt: "Led the redesign of a health tracking application, improving user engagement by 43%.",
      tags: ["Mobile App", "UX/UI", "Health Tech"]
    },
    {
      title: "EcoShop E-commerce Platform",
      image: "https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/ecoshop",
      excerpt: "Developed strategy and roadmap for a sustainable products marketplace.",
      tags: ["E-commerce", "Sustainability", "UX Research"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "John Doe | Product Manager & Motorcycle Enthusiast", "description": "Product Manager with expertise in user-centered design and a passion for motorcycling, reading non-fiction, and writing.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 md:py-28 overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute inset-0 overflow-hidden z-0" data-astro-cid-j7pv25f6> <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" data-astro-cid-j7pv25f6></div> </div> <div class="container-wide relative z-10" data-astro-cid-j7pv25f6> <div class="flex flex-col md:flex-row items-center" data-astro-cid-j7pv25f6> <div class="md:w-1/2 mb-10 md:mb-0 fade-in" data-astro-cid-j7pv25f6> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6" data-astro-cid-j7pv25f6> <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400" data-astro-cid-j7pv25f6>
Hi, I'm John Doe
</span> </h1> <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Product Manager crafting digital experiences that <span class="font-medium" data-astro-cid-j7pv25f6>solve real problems</span> with empathy and precision.
</p> <div class="flex flex-wrap gap-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "href": "/projects", "size": "lg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View My Work
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> ` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "outline", "size": "lg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Get in Touch
` })} </div> </div> <div class="md:w-1/2 flex justify-center md:justify-end slide-in-right" data-astro-cid-j7pv25f6> <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl" data-astro-cid-j7pv25f6> <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="John Doe" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> </div> </div> </div> </section>  <section class="py-16 md:py-24 bg-white dark:bg-gray-900" data-astro-cid-j7pv25f6> <div class="container-narrow" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "About Me", "subtitle": "Product visionary by day, motorcycle enthusiast by weekend, and lifelong learner always.", "centered": true, "data-astro-cid-j7pv25f6": true })} <div class="prose prose-lg max-w-none dark:prose-invert mb-8" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
I'm a dedicated product manager with over 8 years of experience creating digital products 
          that users love. My approach combines analytical thinking with creative problem-solving, 
          always keeping the user at the center of the process.
</p> <p data-astro-cid-j7pv25f6>
When I'm not crafting product strategies or conducting user research, you'll find me exploring 
          back roads on my motorcycle, diving into the latest non-fiction books, or writing about my 
          experiences and insights.
</p> </div> <div class="flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "href": "/about", "variant": "outline", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Learn More About Me
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> ` })} </div> </div> </section>  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800" data-astro-cid-j7pv25f6> <div class="container-wide" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Featured Projects", "subtitle": "A selection of products and experiences I've helped build and improve.", "centered": true, "data-astro-cid-j7pv25f6": true })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-j7pv25f6> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": project.title, "image": project.image, "imageAlt": project.title, "url": project.url, "tags": project.tags, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-j7pv25f6>${project.excerpt}</p> ` })}`)} </div> <div class="flex justify-center mt-12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "href": "/projects", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All Projects
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> ` })} </div> </div> </section>  <section class="py-16 md:py-24 bg-white dark:bg-gray-900" data-astro-cid-j7pv25f6> <div class="container-wide" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "From My Blog", "subtitle": "Thoughts on product management, book reviews, and motorcycle adventures.", "centered": true, "data-astro-cid-j7pv25f6": true })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.title, "image": post.image, "imageAlt": post.title, "date": post.date, "url": post.url, "tags": post.tags, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-j7pv25f6>${post.excerpt}</p> ` })}`)} </div> <div class="flex justify-center mt-12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Read More Articles
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> ` })} </div> </div> </section>  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative" data-astro-cid-j7pv25f6> <div class="container-narrow relative z-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Motorcycling Adventures", "subtitle": "Exploring the world on two wheels, one journey at a time.", "centered": true, "data-astro-cid-j7pv25f6": true })} <div class="relative rounded-xl overflow-hidden h-80 md:h-96 mb-8 shadow-xl" data-astro-cid-j7pv25f6> <img src="https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Motorcycle journey through mountains" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end" data-astro-cid-j7pv25f6> <div class="p-6 md:p-8" data-astro-cid-j7pv25f6> <h3 class="text-xl md:text-2xl font-bold text-white mb-2" data-astro-cid-j7pv25f6>The Pacific Coast Highway</h3> <p class="text-gray-200" data-astro-cid-j7pv25f6>A 500-mile journey along one of America's most scenic routes.</p> </div> </div> </div> <div class="flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Button", $$Button, { "href": "/motorcycling", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View Motorcycling Journal
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> ` })} </div> </div> </section>  <section class="py-16 md:py-24 bg-primary-600 dark:bg-primary-700 text-white" data-astro-cid-j7pv25f6> <div class="container-narrow text-center" data-astro-cid-j7pv25f6> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-j7pv25f6>Let's Work Together</h2> <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto" data-astro-cid-j7pv25f6>
Have a product challenge you're facing? Looking to collaborate on a project?
        I'd love to hear from you.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "secondary", "size": "lg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Get in Touch
` })} </div> </section> ` })} `;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
