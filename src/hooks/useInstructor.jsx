import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data;
        }
    })
    return [isInstructor, isInstructorLoading, refetch];
}
export default useInstructor;