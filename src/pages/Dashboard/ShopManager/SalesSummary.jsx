import { PriceCheck } from "@mui/icons-material";
import { GrMoney } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";
import SalesHistory from "../../../components/Dashboard/Manager/SalesHistory";
import { useManagerAllSales } from "../../../hooks/useAllSales";
import Helmat from "../../../components/Helmat/Helmat";
import useGetProducts from "../../../hooks/useGetProducts";

const SalesSummary = () => {
   const { data: allProducts } = useGetProducts();

   // ===============================================================================
   // Secondary Api For All Get Paid
   const { data: secondData } = useManagerAllSales({ page: 0, rowsPerPage: 0 })
   const saledAllData = secondData?.result?.map(data => data.salesData)

   // ===============================================================================

   const totalSales = parseFloat(saledAllData?.reduce((sale, item) => sale + item?.sellingPrice, 0)).toFixed(2)
   const totalCost = parseFloat(saledAllData?.reduce((sale, item) => sale + item?.productCost, 0)).toFixed(2)
   const totalInvest = parseFloat(allProducts?.reduce((sale, item) => sale + item?.productCost, 0)).toFixed(2)
   const toalProfit = parseFloat((totalSales - totalCost)).toFixed(2)



   return (
      <>
         <Helmat title="InventoHub | Sales Summary" />
         <div className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200" id="panel">
            <div className="w-full py-6 mx-auto  text-slate-500">
               <div className="flex flex-wrap -mx-3 removable">
                  {/* Total Sale */}
                  <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
                     <div className="relative flex flex-col min-w-0 break-words bg-gray-200 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                           <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                 <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-black text-xl">Total Sale</p>
                                    <h5 className="mb-0 font-bold text-blue-500"> ${totalSales}
                                    </h5>
                                 </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                 <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                    <PriceCheck className="text-white relative mt-1.5 ml-1" style={{ fontSize: 36 }} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Total Invest */}
                  <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
                     <div className="relative flex flex-col min-w-0 break-words bg-gray-200 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                           <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                 <div>
                                    <p className="mb-0 font-sans font-semibold leading-normal text-black text-xl">Total Invest</p>
                                    <h5 className="mb-0 font-bold text-blue-500"> ${totalInvest}
                                    </h5>
                                 </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                 <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl ">
                                    <GrMoney className="text-white relative mx-auto mt-3 text-2xl" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Total Profit */}
                  <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none xl:mb-0">
                     <div className="relative flex flex-col min-w-0 break-words bg-gray-200 shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                           <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                 <div>
                                    <p className="mb-0 font-sans text-black font-semibold leading-normal text-xl">Total Profit</p>
                                    <h5 className="mb-0 font-bold text-blue-500"> ${toalProfit}
                                    </h5>
                                 </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                 <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                    <TbMoneybag className="text-white mx-auto mt-3 text-2xl" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div className="overflow-y-hidden rounded-lg border">
            <SalesHistory saledAllData={saledAllData}></SalesHistory>
         </div>
      </>
   );
};

export default SalesSummary;