import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UserCard } from 'react-ui-cards';


const PopularTeachers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('http://localhost:5000/teachers/popularteachers')
            .then(res => setData(res.data))
    }, [])
    // console.log(data);

    return (
        <article className='my-10'>
            <h3 className='text-5xl font-bold text-center uppercase mt-40'>Popular Instructors</h3>
            <section className='grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10'>
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