/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D_CmcNH8.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionHeading } from '../chunks/SectionHeading_C6AOcC9L.mjs';
import { $ as $$Card } from '../chunks/Card_BOnlfeV3.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
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
    },
    {
      title: "WorkFlow Project Management Tool",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/workflow",
      excerpt: "Revamped the UX of a project management tool used by over 10,000 teams globally.",
      tags: ["B2B SaaS", "Enterprise", "Productivity"]
    },
    {
      title: "FoodFinder Local Restaurant App",
      image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/foodfinder",
      excerpt: "Created a mobile app connecting users with local, independent restaurants.",
      tags: ["Mobile App", "Location Based", "Food & Dining"]
    },
    {
      title: "EdTech Learning Platform",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/edtech",
      excerpt: "Designed an adaptive learning platform for K-12 students with personalized curriculum.",
      tags: ["Education", "AI/ML", "UX Design"]
    },
    {
      title: "FinApp Financial Management",
      image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/projects/finapp",
      excerpt: "Built a personal finance management app with budgeting and investment tracking features.",
      tags: ["Fintech", "Mobile App", "Data Visualization"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects | John Doe - Product Manager", "description": "Explore case studies and projects by John Doe, showcasing product management expertise across various industries." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20"> <div class="container-narrow"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
My Projects
</h1> <p class="text-xl text-gray-700 dark:text-gray-300 mb-0 leading-relaxed max-w-3xl">
A showcase of product management work across different industries and challenges.
        Each case study highlights my approach to problem-solving and product development.
</p> </div> </section>  <section class="py-16 md:py-24 bg-white dark:bg-gray-900"> <div class="container-wide"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": project.title, "image": project.image, "imageAlt": project.title, "url": project.url, "tags": project.tags }, { "default": ($$result3) => renderTemplate` <p>${project.excerpt}</p> ` })}`)} </div> </div> </section>  <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"> <div class="container-narrow"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "My Product Process", "subtitle": "How I approach product development and problem-solving.", "centered": true })} <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"> <div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Discovery & Research</h3> <p class="text-gray-700 dark:text-gray-300 mb-6">
Every successful product starts with understanding the problem space. I use a combination of user interviews, 
            market research, and competitive analysis to identify opportunities and validate assumptions.
</p> <ul class="space-y-2"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">User interviews and surveys</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Competitive analysis</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Market trend analysis</span> </li> </ul> </div> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"> <div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Strategy & Definition</h3> <p class="text-gray-700 dark:text-gray-300 mb-6">
With a clear understanding of the problem, I define the product strategy and roadmap. This includes identifying 
            key metrics, defining MVP features, and creating a long-term vision for the product.
</p> <ul class="space-y-2"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Product vision and strategy</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Feature prioritization</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Success metrics definition</span> </li> </ul> </div> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"> <div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Planning & Execution</h3> <p class="text-gray-700 dark:text-gray-300 mb-6">
Implementation requires careful planning and coordination. I work closely with designers, engineers, and 
            other stakeholders to ensure the product is built according to specifications and on schedule.
</p> <ul class="space-y-2"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Agile sprint planning</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Cross-functional coordination</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Risk management</span> </li> </ul> </div> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"> <div class="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Measurement & Iteration</h3> <p class="text-gray-700 dark:text-gray-300 mb-6">
The product development cycle doesn't end with launch. I continuously monitor product performance, 
            gather user feedback, and make data-driven decisions for future iterations.
</p> <ul class="space-y-2"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Performance analytics</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">User feedback collection</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700 dark:text-gray-300">Iterative improvement</span> </li> </ul> </div> </div> </div> </section>  <section class="py-16 md:py-24 bg-white dark:bg-gray-900"> <div class="container-narrow"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "title": "Client Testimonials", "subtitle": "What others say about working with me.", "centered": true })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"> <div class="flex items-center mb-6"> <div class="text-4xl text-primary-500">"</div> </div> <p class="text-gray-700 dark:text-gray-300 mb-6">
John has an exceptional ability to understand complex problems and translate them into elegant product solutions.
            His strategic thinking and user-focused approach were instrumental in the success of our platform redesign.
</p> <div class="flex items-center"> <div class="mr-4"> <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Johnson" class="w-12 h-12 rounded-full object-cover"> </div> <div> <h4 class="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4> <p class="text-sm text-gray-500 dark:text-gray-400">CEO, TechStartup Inc.</p> </div> </div> </div> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"> <div class="flex items-center mb-6"> <div class="text-4xl text-primary-500">"</div> </div> <p class="text-gray-700 dark:text-gray-300 mb-6">
Working with John was a game-changer for our team. His methodical approach to product development and 
            ability to balance business needs with user experience resulted in a product that exceeded our expectations.
</p> <div class="flex items-center"> <div class="mr-4"> <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Michael Chen" class="w-12 h-12 rounded-full object-cover"> </div> <div> <h4 class="font-semibold text-gray-900 dark:text-white">Michael Chen</h4> <p class="text-sm text-gray-500 dark:text-gray-400">Product Director, EnterpriseApp</p> </div> </div> </div> </div> </div> </section>  <section class="py-16 md:py-20 bg-primary-600 dark:bg-primary-700 text-white"> <div class="container-narrow text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2> <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
I'm always interested in tackling new product challenges and helping teams build better products.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "Button", Button, { "href": "/contact", "variant": "secondary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Let's Discuss Your Project
` })} </div> </div> </section> ` })}`;
}, "/home/project/src/pages/projects.astro", void 0);

const $$file = "/home/project/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
