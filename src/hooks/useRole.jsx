import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {

   const { user, loading } = useAuth({})
   const axiosSecure = useAxiosSecure()
   const { data: role, isLoading } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ['role', user?.email],
      queryFn: async () => {
         const response = await axiosSecure.get(`/user/${user?.email}`)
         return response?.data.role
      }
   })
   return { role, isLoading }
};
export default useRole;