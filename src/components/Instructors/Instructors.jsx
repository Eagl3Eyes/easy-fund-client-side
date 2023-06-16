import { useEffect, useState } from "react";
import { UserCard } from 'react-ui-cards';
import useTitle from "../../hooks/useTitle";
import { motion } from "framer-motion";

const Instructors = () => {
    useTitle('Instructors')

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-tau-three.vercel.app/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    // console.log(teachers);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
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
        </motion.div>
    );
};

export default Instructors;