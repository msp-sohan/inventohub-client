

const Newsletter = () => {

   return (
      <section className="relative flex items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] drop-shadow-md shadow-gray-500  overflow-hidden bg-gray-100 dark:bg-gray-800">
         <div className="justify-center flex-1 mx-auto shadow dark:bg-gray-900 bg-gray-50">
            <div className="relative">
               <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl">
                  <div className="flex flex-wrap items-center">
                     <div className="w-full px-4 mb-6 lg:mb-0 lg:w-1/2">
                        <span className="inline-block px-2 py-0.5 mb-4 text-xs leading-4 tracking-widest text-gray-100 bg-blue-500 rounded-md">
                           Newsletter
                        </span>
                        <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                           Stay updated with the latest trends and innovations in inventory management. Our newsletter delivers valuable insights directly to your inbox.
                        </p>
                        <div className="w-full lg:w-1/2">
                           <div className="flex gap-4">
                              <img
                                 className="object-cover w-1/2 rounded-md md:w-72 h-44 md:h-72"
                                 src="https://i.postimg.cc/TPpXmk3s/pexels-christina-morillo-1181605.jpg"
                                 alt=""
                              />
                              <img
                                 className="object-cover w-1/2 rounded-md md:w-72 h-44 md:h-72"
                                 src="https://i.postimg.cc/k4QKyvjQ/pexels-marcus-aurelius-4063619.jpg"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="w-full px-4 mb-6 lg:mb-0 lg:w-1/2">
                        <h2 className="mb-3 text-3xl font-semibold text-gray-900 sm:text-5xl dark:text-gray-400">
                           Join 100+ professionals in optimizing their inventory management
                        </h2>
                        <p className="mb-6 text-gray-700 dark:text-gray-400">
                           Sign up for our newsletter and be part of a community that leverages smart inventory solutions for seamless operations and business growth.
                        </p>
                        <div className="flex flex-wrap justify-start mb-6">
                           <input
                              className="w-full px-4 py-4 mb-6 text-sm text-gray-900 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md dark:text-gray-400 lg:mr-3 dark:placeholder-gray-400 dark:bg-gray-700 dark:border-gray-700 md:mb-0 md:w-1/2"
                              type="text"
                              placeholder="Type your e-mail"
                           />
                           <button className="w-full px-6 py-4 text-sm font-semibold text-gray-100 bg-blue-500 rounded-md md:w-auto md:ml-2 hover:bg-blue-600">
                              Subscribe
                           </button>
                        </div>
                        <div className="flex flex-wrap justify-start gap-2 mb-2">
                           <button className="inline-flex items-center p-2 space-x-2 font-semibold text-blue-500 rounded shadow hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400 bg-gray-50">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                              </svg>
                           </button>
                           {/* Add similar buttons for other social media platforms */}
                        </div>
                        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
                           Also, subscribe through social media.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-0 right-0 items-center justify-center hidden lg:inline-flex">
                  {/* Add your SVG or other content for this part */}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Newsletter;
