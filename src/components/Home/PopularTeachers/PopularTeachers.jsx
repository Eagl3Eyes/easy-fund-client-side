import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { UserCard } from 'react-ui-cards';


const PopularTeachers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://summer-camp-server-tau-three.vercel.app/teachers/popularteachers')
            .then(res => setData(res.data))
    }, [])
    // console.log(data);

    return (
        <article className='my-10'>
            <Fade>
                <h3 className='text-5xl font-bold text-center uppercase mt-40'>Popular Instructors</h3>
            </Fade>
            <p className='font-semibold text-gray-600 text-center mt-4'>Experience transformative learning from our carefully curated selection of popular instructors, <br /> renowned for their ability to captivate and inspire students, as they guide you through immersive <br /> and engaging courses designed to empower your personal and professional growth.</p>
            <section className='grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10 md:mx-80'>
                {
                    data?.map(teacher =>
                        <UserCard
                            key={teacher._id}
                            float
                            href='/instructors'
                            header={teacher.image}
                            // avatar={teacher.image}
                            name={teacher.name}
                            positionName='Instructors'
                        />
                    )
                }
            </section>
        </article>
    );
};

export default PopularTeachers;