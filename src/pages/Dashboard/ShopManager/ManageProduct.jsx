import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import useGetProducts from "../../../hooks/useGetProducts";
import { Delete } from '@mui/icons-material';
import UpdateModal from './Modals/UpdateModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { deleteProduct } from '../../../api/product';
import Helmat from '../../../components/Helmat/Helmat';

const ManageProduct = () => {
   const { data: products = [], refetch } = useGetProducts();
   const [open, setOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);
   const handleOpen = (product) => {
      setSelectedProduct(product);
      setOpen(true);
   };
   const handleClose = () => setOpen(false);

   const handleDeleteProduct = (id) => {
      console.log(id)
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const data = await deleteProduct(id)
               console.log(data)
               refetch()
            } catch (error) {
               toast.error(error.message)
            }
            // Swal.fire({
            //    title: "Deleted!",
            //    text: "Your file has been deleted.",
            //    icon: "success"
            // });
         }
      });
   }


   return (
      <>
         <Helmat title="InventoHub | Manage Product" />
         <div className="mx-auto max-w-full py-8">
            <div className="flex items-center justify-between border-y-2 mb-8">
               <div>
                  <h2 className="font-semibold text-gray-700">Total {products?.length} Product Added</h2>
               </div>
               <div className="flex items-center justify-between">
                  <div className="ml-10 space-x-8 lg:ml-40">
                     <Link to="/dashboard/add-product" className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                        Add a Product
                     </Link>
                  </div>
               </div>
            </div>
            <div className="overflow-y-hidden rounded-lg border">
               <div className="overflow-x-auto">
                  <table className="w-full">
                     <thead>
                        <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                           <th className="px-3 py-3">ID</th>
                           <th className="px-3 py-3">Product Image</th>
                           <th className="px-3 py-3">Product Name </th>
                           <th className="px-3 py-3">Product Quantity</th>
                           <th className="px-3 py-3">Sale Count</th>
                           <th className="px-3 py-3 text-center">Action</th>
                        </tr>
                     </thead>
                     {products?.map((product, index) => <tbody key={product._id} className="text-gray-500 ">
                        <tr className='overflow-hidden'>
                           <td className="border-b  border-gray-200 bg-white px-3 py-3 text-sm">
                              <p className="whitespace-no-wrap">{index + 1}</p>
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
                              <p className="whitespace-no-wrap">{product?.saleCount}</p>
                           </td>

                           <td className="border border-gray-200 bg-white py-3 text-sm">
                              <div className='flex items-center justify-center gap-1'>
                                 <button onClick={() => handleOpen(product)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-pink-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-900">
                                    <BorderColorTwoToneIcon />
                                 </button>
                                 <button onClick={() => handleDeleteProduct(product?._id)} className="inline-flex items-center justify-center w-10 h-10 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800">
                                    <Delete sx={{ width: 20 }}></Delete>
                                 </button>
                              </div>
                           </td>
                        </tr>
                     </tbody>)}
                  </table>
               </div>
               <div className="flex flex-col items-center border-t bg-white px-3 py-3 sm:flex-row sm:justify-between">
                  <span className="text-xs text-gray-600 sm:text-sm"> Showing {products?.length} to {products?.length} of {products?.length} Entries </span>
                  <div className="mt-2 inline-flex sm:mt-0">
                     <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                     <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
                  </div>
               </div>
            </div>
         </div>
         <UpdateModal open={open} handleClose={handleClose} initialProduct={selectedProduct} />
      </>
   );
};

export default ManageProduct;