import { useEffect, useState } from "react";
import { UserCard } from 'react-ui-cards';

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    // console.log(teachers);

    return (
        <section className="min-h-screen py-20">
            <article className="grid justify-items-center md:grid-cols-4 mx-40">
                {
                    teachers?.map(teacher =>
                        <UserCard
                            className="text-center"
                            key={teacher.email}
                            float
                            // href='/instructors'
                            header={teacher.image}
                            // avatar={teacher.image}
                            name={teacher.name}
                            positionName={teacher.email}
                        />
                    )
                }
            </article>
        </section>
    );
};

export default Instructors;