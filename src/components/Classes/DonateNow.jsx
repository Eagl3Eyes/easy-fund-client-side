import { motion } from 'framer-motion';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonateNowCard from './DonateNowCard';

const DonateNow = () => {
    const { donates } = useLoaderData();

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
            className="min-h-screen"
        >
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center mx-16 md:mx-32 lg:mx-32 gap-12 mt-20">
                {donates.map((donate) => (
                    <DonateNowCard key={donate.id} donate={donate}></DonateNowCard>
                ))}
            </section>
        </motion.div>
    );
};

export default DonateNow;