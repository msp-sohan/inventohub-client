import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useGetProducts = () => {
   const { user } = useAuth()
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['allProduct', user?.email],
      queryFn: async () => {
         const response = await axios.get(`/products/${user?.email}`);
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};

export default useGetProducts;

export const useProducts = () => {
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['Products'],
      queryFn: async () => {
         const response = await axios.get("/products");
         return response.data;
      }
   })
   return { data, isLoading, refetch };
};