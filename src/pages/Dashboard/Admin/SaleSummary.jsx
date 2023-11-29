import { GrMoney } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import useAllUsers from "../../../hooks/useAllUsers";
import { useProducts } from "../../../hooks/useGetProducts";
import { useSales } from "../../../hooks/useAllSales";
import { useState } from "react";
import NoticeModal from "./Modal/NoticeModal";
import Helmat from "../../../components/Helmat/Helmat";
import { TablePagination } from "@mui/material";

const SaleSummary = () => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const { data: allProduct } = useProducts()
   const { data: totalSale } = useSales()
   const { data: users } = useAllUsers({ page, rowsPerPage })
   const allUsers = users?.result

   const sortedUsers = allUsers?.sort((a, b) => {
      if (a.role === 'Admin') {
         return -1;
      } else if (b.role === 'Admin') {
         return 1;
      } else {
         return 0;
      }
   });

   const count = users?.count

   const [open, setOpen] = useState(false);

   const [singleUser, setSingleUser] = useState({})

   const handleOpen = (user) => {
      setSingleUser(user)
      setOpen(true)
   };

   const handleClose = () => setOpen(false);

   const adminData = allUsers?.find(user => user.role === 'admin')
   // const exceptAdmin = allUsers?.filter(user => user?.role !== "admin")


   // ============================================
   // MIUI Pagination Handler
   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };
   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value));
      setPage(0);
   };
   // =============================================

   return (
      <>
         <Helmat title="InventoHub || Sale Summary" />
         <div className="grid grid-cols-1 gap-4 lg:gap-20 px-4 mt-8 sm:grid-cols-3 sm:px-8">
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
               <div className="p-4 bg-green-400">
                  <TbMoneybag className="w-12 h-12 text-white" />

               </div>
               <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Income</h3>
                  <p className="text-3xl">${adminData?.income}</p>
               </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
               <div className="p-4 bg-blue-400">
                  <GrMoney className="w-12 h-12 text-white" />
               </div>
               <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Product</h3>
                  <p className="text-3xl">{allProduct?.length}</p>
               </div>
            </div>
            <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
               <div className="p-4 bg-indigo-400">
                  <FcSalesPerformance className="w-12 h-12 text-white" />
               </div>
               <div className="px-4 text-gray-700">
                  <h3 className="text-sm tracking-wider">Total Sales</h3>
                  <p className="text-3xl">{totalSale?.totalSales}</p>
               </div>
            </div>
         </div>
         <div className="mt-12">
            <div className="flex justify-center items-center">
               <h2 className="text-2xl md:text-3xl font-semibold border-b-4 pb-1 my-6 border-black">All User Info</h2>
            </div>
            <table className="min-w-full divide-y border rounded divide-gray-200 overflow-x-auto">
               <thead className="bg-blue-300 text-black">
                  <tr>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">#</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">User Name</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Shop Email</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Shop Name</th>
                     <th scope="col" className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">Role</th>
                     <th scope="col" className="pl-6 py-3 text-left text-base font-bold uppercase tracking-wider">Actions</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  {
                     sortedUsers?.map((user, index) => <tr key={user?._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500 font-bold">
                           {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="text-sm md:text-base text-gray-900">{user?.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                           {user?.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                           {user?.shopName}
                        </td>
                        <td className="px-6 border-r py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                           {user?.role}
                        </td>
                        <td className={`pl-6 py-4   text-sm md:text-base font-medium ${user?.role === 'user' || !user?.role || !user?.shopId ? "" : "hidden"}`}>
                           {
                              user?.role === 'admin' ? <button className="py-1 w-full lg:w-48 px-3 rounded bg-violet-500  text-white font-semibold">System Admin</button> : <button onClick={() => handleOpen(user)} className="py-1 px-3 rounded bg-green-300 hover:bg-green-800 hover:text-white font-semibold">send Promotional Email</button>
                           }
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>
         <TablePagination
            component="div"
            count={count || 0}
            page={page || 0}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20, 50]}
         />
         <NoticeModal open={open} handleClose={handleClose} singleShop={singleUser}></NoticeModal>
      </>
   );
};

export default SaleSummary;