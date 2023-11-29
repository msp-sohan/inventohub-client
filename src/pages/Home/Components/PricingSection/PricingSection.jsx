import { CheckCircle } from "@mui/icons-material";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PricingSection = () => {
   return (
      <section className="flex items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-gray-500 font-poppins dark:bg-gray-900 ">
         <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
            <SectionTitle title="Start your Business Plan" subtitle="Choose Plan" width="80%" />
            <div className="flex flex-wrap justify-center -mx-3">
               <div data-aos="flip-right" className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                  <div className="flex flex-col items-center rounded-md shadow-md dark:bg-gray-800 bg-gray-50">
                     <div className="flex justify-center w-full bg-blue-100 rounded-b-full dark:bg-gray-700">
                        <a href="#" className="py-6 text-blue-600 dark:text-gray-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="w-16 h-16 bi bi-archive" viewBox="0 0 16 16">
                              <path
                                 d="M1 2.5A2.5 2.5 0 0 1 3.5 0h9A2.5 2.5 0 0 1 15 2.5v2.75a.75.75 0 0 1-1.5 0V2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.75a.75.75 0 0 1-1.5 0V2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.75a.75.75 0 0 1-1.5 0V2.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7.75a.75.75 0 0 1-1.5 0V2.5z" />
                           </svg>
                        </a>
                     </div>
                     <div className="px-16 py-6 text-center w-full">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-300">Starter
                        </h2>
                        <ul className="mb-6 lg:self-center">
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Unlimited Products</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Inventory Tracking</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Basic Reporting</span>
                           </li>
                           <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Order Management</span>
                           </li>
                        </ul>
                        <div className="mb-6">
                           <span className="relative text-2xl font-medium text-gray-700 dark:text-gray-300 -top-6 right-1">$</span>
                           <span className="text-5xl font-medium text-gray-700 dark:text-gray-300">10</span>
                           <span className="text-3xl font-medium text-gray-700 dark:text-gray-300">/200</span>
                        </div>
                        <a href="#"
                           className="inline-block w-full py-3 font-medium text-center text-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-blue-600 dark:hover:text-gray-300 dark:hover:border-blue-600 dark:text-gray-400">
                           Subscribe Now </a>
                     </div>
                  </div>
               </div>

               <div data-aos="zoom-in" className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                  <div className="flex flex-col items-center rounded-md shadow-md dark:bg-gray-800 bg-gray-50">
                     <div className="flex justify-center w-full bg-blue-100 rounded-b-full dark:bg-gray-700">
                        <a href="#" className="py-6 text-blue-600 dark:text-gray-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="w-16 h-16 bi bi-layers" viewBox="0 0 16 16">
                              <path
                                 d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                              <path
                                 d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                           </svg>
                        </a>
                     </div>
                     <div className="px-16 py-6 text-center w-full">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-300">Premium
                        </h2>
                        <ul className="mb-6 lg:self-center">
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Real-time  Tracking</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Email Alerts for Low Stock</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Cloud Storage for Backup</span>
                           </li>
                           <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Multi-user Collaboration</span>
                           </li>
                        </ul>
                        <div className="mb-6">
                           <span className="relative text-2xl font-medium text-gray-700 -top-6 right-1 dark:text-gray-300">$</span>
                           <span className="text-5xl font-medium text-gray-700 dark:text-gray-300">20</span>
                           <span className="text-3xl font-medium text-gray-700 dark:text-gray-300">/450</span>
                        </div>
                        <a href="#"
                           className="inline-block w-full py-3 font-medium text-center bg-blue-600 rounded-full dark:hover:text-gray-300 dark:text-gray-400 text-indigo-50 hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-blue-600">
                           Subscribe Now </a>
                     </div>
                  </div>
               </div>

               <div data-aos="flip-left" className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3">
                  <div className="flex flex-col items-center rounded-md shadow-md dark:bg-gray-800 bg-gray-50">
                     <div className="flex justify-center w-full bg-blue-100 rounded-b-full dark:bg-gray-700">
                        <a href="#" className="py-6 text-blue-600 dark:text-gray-400 ">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="w-16 h-16 bi bi-building" viewBox="0 0 16 16">
                              <path fillRule="evenodd"
                                 d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                              <path
                                 d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                           </svg>
                        </a>
                     </div>
                     <div className="px-16 py-6 text-center w-full">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-300">
                           Ultimate
                        </h2>
                        <ul className="mb-6 lg:self-center">
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Real-time  Tracking</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Email Alerts for Low Stock</span>
                           </li>
                           <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Cloud Storage for Backup</span>
                           </li>
                           <li className="flex items-center font-medium text-gray-500 dark:text-gray-400">
                              <CheckCircle className="text-blue-600  bg-white mr-2" />
                              <span>Multi-user Collaboration</span>
                           </li>
                        </ul>
                        <div className="mb-6">
                           <span
                              className="relative text-2xl font-medium text-gray-700 dark:text-gray-300 -top-6 right-1">$</span>
                           <span className="text-5xl font-medium text-gray-700 dark:text-gray-300">50</span>
                           <span className="text-3xl font-medium text-gray-700 dark:text-gray-300">/1500</span>
                        </div>
                        <a href="#"
                           className="inline-block w-full py-3 font-medium text-center text-blue-600 border border-blue-600 rounded-full dark:hover:text-gray-300 dark:text-gray-400 hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-blue-600 dark:hover:border-blue-600">
                           Subscribe Now </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PricingSection;
