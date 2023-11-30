import { useState } from "react";
import useAllShops from "../../../hooks/useAllShops";
import NoticeModal from "./Modal/NoticeModal";
import Helmat from "../../../components/Helmat/Helmat";

const ManageShops = () => {
   const { data: allShops } = useAllShops()
   const [open, setOpen] = useState(false);
   const [singleShop, setSingleShop] = useState({})

   const handleOpen = (shop) => {
      setSingleShop(shop)
      setOpen(true)
   };

   const handleClose = () => setOpen(false);

   return (
      <>
         <Helmat title="InventoHub || Manage Shops" />
         <div className="mt-12 grid grid-cols-1 overflow-x-auto">
            <table className="w-full divide-y border rounded divide-gray-200 overflow-x-auto">
               <thead className="bg-blue-300 text-black">
                  <tr>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">#</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Logo</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Shop Name</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Product Limit</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Shop Description</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Actions</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  {
                     allShops?.map((shop, index) => <tr key={shop?._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500 font-bold">
                           {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 md:w-16 h-10 md:h-16">
                                 <img className="rounded-full" src={shop?.shopLogo} alt="" />
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="text-sm md:text-base text-gray-900">{shop?.shopName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                           {shop?.limit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                           {shop?.shopDescription}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm md:text-base font-medium">
                           <button onClick={() => handleOpen(shop)} className="py-1 px-3 rounded bg-green-300 hover:bg-green-800 hover:text-white font-semibold">Send Notice</button>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
         {/* ============================================== */}
         {/* <div className="p-6 mb-6 bg-white rounded-md shadow card dark:bg-gray-900 grid grid-cols-1">
            <h2 className="mb-4 text-xl font-semibold dark:text-gray-400"> Table </h2>
            <div className="overflow-x-auto ">
               <table className="w-full table-auto min-w-max">
                  <thead>
                     <tr>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> Invoice Subject </span>
                        </th>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> Created </span>
                        </th>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> Client </span>
                        </th>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> VAT </span>
                        </th>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> Status</span>
                        </th>
                        <th className="pb-5 text-left" scope="col">
                           <span className="text-sm font-normal text-gray-400"> Price </span>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="px-0 pt-0 pb-3" scope="row">
                           <div
                              className="flex items-center h-16 pl-6 bg-white border-t border-b border-l rounded-l-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <div className="mr-4">
                                 <input type="checkbox" value="" id="" />
                              </div>
                              <span className="text-lg font-normal"> Wireframe name is sohnan </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              06.01.2022
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> Adobe </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> 74634 </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span
                                 className="inline-block px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-md dark:text-gray-400 dark:bg-gray-800">Paid</span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b border-r rounded-r-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> $342 </span>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td className="px-0 pt-0 pb-3" scope="row">
                           <div
                              className="flex items-center h-16 pl-6 bg-white border-t border-b border-l rounded-l-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <div className="mr-4">
                                 <input type="checkbox" value="" id="" />
                              </div>
                              <span className="text-lg font-normal"> Twisted cable </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              06.01.2022
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> Adobe </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> 74634 </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span
                                 className="inline-block px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-md dark:text-gray-400 dark:bg-gray-800">Paid</span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b border-r rounded-r-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> $342 </span>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td className="px-0 pt-0 pb-3" scope="row">
                           <div
                              className="flex items-center h-16 pl-6 bg-white border-t border-b border-l rounded-l-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <div className="mr-4">
                                 <input type="checkbox" value="" id="" />
                              </div>
                              <span className="text-lg font-normal"> Optical disk </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              06.01.2022
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> Adobe </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> 74634 </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span
                                 className="inline-block px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-md dark:text-gray-400 dark:bg-gray-800">Paid</span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 pb-3">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b border-r rounded-r-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> $342 </span>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <td className="px-0 pt-0 " scope="row">
                           <div
                              className="flex items-center h-16 pl-6 bg-white border-t border-b border-l rounded-l-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <div className="mr-4">
                                 <input type="checkbox" value="" id="" />
                              </div>
                              <span className="text-lg font-normal"> Fibre cable </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 ">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              06.01.2022
                           </div>
                        </td>
                        <td className="px-0 pt-0 ">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> Adobe </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 ">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> 74634 </span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 ">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span
                                 className="inline-block px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-md dark:text-gray-400 dark:bg-gray-800">Paid</span>
                           </div>
                        </td>
                        <td className="px-0 pt-0 ">
                           <div
                              className="flex items-center h-16 pl-2 bg-white border-t border-b border-r rounded-r-lg dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400">
                              <span className="text-sm"> $342 </span>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div> */}
         {/* ============================================== */}
         <NoticeModal open={open} handleClose={handleClose} singleShop={singleShop}></NoticeModal>
      </>
   );
};

export default ManageShops;