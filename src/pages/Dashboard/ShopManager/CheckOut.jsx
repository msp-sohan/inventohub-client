import Swal from "sweetalert2";
import { addToSale } from "../../../api/sales";
import useCheckout from "../../../hooks/useCheckout";
import EmptyPage from "../../EmptyPage/EmptyPage";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Helmat from "../../../components/Helmat/Helmat";

const CheckOut = () => {
   const { user } = useAuth()
   const { data: checkouts = [], refetch } = useCheckout()

   const totalPrice = parseFloat(checkouts?.reduce((price, item) => item?.sellingPrice + price, 0)).toFixed(2)

   const handleAddSales = async (item) => {
      try {
         const result = await addToSale(item)
         if (result) {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your work has been saved",
               showConfirmButton: false,
               timer: 1500
            });
            refetch()
         }
      } catch (error) {
         toast.error(error.message)
      }
   }

   if (checkouts?.length < 0) {
      return <EmptyPage />
   }

   function genPDF(item) {
      var doc = new jsPDF('p', 'px', 'a4');
      doc.setFontSize(24);
      doc.text('Invoice', 200, 50);
      doc.setFontSize(12);
      doc.text(`Invoice Number: ${item._id}`, 35, 90);
      doc.text(`Date: ${item.productAddedDate}`, 35, 105);

      doc.text(`Customer: ${user?.displayName}`, 35, 120);
      doc.text(`Email: ${user?.email}`, 35, 135);
      doc.setFontSize(14);
      doc.text('Product Details:', 35, 180);

      // Table Headers
      const headers = [['Product Name', 'Quantity', 'Price']];
      // Table Data
      const data = [[`${item.productName}`, 1, `$${item.sellingPrice}`]];
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
      doc.text(`Total: $${item?.sellingPrice}`, 35, doc.autoTable.previous.finalY + 30);
      doc.text('Thank you for your purchase!', 35, doc.autoTable.previous.finalY + 45);
      doc.addImage(item?.productImage, 350, doc.autoTable.previous.finalY + 10, 25, 25)
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
                     Thank you Add to Checkout, </h1>
               </div>
               <div className="max-w-4xl mx-auto mb-10">
                  <h2 className="mb-4 text-xl font-medium dark:text-gray-400">What you CheckOut:</h2>

                  {
                     checkouts?.map(item =>
                        <div key={item._id} className="p-10 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
                           <div className="mr-6 md:mr-12">
                              <img className=" w-full lg:w-[80px] h-[200px] lg:h-[80px] object-cover bg-gray-200  mx-auto mb-6 sm:mb-0 "
                                 src={item?.productImage} alt={item.productName} />
                           </div>
                           <div className="flex-1">
                              <p className="inline-block mb-1 text-lg font-medium dark:text-gray-400 hover:underline">
                                 {item.productName}
                              </p>
                              <div className="flex flex-wrap">
                                 <p className="mr-4 text-sm font-medium dark:text-gray-400">
                                    <span className="font-medium">Selling Price</span>
                                    <span className="ml-2 text-gray-400">${item?.sellingPrice}</span>
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
                                    <span className="ml-2 text-gray-400">1</span>
                                 </p>
                              </div>
                           </div>
                           <div onClick={() => genPDF(item)}>
                              <button onClick={() => handleAddSales(item)} className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-gray-800 dark:bg-gray-700">
                                 Get Paid
                              </button>
                           </div>
                        </div>
                     )
                  }
               </div>
               <div className="max-w-4xl mx-auto ">
                  <h2 className="mb-4 text-xl font-medium dark:text-gray-400 ">Order Details:</h2>
                  <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-3">
                     <div className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-gray-800">
                        <div className="absolute right-0 flex items-center justify-center bg-blue-500 rounded-md w-14 h-14 dark:bg-gray-600">
                           <div className="flex items-center justify-center text-lg font-bold text-blue-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
                              {checkouts?.length}
                           </div>
                        </div>
                        <span className="mr-16">Products</span>
                     </div>
                     <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-400 dark:bg-gray-800 font-heading">
                        <span>Total</span>
                        <span className="flex items-center text-blue-500 dark:text-blue-400">
                           <span className="text-xl">${totalPrice}</span>
                        </span>
                     </div>
                     <button onClick={genPDF} className="w-full px-6 py-3 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
                        Go Back To Cart
                     </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 ">

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CheckOut;