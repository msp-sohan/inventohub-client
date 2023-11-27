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
         <div>
            <div className="flex justify-center items-center">
               <h2 className="text-2xl md:text-3xl font-semibold border-b-4 pb-1 my-6 border-black">All Shops</h2>
            </div>
            <table className="min-w-full divide-y border rounded divide-gray-200 overflow-x-auto">
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
                           {shop?.shopInfo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm md:text-base font-medium">
                           <button onClick={() => handleOpen(shop)} className="py-1 px-3 rounded bg-green-300 hover:bg-green-800 hover:text-white font-semibold">Send Notice</button>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
         <NoticeModal open={open} handleClose={handleClose} singleShop={singleShop}></NoticeModal>
      </>
   );
};

export default ManageShops;