import { Dialog, Transition } from '@headlessui/react'
import { Elements } from '@stripe/react-stripe-js'
import { Fragment } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
export default function PurchaseModal({ closeModal, isOpen, paymentInfo, checkouts, handleAddAllSales, genPDF }) {

   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-xl mb-5 font-medium text-center leading-6 text-gray-900">
                           Please Pay by Using Stripe
                        </Dialog.Title>
                        <Elements stripe={stripePromise}>
                           <CheckoutForm closeModal={closeModal} handleAddAllSales={handleAddAllSales} paymentInfo={paymentInfo} checkouts={checkouts} genPDF={genPDF}></CheckoutForm>
                        </Elements>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   )
}
