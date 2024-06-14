import Swal from "sweetalert2";
import { addToAllSale } from "../../../api/sales";
import useCheckout from "../../../hooks/useCheckout";
import EmptyPage from "../../EmptyPage/EmptyPage";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Helmat from "../../../components/Helmat/Helmat";
import { useNavigate } from "react-router-dom";
import PurchaseModal from "./Modals/PurchaseModal";
import { useState } from "react";

const CheckOut = () => {
   const { user } = useAuth()
   const { data: checkouts = [], refetch } = useCheckout()

   let [isOpen, setIsOpen] = useState(false)

   // useEffect(() => {
   //    if (!isLoading) {
   //       setCheckouts(data);
   //    }
   // }, [isLoading, data]);

   const closeModal = () => {
      setIsOpen(false)
   }

   const [price, setPrice] = useState(0)

   const navigate = useNavigate()

   const item = checkouts?.map(item => { return item })

   const totalPrice = parseFloat(checkouts?.reduce((price, item) => item?.sellingPrice + price, 0)).toFixed(2)

   // Single item checkout
   // const handleAddSales = async (item) => {
   //    try {
   //       await addToSale(item)
   //       Swal.fire({
   //          position: "center",
   //          icon: "success",
   //          title: "Get Paid Successfully",
   //          showConfirmButton: false,
   //          timer: 1500
   //       });
   //       refetch()
   //    } catch (error) {
   //       toast.error(error.message)
   //    }
   // }

   const handleCheckout = (totalPrice) => {
      setIsOpen(true)
      setPrice(totalPrice)
   }

   const handleAddAllSales = async () => {
      try {
         await addToAllSale(item)
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Get Paid Successfully",
            showConfirmButton: false,
            timer: 1500,
            willOpen: () => {
               Swal.getPopup().style.zIndex = '50';
               Swal.getPopup().style.position = 'absolute'; 
               Swal.getPopup().style.top = '75px'; 
           }
         });
         refetch()
         navigate('/dashboard/sales-collection')
      } catch (error) {
         toast.error(error.message)
      }
   }

   if (checkouts?.length === 0) {
      return <EmptyPage />
   }

   // =============================================
   // Genarate PDF by jsPDF
   function genPDF() {
      var doc = new jsPDF('p', 'px', 'a4');
      doc.setFontSize(24);
      doc.text('Invoice', 200, 50);
      doc.setFontSize(12);
      doc.text(`Invoice Number: ${item[0]?._id}`, 35, 90);
      doc.text(`Date: ${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}`, 35, 105);
      doc.text(`Customer: ${user?.displayName}`, 35, 120);
      doc.text(`Email: ${user?.email}`, 35, 135);
      doc.setFontSize(14);
      doc.text('Product Details:', 35, 180);

      // Table Headers
      const headers = [['Product Name', 'Quantity', 'Price']];
      // Table Data
      const data = [[`${item[0]?.productName}`, `${item[0]?.qty}`, `$${item[0]?.sellingPrice}`]];
      var styles = {
         fontSize: 16,
      };
      doc.autoTable({
         head: headers,
         body: data,
         styles,
         startY: 190,
         margin: { top: 200 },
      });
      doc.setFontSize(12);
      doc.text(`Total: $${item[0]?.sellingPrice}`, 35, doc.autoTable.previous.finalY + 30);
      doc.text('Thank you for your purchase!', 35, doc.autoTable.previous.finalY + 45);
      // doc.addImage(item[0]?.productImage, 350, doc.autoTable.previous.finalY + 10, 25, 25)
      doc.text('Powered By: Invento Hub', 310, doc.autoTable.previous.finalY + 50);

      // Save the PDF
      doc.save('invoice.pdf');
   }

   return (
      <>
         <Helmat title="InventoHub | CheckOut" />
         <section className="flex items-center py-16 bg-gray-50 font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 max-w-6xl px-6 py-6 mx-auto bg-gray-100 rounded-md shadow-md dark:border-gray-900 dark:bg-gray-900 lg:py-10 lg:px-10">
               <div className="mb-16 text-center">
                  <h1
                     className="mb-6 text-2xl font-semibold leading-7 tracking-wide text-gray-700 lg:text-4xl dark:text-gray-300 lg:leading-9">
                     Checkout Here </h1>
               </div>
               <div className="max-w-4xl mx-auto mb-10">
                  <h2 className="mb-4 text-xl font-medium dark:text-gray-400">What you CheckOut:</h2>
                  {
                     checkouts?.map(item =>
                        <div key={item?._id} className="p-10 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
                           <div className="mr-6 md:mr-12">
                              <img className=" w-full lg:w-[80px] h-[200px] lg:h-[80px] object-cover bg-gray-200  mx-auto mb-6 sm:mb-0 "
                                 src={item?.productImage} alt={item?.productName} />
                           </div>
                           <div className="flex-1">
                              <p className="inline-block mb-1 text-lg font-medium dark:text-gray-400 hover:underline">
                                 {item?.productName}
                              </p>
                              <div className="flex flex-wrap">
                                 <p className="mr-4 text-sm font-medium dark:text-gray-400">
                                    <span className="font-medium">Selling Price</span>
                                    <span className="ml-2 text-gray-400">${item?.sellingPrice.toFixed(2)}</span>
                                 </p>
                                 <p className="mr-4 text-sm font-medium dark:text-gray-400">
                                    <span className="font-medium">Discount:</span>
                                    <span className="ml-2 text-gray-400">{item?.discount}%</span>
                                 </p>
                                 <p className="mr-4 text-sm font-medium dark:text-gray-400">
                                    {/* <span className="font-medium">Style:</span>
                                    <span className="ml-2 text-gray-400">Uk minimal design</span> */}
                                 </p>
                                 <p className="text-sm font-medium dark:text-gray-400">
                                    <span>Qty:</span>
                                    <span className="ml-2 text-gray-400">{item?.qty}</span>
                                 </p>
                              </div>
                           </div>
                           {/* Single Item */}
                           {/* <div onClick={() => genPDF(item)}>
                              <button onClick={() => handleAddSales(item)} className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-800 dark:bg-gray-700">
                                 Get Paid
                              </button>
                           </div> */}
                        </div>
                     )
                  }
               </div>
               <div className="max-w-4xl mx-auto ">
                  <h2 className="mb-4 text-xl font-medium dark:text-gray-200 ">Order Details:</h2>
                  <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                     <div className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-gray-800">
                        <div className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 dark:bg-gray-600">
                           <div className="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
                              {checkouts?.length}
                           </div>
                        </div>
                        <span className="mr-16 dark:text-gray-200">Products</span>
                     </div>
                     <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-200 dark:bg-gray-800  font-heading">
                        <span>Total</span>
                        <span className="flex items-center text-blue-500 dark:text-blue-400">
                           <span className="text-xl">${totalPrice}</span>
                        </span>
                     </div>

                     <button className="px-6 w-full  py-3 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
                        <p onClick={() => handleCheckout(totalPrice)}>All Get Paid</p>
                     </button>

                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 ">
                     {/* <button onClick={genPDF} className="bg-green-500 p-3 hover:text-white">Try Pdf</button> */}
                  </div>
               </div>
            </div>
         </section>
         <PurchaseModal isOpen={isOpen} closeModal={closeModal} paymentInfo={{ price }} handleAddAllSales={handleAddAllSales} checkouts={checkouts} genPDF={genPDF}></PurchaseModal>
      </>
   );
};

export default CheckOut;