import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authImg from '../../../assets/login.png'
import { FaEye, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import useTitle from "../../../hooks/useTitle";
import { motion } from "framer-motion";



const Login = () => {
    useTitle('Login')

    const { logIn, googleLogIn } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const onSubmit = data => {
        // console.log(data);
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: error.message,
                })
            })
    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'user', image: loggedUser.photoURL }
                fetch('https://crowd-funding-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    }


    return (
        <motion.section
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
            className="min-h-screen bg-base-200"
        >
            <div className="hero items-center">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} />
                                {errors.email && <p className="text-red-500">Email is required and must be valid</p>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${view ? 'text' : 'password'}`} placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} />
                                <button type="button" onClick={() => setView(!view)} ><FaEye className="absolute right-5 bottom-12" /></button>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-sm">New Here ? <Link to='/register' className="underline text-blue-600">Register Now</Link></p>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF735C] hover:bg-[#CD4F40]" value='Login' type="submit" />
                            </div>
                        </div>
                        <div className="divider"></div>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-circle text-white bg-[#34A853] hover:bg-green-500 mx-auto mb-5"><FaGoogle /></button>
                    </form>

                    <div className="text-center">
                        <img className="" src={authImg} alt="" />
                    </div>
                </div>
            </div>







            {/* <section className="flex flex-col md:flex-row h-screen items-center">

                <div className=" hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={authImg} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="text" placeholder="Enter Email"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                                {errors.email && <p className="text-red-500">Email is required and must be valid</p>}
                            </div>

                            <div className=" relative">
                                <label className="block text-gray-700">Password</label>
                                <input type={`${view ? 'text' : 'password'}`} placeholder="Enter Password"
                                    {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                                <button type="button" onClick={() => setView(!view)} ><FaEye className="absolute right-5 bottom-4" /></button>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" clasclassNames="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-[#FF735C] hover:bg-[#CD4F40] text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                        </form>

                        <hr class="my-6 border-gray-300 w-full" />

                        <button type="button" onClick={handleGoogleLogin} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink: href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                                <span className="ml-4">
                                    Log in
                                    with
                                    Google</span>

                            </div>
                        </button>
                        <p className="mt-8">Need an account?
                            <Link to='/register' class="text-blue-500 hover:text-blue-700 font-semibold"> Create an
                                account</Link>
                        </p>


                    </div>
                </div>

            </section> */}
        </motion.section>
    );
};

export default Login;