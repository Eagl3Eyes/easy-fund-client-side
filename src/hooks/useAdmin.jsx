import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    // use axios secure with react query
    const { data: isAdmin = [], isLoading: isAdminLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data;
        }
    })
    return [isAdmin, isAdminLoading, refetch];
}
export default useAdmin;