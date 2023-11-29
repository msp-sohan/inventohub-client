import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRole } from "../api/auth";

const useRole = () => {
   const { user, loading } = useAuth()
   const { data: role, isLoading, refetch } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ['role', user],
      queryFn: async () => getRole(user?.email),
   })
   return { role, isLoading, refetch }
};

export default useRole;