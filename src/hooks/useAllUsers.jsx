
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = ({ page = 0, rowsPerPage = 10 }) => {
   const axios = useAxiosSecure();
   const { data, isLoading } = useQuery({
      queryKey: ['allUsers', page, rowsPerPage,],
      queryFn: async () => {
         const response = await axios.get(`/users?page=${page}&limit=${rowsPerPage}`);
         return response.data;
      }
   })
   return { data, isLoading };
};

export default useAllUsers;