
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllUsers = () => {
   const axios = useAxios();
   const { data, isLoading } = useQuery({
      queryKey: ['allUsers'],
      queryFn: async () => {
         const response = await axios.get('/users');
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllUsers;