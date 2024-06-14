import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import useGetProducts from "../../../hooks/useGetProducts";
import { Delete } from '@mui/icons-material';
import UpdateModal from './Modals/UpdateModal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { deleteProduct } from '../../../api/product';
import Helmat from '../../../components/Helmat/Helmat';
import EmptyAddProduct from '../../EmptyPage/EmptyAddProduct';

const ManageProduct = () => {
   const { data = [], refetch, isLoading } = useGetProducts();
   const [products, setProducts] = useState([]);
   const [open, setOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);
   const handleOpen = (product) => {
      setSelectedProduct(product);
      setOpen(true);
   };
   const handleClose = () => setOpen(false);

   useEffect(() => {
      if (!isLoading) {
         setProducts(data);
      }
   }, [isLoading, data]);

   const handleSearch = (event) => {
      event.preventDefault();
      const form = event.target;
      const search = form.value;
      const filter = data.filter((item) => String(item.productName).toLowerCase().includes(String(search).toLowerCase()));
      setProducts(filter);
   };

   const handleDeleteProduct = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: `You won't be able to Get Back This Product! id: ${id}`,
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const data = await deleteProduct(id)
               if (data) {
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your Product has been deleted.",
                     icon: "success"
                  });
               }
               refetch()
            } catch (error) {
               toast.error(error.message)
            }
         }
      });
   }

   if (!data?.length) {
      return <EmptyAddProduct />
   }

   return (
      <>
         <Helmat title="InventoHub | Manage Product" />
         <div className="mx-auto max-w-full py-8">
            <div className="flex items-center justify-between border-y-2 mb-8">
               <div>
                  <h2 className="font-semibold text-gray-700 dark:text-gray-200">Total {products?.length} Product Added</h2>
               </div>
               <div className="flex items-center justify-between">
                  <div className="ml-10 space-x-8 lg:ml-40">
                     <Link to="/dashboard/add-product" className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                        Add a Product
                     </Link>
                  </div>
               </div>
            </div>
            {/* Search Box */}
            <div className="mb-3">
               <form className="relative mb-4 flex ml-auto max-w-sm flex-wrap items-end">
                  <input
                     onChange={handleSearch}
                     type="search"
                     name="search"
                     className="relative m-0 -mr-0.5 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                     placeholder="Search by Name"
                     aria-label="Search" />
                  <button disabled
                     className="relative z-[2] flex items-center rounded-r bg-[#2563eb] text-white  px-6 py-2 font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out  ">
                     Search
                  </button>
               </form>
            </div>
            {/* Table Start */}
            {/* <div className="overflow-y-hidden rounded-lg border  md:w-full">
               <div className="w-[calc(100vw-32px)]">
                  <table className="overflow-x-auto w-screen">
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
                     {
                        !products?.length ? "" : <tbody className="text-gray-500 ">
                           {products?.map((product, index) => <tr key={product._id} className='overflow-hidden'>
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
                           </tr>)}
                        </tbody>
                     }
                  </table>
               </div>

            </div> */}
            {/* ==================== */}
            <div className="mt-12 grid grid-cols-1 overflow-x-auto ">
               <table className="w-full divide-y border rounded divide-gray-200 overflow-x-auto">
                  <thead className="bg-blue-300 text-black ">
                     <tr className="bg-blue-600  text-left text-xs font-semibold uppercase tracking-widest text-white ">
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Product Image</th>
                        <th className="px-3 py-3">Product Name </th>
                        <th className="px-3 py-3">Product Quantity</th>
                        <th className="px-3 py-3">Sale Count</th>
                        <th className="px-3 py-3 text-center">Action</th>
                     </tr>
                  </thead>
                  {
                     !products?.length ? "" : <tbody className="text-gray-500 ">
                        {products?.map((product, index) => <tr key={product._id} className='overflow-hidden '>
                           <td className="border-b  border-gray-200  px-3 py-3 text-sm">
                              <p className="whitespace-no-wrap dark:text-gray-200">{index + 1}</p>
                           </td>
                           <td className="border-b border-gray-200  px-3 py-3 text-sm">
                              <div className="flex items-center">
                                 <div className="w-20 h-20 rounded bg-slate-200 flex-shrink-0">
                                    <img className="h-full w-full dark:text-gray-200" src={product?.productImage} alt="" />
                                 </div>
                              </div>
                           </td>
                           <td className="border-b border-gray-200  px-3 py-3 text-sm">
                              <p className="whitespace-no-wrap dark:text-gray-200">{product?.productName}</p>
                           </td>
                           <td className="border-b border-gray-200  px-3 py-3 text-sm">
                              <p className="whitespace-no-wrap dark:text-gray-200">{product?.productQuantity}</p>
                           </td>
                           <td className="border-b border-gray-200  px-3 py-3 text-sm">
                              <p className="whitespace-no-wrap dark:text-gray-200">{product?.saleCount}</p>
                           </td>

                           <td className="border border-gray-200  py-3 text-sm">
                              <div className='flex items-center justify-center gap-1'>
                                 <button onClick={() => handleOpen(product)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-pink-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-900">
                                    <BorderColorTwoToneIcon />
                                 </button>
                                 <button onClick={() => handleDeleteProduct(product?._id)} className="inline-flex items-center justify-center w-10 h-10 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800">
                                    <Delete sx={{ width: 20 }}></Delete>
                                 </button>
                              </div>
                           </td>
                        </tr>)}
                     </tbody>
                  }
               </table>
            </div>
            {/* ==================== */}
            {/* Table End */}
            <div className="flex flex-col items-center border-t  px-3 py-3 sm:flex-row sm:justify-between ">
               <span className="text-xs text-gray-600 dark:text-gray-200 sm:text-sm"> Showing {products?.length} to {products?.length} of {products?.length} Entries </span>
               <div className="mt-2 inline-flex sm:mt-0">
                  <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 dark:text-gray-200 transition duration-150 hover:bg-gray-100">Prev</button>
                  <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 dark:text-gray-200 transition duration-150 hover:bg-gray-100">Next</button>
               </div>
            </div>
         </div>
         <UpdateModal open={open} handleClose={handleClose} initialProduct={selectedProduct} />
      </>
   );
};

export default ManageProduct;