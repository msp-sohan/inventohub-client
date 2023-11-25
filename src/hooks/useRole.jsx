import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
   const { user, loading } = useAuth()
   console.log(user)
   const { data: role, isLoading } = useQuery({
      enabled: !loading && !!user?.email,
      queryFn: async () => getRole(user?.email),
      queryKey: ['role']
   })
   console.log(role)
   return { role, isLoading }
};

export default useRole;