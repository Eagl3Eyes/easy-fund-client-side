import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularClasses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://summer-camp-server-tau-three.vercel.app/classes/popularclasses')
            .then(res => setData(res.data))
    }, [])


    return (
        // <article className='mt-40'>

        //     <span className='text-5xl font-bold uppercase text-center mb-10'>
        //         <p>{`Popular Classes`}</p>
        //     </span>
        //     <figure className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 md:mx-40 mx-5 my-14'>
        //         {
        //             data?.map((item, index) =>
        //                 <img
        //                     key={index}
        //                     className='rounded-2xl shadow-neutral-400 shadow-2xl w-[400px] h-[250px]'
        //                     src={item.image}
        //                 />
        //             )
        //         }
        //     </figure>
        // </article>




        <div className='mt-40'>
            <span className='text-5xl font-bold uppercase text-center mb-10'>
                <p>{`Popular Classes`}</p>
            </span>
            <section class="py-10">
                <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {
                        data?.map((item, index) =>

                            < article
                                key={index}
                                class="rounded-md bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 " >

                                <a href="/classes">
                                    <div class="relative flex items-end overflow-hidden rounded-md">
                                        <img className='w-96 h-48' src={item.image} alt="" />
                                    </div>

                                    <div class="mt-1 p-2">
                                        <h2 class="text-slate-700"></h2>
                                        <p class="mt-1 font-semibold text-center text-slate-700 uppercase">{item.name}</p>

                                        <div class="mt-3 flex items-end justify-between">
                                            <p class="text-lg font-bold text-blue-500">${item.price}</p>

                                            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>

                                                <button class="text-sm uppercase">Select Class</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        )
                    }
                </div>
            </section >
        </div >
    );
};

export default PopularClasses;