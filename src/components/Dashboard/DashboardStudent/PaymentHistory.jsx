import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";
import useTitle from "../../../hooks/useTitle";
import { motion } from "framer-motion";


const PaymentHistory = () => {
    useTitle('Payment History')

    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosSecure(`/payment-details/${user.email}`)
            .then(res => setData(res.data));
    }, []);
    // console.log(data);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className="my-20">
                <div className="overflow-x-auto mx-40 min-h-screen">
                    <h3 className="text-3xl text-center uppercase">My Payment History</h3>
                    <table className="table mt-10">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-center font-semibold uppercase">Event Name</th>
                                <th className="text-center font-semibold uppercase">Raised By</th>
                                <th className="text-center font-semibold uppercase">Transaction ID</th>
                                <th className="text-center font-semibold uppercase">Time</th>
                            </tr>
                        </thead>
                        <tbody className='items-center'>
                            {
                                data?.map((data, index) =>
                                    <tr key={data._id}>
                                        <th>{index + 1}</th>
                                        <td className="text-center font-semibold">{data.lecture.name}</td>
                                        <td className="text-center font-semibold">{data.lecture.instructor}</td>
                                        <td className="text-center font-semibold">{data.transactionId}</td>
                                        <td className="text-center font-semibold">{data.date}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </motion.div>
    );
};

export default PaymentHistory;