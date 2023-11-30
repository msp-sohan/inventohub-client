import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import { useManagerAllSales } from "../../../hooks/useAllSales";
import Loader from "../../Shared/Loader";
import EmptyPage from "../../../pages/EmptyPage/EmptyPage";




const SalesHistory = () => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const { data: secondData, isLoading } = useManagerAllSales({ page, rowsPerPage })
   const allSales = secondData?.result?.map(data => data?.salesData)
   const count = secondData?.totalProductCount

   const sortedData = allSales?.sort((a, b) => new Date(b.salesDate) - new Date(a.salesDate));

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

   if (isLoading) return <Loader />

   return (
      <>
         <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4 bg-blue-400 p-2  text-white">Sales History</h2>
            <div className="overflow-x-auto">
               {
                  sortedData?.length === 0 ? <EmptyPage /> : <table id="example" className=" w-full table-auto">
                     <thead className="text-xl bg-blue-200 text-left">
                        <tr>
                           <th className="border border-black px-4 py-2">Ser</th>
                           <th className="border border-black px-4 py-2">Product Name</th>
                           <th className="border border-black px-4 py-2">Sales Date</th>
                           <th className="border border-black px-4 py-2">Profit</th>
                        </tr>
                     </thead>
                     <tbody>
                        {sortedData?.map((item, index) => (
                           <tr key={item?._id}>
                              <td className="border px-4 py-2">{index + 1}</td>
                              <td className="border px-4 py-2">{item?.productName}</td>
                              <td className="border px-4 py-2">
                                 {new Date(item?.salesDate).toLocaleDateString('en-GB').replace(/\//g, '-')}
                              </td>
                              <td className="border px-4 py-2">${((item?.sellingPrice) - (item?.productCost)).toFixed(2)}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               }
            </div>
         </div>

         {
            sortedData?.length === 0 ? "" : <TablePagination
               component="div"
               count={count || 0}
               page={page}
               onPageChange={handleChangePage}
               rowsPerPage={rowsPerPage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               rowsPerPageOptions={[5, 10, 20, 50]}
            />
         }
      </>
   );
};

export default SalesHistory;
