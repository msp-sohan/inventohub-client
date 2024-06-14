import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'
import { useEffect, useState } from 'react';
import { createPaymentIntent, updatelimit } from '../../../../api/payment';
import useAuth from '../../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import Swal from 'sweetalert2';

const CheckoutForm = ({ closeModal, paymentInfo, handleAddAllSales, genPDF }) => {
   const stripe = useStripe();
   const elements = useElements();
   const [clientSecret, setClientSecret] = useState('')
   const { user } = useAuth()
   const [processing, setProcessing] = useState(false)

   // Create Payment Intent
   useEffect(() => {
      if (paymentInfo?.price > 0) {
         createPaymentIntent({ price: paymentInfo?.price })
            .then(data => {
               setClientSecret(data?.clientSecret)
            })
      }
   }, [paymentInfo?.price])

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const card = elements.getElement(CardElement);
      if (card == null) {
         return;
      }

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
      } else {
         console.log('[PaymentMethod]', paymentMethod);
      }
      setProcessing(true)

      // Payment Cutting
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  email: user?.email,
                  name: user?.displayName,
               },
            },
         })

      if (confirmError) {
         toast.error(confirmError.message)
         setProcessing(false)
      } else {
         if (paymentIntent?.status === 'succeeded') {
            try {
               await updatelimit(user?.email, paymentInfo)
               const text = `Payment successfull! ${paymentIntent?.id}`
               toast.success(text)
               handleAddAllSales()
               genPDF()
               closeModal()
            } catch (error) {
               toast.error(error.message)
               setProcessing(false)
            } finally {
               setProcessing(false)
            }
         }
         setProcessing(false)
      }
   };



   return (
      <>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {

                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className=" disabled:bg-gray-200 disabled:text-gray-500 py-1 px-3 text-white rounded hover:bg-blue-900 bg-blue-500">
               {processing ? (
                  <TbFidgetSpinner className='m-auto animate-spin' size={24} />
               ) : (
                  `Pay ${paymentInfo?.price}$`
               )}
            </button>
            {/* <button onClick={() => handleAddAllSales(checkouts)}>btn</button> */}
         </form>
      </>
   )
}

export default CheckoutForm