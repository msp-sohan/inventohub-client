
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllSales = ({ page = 0, rowsPerPage = 0 }) => {
   const { user } = useAuth()
   const axios = useAxiosSecure();
   const { data, isLoading } = useQuery({
      queryKey: ['allSalesd', page, rowsPerPage, user?.email],
      queryFn: async () => {
         const response = await axios.get(`/sales/${user?.email}?page=${page}&limit=${rowsPerPage}`);
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllSales;

export const useManagerAllSales = ({ page = 0, rowsPerPage = 10 }) => {
   const axios = useAxiosSecure();
   const { user } = useAuth()
   const { data, isLoading } = useQuery({
      queryKey: ['ManagerAllSales', page, rowsPerPage, user?.email],
      queryFn: async () => {
         const response = await axios.get(`/allsales/${user?.email}?page=${page}&limit=${rowsPerPage}`);
         return response.data;
      }
   })
   return { data, isLoading };
};

export const useSales = () => {
   const axios = useAxiosSecure();
   const { data, isLoading } = useQuery({
      queryKey: ['totalSale'],
      queryFn: async () => {
         const response = await axios.get("/totalsales");
         return response.data;
      }
   })
   return { data, isLoading };
};