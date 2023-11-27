import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCheckout = () => {
   const { user } = useAuth()
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['checkout', user?.email],
      queryFn: async () => {
         const response = await axios.get(`/checkout/${user?.email}`);
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};
export default useCheckout;