// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// Import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
         >

            <SwiperSlide>
               <div className="py-20 dark:bg-gray-700">
                  <div className="max-w-6xl mx-auto md:px-0 font-poppins">
                     <div className="flex flex-wrap items-center px-4">
                        <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                           <span
                              className="inline-block mb-4 text-sm font-semibold leading-none text-red-500 capitalize dark:text-red-200">
                              Efficient Inventory Management
                           </span>
                           <h2
                              className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl lg:text-5xl">
                              Accelerate Your Success
                           </h2>
                           <p className="mb-6 font-medium tracking-wide text-gray-600 dark:text-gray-400 md:text-lg">
                              Unlock the doors to success with our comprehensive inventory management solutions. Achieve your goals and overcome challenges with enthusiasm and determination.
                           </p>
                           <Link to="create-store"
                              className="inline-flex items-center justify-center px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                              Get started</Link>
                        </div>
                        <div className="w-full md:w-1/2">
                           <div className="relative mx-auto md:mr-0 max-w-max">
                              <div
                                 className="absolute z-50 text-blue-500 transform -translate-y-1/2 cursor-pointer top-1/2 left-1/2 hover:text-blue-600">
                                 <Link to="/watch-demo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                       d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                 </svg></Link>
                              </div>
                              <div className="relative overflow-hidden rounded-7xl">
                                 <img src="https://i.postimg.cc/52GLntwd/pexels-lukas-590022.jpg" alt=""
                                    className="relative z-10 object-cover w-full h-full rounded-md" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="relative overflow-hidden bg-white dark:bg-gray-800">
                  <div className="mx-auto max-w-7xl">
                     <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:full lg:pb-28 xl:pb-32">
                        <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                           <div className="max-w-lg mx-auto mb-8 text-center lg:max-w-md lg:mx-0 lg:text-left">
                              <span
                                 className="inline-block px-2.5 py-0.5 font-semibold text-xs leading-5 text-blue-600 bg-blue-100 rounded-md">Inventory</span>
                              <h2
                                 className="mt-6 text-4xl font-bold leading-10 tracking-tight text-gray-800 dark:text-gray-300 md:text-4xl">
                                 Streamline Your Operations with Our Inventory Solutions
                              </h2>
                              <p
                                 className="mt-6 tracking-wide text-gray-600 dark:text-gray-400 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                                 Elevate your inventory management with our award-winning solutions. Achieve efficiency and accuracy in your operations with our comprehensive tools and features.
                              </p>
                              <div className="justify-center mt-6 lg:justify-start sm:flex">
                                 <div className="">
                                    <a href=""
                                       className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500 ">
                                       Get started</a>
                                 </div>
                                 <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href=""
                                       className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                       Learn More</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:absolute lg:top-[18%] lg:inset-y-0 lg:right-0 lg:w-1/2">
                     <img src="https://i.postimg.cc/8PBWyRJN/All-Isometric-DEC16-15.jpg" alt=""
                        className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full" />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="my-10 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                     <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-4xl md:text-5xl">
                           <span className="block xl:inline">Efficient Data Management for Your</span>
                           <span className="block text-indigo-600 xl:inline"> Inventory Operations</span>
                        </h1>
                        <p
                           className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                           Leverage advanced data management to optimize your inventory operations. Our platform equips you with the essential tools for efficient inventory control and management.
                        </p>

                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                           <div className="rounded-md shadow">
                              <a href="#"
                                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                 Get started
                              </a>
                           </div>
                           <div className="mt-3 sm:mt-0 sm:ml-3">
                              <Link to="watch-demo"
                                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                 Live demo
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.ibb.co/wNJPNW5/photo-1674027392851-7b34f21b07ee.jpg" alt="" />
                     </div>

                  </div>

               </section>
            </SwiperSlide>
         </Swiper >
      </>
   );
};

export default Banner;
