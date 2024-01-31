import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MeetOurTeam = () => {
   return (
      <div>
         <section className="flex items-center py-24 bg-stone-100 font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
               <div className="mb-10 text-center">
                  <span
                     className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                     Team
                  </span>
                  <h1 className="text-3xl font-bold capitalize dark:text-white"> Meet The Team </h1>
               </div>
               <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-800" href="#">
                     <div className="w-full overflow-hidden lg:w-2/4 h-80">
                        <img className="object-cover w-full h-full transition-all hover:scale-110"
                           src="https://i.postimg.cc/4NMZPYdh/pexels-dinielle-de-veyra-4195342.jpg" alt="" />
                     </div>
                     <div
                        className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <div>
                           <h2 className="mb-2 text-xl font-bold dark:text-gray-300">John Doe</h2>
                           <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">Inventory Manager</p>
                           <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                              John is responsible for managing inventory levels, ensuring accurate stock counts, and optimizing warehouse operations.
                           </p>
                           <div className="flex">
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaFacebook className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaTwitter className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaInstagram className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </a>
                  <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-800" href="#">
                     <div className="w-full overflow-hidden lg:w-2/4 h-80">
                        <img className="object-cover w-full h-full transition-all hover:scale-110"
                           src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt="" />
                     </div>
                     <div
                        className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <div>
                           <h2 className="mb-2 text-xl font-bold dark:text-gray-300">Alice Smith</h2>
                           <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">Warehouse Supervisor</p>
                           <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                              Alice oversees daily warehouse operations, manages shipments, and ensures smooth logistics processes.
                           </p>
                           <div className="flex">
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaFacebook className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaTwitter className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaInstagram className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </a>
                  <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-800" href="#">
                     <div className="w-full overflow-hidden lg:w-2/4 h-80">
                        <img className="object-cover w-full h-full transition-all hover:scale-110"
                           src="https://i.postimg.cc/05hmHMx1/pexels-emmy-e-2381069.jpg" alt="" />
                     </div>
                     <div
                        className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <div>
                           <h2 className="mb-2 text-xl font-bold dark:text-gray-300">Mark Johnson</h2>
                           <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">Logistics Coordinator</p>
                           <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                              Mark ensures timely delivery of goods, coordinates with suppliers, and manages transportation logistics.
                           </p>
                           <div className="flex">
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaFacebook className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaTwitter className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaInstagram className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </a>
                  <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-800" href="#">
                     <div className="w-full overflow-hidden lg:w-2/4 h-80">
                        <img className="object-cover w-full h-full transition-all hover:scale-110"
                           src="https://i.postimg.cc/q7pv50zT/pexels-edmond-dant-s-4342352.jpg" alt="" />
                     </div>
                     <div
                        className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                        <div>
                           <h2 className="mb-2 text-xl font-bold dark:text-gray-300">Emily Davis</h2>
                           <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">Supply Chain Analyst</p>
                           <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">
                              Emily analyzes supply chain data, identifies inefficiencies, and implements process improvements to optimize inventory management.
                           </p>
                           <div className="flex">
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaFacebook className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaTwitter className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                              <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                                 <FaInstagram className="text-2xl hover:bg-blue-600 hover:text-white rounded-full" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
};

export default MeetOurTeam;
