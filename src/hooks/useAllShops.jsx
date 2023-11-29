
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllShops = () => {
   const { user } = useAuth()
   const axios = useAxiosSecure();
   const { data, isLoading } = useQuery({
      queryKey: ['allShops'],
      queryFn: async () => {
         const response = await axios.get(`/shops?email=${user?.email}`);
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllShops;