
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllShops = () => {
   const axios = useAxios();
   const { data, isLoading } = useQuery({
      queryKey: ['allShops'],
      queryFn: async () => {
         const response = await axios.get('/shops');
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllShops;