import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PurchaseModal from "./Modals/PurchaseModal";
import Helmat from "../../../components/Helmat/Helmat";
import 'aos/dist/aos.css';
import AOS from 'aos';


const purchaseCardData = [
   { title: "Starter", limit: 200, price: 10 },
   { title: "Premium", limit: 450, price: 20 },
   { title: "Ultimate", limit: 1500, price: 50 }
];

const Subscription = () => {
   let [isOpen, setIsOpen] = useState(false)
   const [paymentInfo, setPaymenttInfo] = useState(0)
   const closeModal = () => {
      setIsOpen(false)
   }
   AOS.init();

   const handlePrice = (cardData) => {
      setPaymenttInfo(cardData)
      setIsOpen(true)
   }


   return (
      <>
         <Helmat title="InventoHub || Subscription" />
         <section className="flex items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-gray-500 font-poppins dark:bg-gray-900 ">
            <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0 md:px-6">
               <SectionTitle title="By Subscription, Increse your product Limit" subtitle="Choose a Plan" width="80%" />
               <div data-aos="zoom-in" className="flex flex-wrap justify-center -mx-3">
                  {
                     purchaseCardData.map(cardData =>
                        <div key={cardData.price} className="w-full px-3 mb-6 md:w-96 lg:w-1/2 xl:w-1/3">
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
                                 <h2 className="mb-6 text-3xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-300">{cardData.title}
                                 </h2>
                                 <ul className="mb-6 lg:self-center">
                                    <li className="flex items-center mb-3 font-medium text-gray-500 dark:text-gray-400">
                                       <a href="" className="mr-2 text-blue-600 dark:text-gray-400">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                             <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                             <path
                                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                          </svg>
                                       </a>
                                       <span>{cardData.limit} Product </span>
                                    </li>

                                 </ul>
                                 <div className="mb-6">
                                    <span
                                       className="relative text-2xl font-medium text-gray-700 dark:text-gray-300 -top-6 right-1">$</span>
                                    <span className="text-5xl font-medium text-gray-700 dark:text-gray-300">{cardData.price}</span>
                                 </div>
                                 <button onClick={() => handlePrice(cardData)}
                                    className="inline-block w-full py-3 font-medium text-center text-blue-600 border border-blue-600 rounded-full hover:bg-blue-700 hover:text-gray-200 dark:border-gray-500 dark:hover:bg-blue-600 dark:hover:text-gray-300 dark:hover:border-blue-600 dark:text-gray-400">
                                    Purchase Now </button>
                              </div>
                           </div>
                        </div>)
                  }
               </div>
            </div>
         </section>
         <PurchaseModal isOpen={isOpen} closeModal={closeModal} paymentInfo={paymentInfo}></PurchaseModal>
      </>
   );
};

export default Subscription;
