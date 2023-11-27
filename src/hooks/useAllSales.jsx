
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllSales = ({ page = 0, rowsPerPage = 0 }) => {
   console.log(page, rowsPerPage)
   const axios = useAxios();
   const { data, isLoading } = useQuery({
      queryKey: ['allSalesd', page, rowsPerPage],
      queryFn: async () => {
         const response = await axios.get(`/sales?page=${page}&limit=${rowsPerPage}`);
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllSales;


export const useSales = () => {
   const axios = useAxios();
   const { data, isLoading } = useQuery({
      queryKey: ['Sales'],
      queryFn: async () => {
         const response = await axios.get("/sale");
         return response.data;
      }
   })
   return { data, isLoading };
};