import axios from "axios";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import { motion } from "framer-motion";
import { TbCurrencyTaka } from "react-icons/tb";


const Classes = () => {
    useTitle('Donate Now')

    const { data } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(isAdmin, isInstructor);



    const addToCart = (lecture) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/login');
                    return;
                }
            })
        }


        const lectureData = { lecture, email: user.email }
        axios.post('https://crowd-funding-server.vercel.app/classes-cart', lectureData)
            .then(res => {
                if (res.data.acknowledged) {
                    navigate('/dashboard/selecteddonation/');
                    return;
                }
            })

    }



    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
            className="min-h-screen"
        >
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center mx-16 md:mx-32 lg:mx-32 gap-12 mt-20">
                {
                    data?.map(lecture =>
                        <div
                            key={lecture._id}
                            className="w-60 h-96 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl p-2"
                        >

                            <img className="h-40 object-cover rounded-xl" src={lecture.image} alt="" />
                            <div className="p-2">
                                <h2 className="font-bold text-center text-lg mb-2">{lecture.name}</h2>
                                <p className="text-sm font-bold text-center text-gray-700 mb-2">Raised By: {lecture.instructor}</p>
                                {/* <p className="text-center mb-2">Price: ${lecture.price}</p> */}
                                {/* <p className="text-center">Already Enrolled: {lecture.enrolled}</p> */}
                                <p className="text-center font-bold flex text-gray-700 items-center justify-center">Fund Raised: {lecture.enrolled * lecture.price}<span className="text-xl"><TbCurrencyTaka /></span></p>
                                {/* <p className="text-center mb-12">Available Seats: {lecture.availableSeats}</p> */}
                                <p className="text-center font-bold text-gray-700 mb-12 flex items-center justify-center">Goal: {lecture.availableSeats}<span className="text-xl"><TbCurrencyTaka /></span></p>
                            </div>
                            <div className="grid justify-items-center">
                                <button onClick={() => addToCart(lecture)} className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600 absolute bottom-0 mb-2">Donate Now</button>

                                {/* <Link to={`/donatenow/${lecture._id}`}>
                                    <button onClick={() => addToCart()} className="btn btn-primary absolute inset-x-0 bottom-0">View Details</button>
                                </Link> */}
                            </div>
                        </div>

                    )
                }
            </section>
        </motion.div>
    );
};

export default Classes;