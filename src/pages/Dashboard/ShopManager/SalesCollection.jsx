import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import useGetProducts from "../../../hooks/useGetProducts";
import Swal from 'sweetalert2';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { addToCheckOut } from '../../../api/checkout';
import Loader from '../../../components/Shared/Loader';
import Helmat from '../../../components/Helmat/Helmat';
import toast from 'react-hot-toast';

const SalesCollection = () => {
   const { data, isLoading } = useGetProducts();
   const [products, setProducts] = useState([]);

   useEffect(() => {
      if (!isLoading) {
         setProducts(data);
      }
   }, [isLoading, data]);

   const handleSearch = (event) => {
      event.preventDefault();
      const form = event.target;
      const search = form.search.value;
      const filter = data.filter((item) => String(item._id).includes(String(search)));
      setProducts(filter);
   };

   const handleAddToCheckOut = async (product) => {
      const { _id: productId, productName, productImage, productQuantity, productCost, discount, sellingPrice, shopId, shopName, userEmail } = product;
      const checkOutData = {
         productId,
         productName,
         productImage,
         productQuantity,
         productCost,
         discount,
         sellingPrice,
         shopId,
         shopName,
         userEmail
      };

      try {
         await addToCheckOut(checkOutData);
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Check-Out Successfully",
            showConfirmButton: false,
            timer: 1500,
         });
      } catch (error) {
         toast.error(error.message);
      }
   };

   if (isLoading) return <Loader />;

   return (
      <>
         <Helmat title="InventoHub || Sales Collection" />
         <div className="mx-auto max-w-full py-8">
            <div className="flex items-center justify-between border-y-2 mb-8">
               <Typography align="center" variant='h3' textAlign={'center'} maxWidth='xl'>
                  Total Sales Collection
               </Typography>
            </div>
            {/* Search Box */}
            <div className="mb-3">
               <form onSubmit={handleSearch} className="relative mb-4 flex w-[40%] flex-wrap items-end">
                  <input
                     type="search"
                     name="search"
                     className="relative m-0 -mr-0.5 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                     placeholder="Search by ID"
                     aria-label="Search" />
                  <button
                     className="relative z-[2] flex items-center rounded-r bg-[#2563eb] text-white  px-6 py-2 font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out  "
                     type="submit">
                     Search
                  </button>
               </form>
            </div>
            <div className="overflow-y-hidden rounded-lg border w-[400px] md:w-[500px] lg:w-full">
               <div className="">
                  <table className="overflow-x-auto w-full">
                     <thead className='overflow-x-auto'>
                        <tr className="bg-blue-600 text-left text-xs overflow-x-auto font-semibold uppercase tracking-widest text-white">
                           <th className="px-3 py-3">Product ID</th>
                           <th className="px-3 py-3">Product Image</th>
                           <th className="px-3 py-3">Product Name </th>
                           <th className="px-3 py-3">Quantity</th>
                           <th className="px-3 py-3">Discount</th>
                           <th className="px-3 py-3">Selling Price</th>
                           <th className="px-3 py-3 text-center">Action</th>
                        </tr>
                     </thead>
                     {products?.map((product) =>
                        <tbody key={product._id} className="text-gray-500 overflow-x-auto">
                           <tr className='overflow-x-auto'>
                              <td className="border-b  border-gray-200 bg-white px-3 py-3 text-sm">
                                 <p className="whitespace-no-wrap">{product?._id}</p>
                              </td>
                              <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                                 <div className="flex items-center">
                                    <div className="w-20 h-20 rounded bg-slate-200 flex-shrink-0">
                                       <img className="h-full w-full" src={product?.productImage} alt="" />
                                    </div>
                                 </div>
                              </td>
                              <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                                 <p className="whitespace-no-wrap">{product?.productName}</p>
                              </td>
                              <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                                 <p className="whitespace-no-wrap">{product?.productQuantity}</p>
                              </td>
                              <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                                 <p className="whitespace-no-wrap">${product?.discount}</p>
                              </td>
                              <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                                 <p className="whitespace-no-wrap">${product?.sellingPrice}</p>
                              </td>

                              <td className="border border-gray-200 bg-white py-3 text-sm">
                                 <div className='flex items-center justify-center gap-1'>
                                    <button onClick={() => handleAddToCheckOut(product)} className="inline-flex items-center justify-center w-10 h-10 text-black transition-colors duration-150 bg-green-300 rounded-lg focus:shadow-outline hover:bg-green-800 hover:text-white">
                                       <ShoppingCartCheckoutIcon sx={{ width: 20 }}></ShoppingCartCheckoutIcon>
                                    </button>
                                 </div>
                              </td>
                           </tr>
                        </tbody>)}
                  </table>
               </div>

            </div>
            <div className="flex flex-col items-center border-t bg-white px-3 py-3 sm:flex-row sm:justify-between">
               <span className="text-xs text-gray-600 sm:text-sm"> Showing {products?.length} to {products?.length} of {products?.length} Entries </span>
               <div className="mt-2 inline-flex sm:mt-0">
                  <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                  <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
               </div>
            </div>
         </div >
      </>
   );
};

export default SalesCollection;