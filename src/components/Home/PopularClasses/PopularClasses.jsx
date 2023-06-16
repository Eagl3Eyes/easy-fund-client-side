import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularClasses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/classes/popularclasses')
            .then(res => setData(res.data))
    }, [])


    return (
        <article className='mt-40'>

            <span className='text-5xl font-bold uppercase text-center mb-10'>
                <p>{`Popular Classes`}</p>
            </span>
            <figure className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 md:mx-40 mx-5 my-14'>
                {
                    data?.map((item, index) =>
                        <img
                            key={index}
                            className='rounded-2xl shadow-neutral-400 shadow-2xl w-[400px] h-[250px]'
                            src={item.image}
                        />
                    )
                }
            </figure>
        </article>
    );
};

export default PopularClasses;