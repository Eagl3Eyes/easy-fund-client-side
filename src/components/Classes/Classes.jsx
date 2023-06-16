import axios from "axios";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import { motion } from "framer-motion";


const Classes = () => {
    useTitle('Classes')

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
        axios.post('https://summer-camp-server-tau-three.vercel.app/classes-cart', lectureData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        '',
                        'Added to Cart',
                        'success'
                    )
                }
            })

    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className="grid grid-cols-1 md:grid-cols-5 justify-items-center mx-40 gap-12 mt-20 mb-40">
                {
                    data?.map(lecture =>
                        <div
                            key={lecture._id}
                            className={`${lecture.availableSeats == 0 ? 'bg-slate-300' : ''} w-60 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl p-2`}
                        >

                            <img className="h-40 object-cover rounded-xl" src={lecture.image} alt="" />
                            <div className="p-2">
                                <h2 className="font-bold text-center text-lg mb-2">{lecture.name}</h2>
                                <p className="text-sm font-semibold text-center text-gray-600 mb-2">Instructor: {lecture.instructor}</p>
                                <p className="text-center mb-2">Price: ${lecture.price}</p>
                                <p className="text-center">Already Enrolled: {lecture.enrolled}</p>
                                <p className="text-center mb-12">Available Seats: {lecture.availableSeats}</p>
                            </div>
                            <div className="grid justify-items-center">
                                <button disabled={lecture.availableSeats <= 0 || isAdmin.length > 0 || isAdmin?.role == 'admin' || isInstructor} onClick={() => addToCart(lecture)} className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600 absolute bottom-0">Add to Cart</button>
                            </div>
                        </div>
                    )
                }

            </section>
        </motion.div>
    );
};

export default Classes;