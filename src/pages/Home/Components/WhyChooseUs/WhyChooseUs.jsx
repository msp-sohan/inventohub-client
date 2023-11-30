import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import AOS from 'aos';
AOS.init();

const WhyChooseUs = () => {
   return (
      <div className="bg-gray-100 dark:bg-gray-800">
         <section id="features" className="relative block px-6 pb-10 md:px-10  border-t border-b shadow-[0_3px_10px_rgb(0,0,0,0.2)] drop-shadow-2xl">
            <div className="relative mx-auto max-w-5xl text-center">
               <SectionTitle title="Powerful Inventory Management" subtitle="Why choose us" />
               <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide ">
                  Our platform provides advanced inventory management features with an easy-to-use interface. No technical skills required – manage your inventory effortlessly.
               </p>
            </div>

            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
               <div data-aos="fade-up" className="rounded-md border p-8 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-gray-500 bg-white">
                  <div
                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                     style={{
                        backgroundImage:
                           'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                        borderColor: 'rgb(93, 79, 240)',
                     }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-color-swatch"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                     </svg>
                  </div>
                  <h3 className="mt-6 text-xl">Customizable Inventory</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
                     Tailor your inventorys details, from product names to quantities, with our intuitive customization options.
                  </p>
               </div>

               <div data-aos="fade-up" className="rounded-md border p-8 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-gray-500 bg-white">
                  <div
                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                     style={{
                        backgroundImage:
                           'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                        borderColor: 'rgb(93, 79, 240)',
                     }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bolt"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                     </svg>
                  </div>
                  <h3 className="mt-6 text-xl">Fast Inventory Updates</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
                     Experience lightning-fast updates to your inventory, ensuring real-time information for effective management.
                  </p>
               </div>

               <div data-aos="fade-up" className="rounded-md border p-8 text-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-gray-500 bg-white">
                  <div
                     className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                     style={{
                        backgroundImage:
                           'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                        borderColor: 'rgb(93, 79, 240)',
                     }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-tools"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                        <polyline points="12 8 7 3 3 7 8 12"></polyline>
                        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                        <polyline points="16 12 21 17 17 21 12 16"></polyline>
                        <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                     </svg>
                  </div>
                  <h3 className="mt-6 text-xl">Comprehensive Features</h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide ">
                     Utilize a complete set of features for successful inventory management, right out of the box. No additional installations required.
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
};

export default WhyChooseUs;