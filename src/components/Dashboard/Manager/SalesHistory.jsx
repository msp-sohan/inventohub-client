import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import useAllSales from "../../../hooks/useAllSales";

const SalesHistory = () => {
   const [page, setPage] = useState(0);
   console.log(page)
   const [rowsPerPage, setRowsPerPage] = useState(10);

   const { data } = useAllSales({ page, rowsPerPage })
   const allSales = data?.result
   const count = data?.saleCount

   const sortedData = allSales?.sort((a, b) => new Date(b.salesDate) - new Date(a.salesDate));



   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold mb-4 bg-blue-400 p-2 text-white">Sales History</h2>
            <div className="">
               <table id="example" className=" w-full table-auto">
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
                           <td className="border px-4 py-2">${((item?.sellingPrice) - (item?.productionCost)).toFixed(2)}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20, 50]}
         />
      </>
   );
};

export default SalesHistory;
