import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Header from '../Header/Header';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularTeachers from '../PopularTeachers/PopularTeachers';
import Reviews from '../Reviews/Reviews';
import { motion } from 'framer-motion';

const Home = () => {
    useTitle('Home')
    return (
        <motion.section
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <Header />
            <PopularClasses />
            <PopularTeachers />
            <Reviews />
        </motion.section>
    );
};

export default Home;