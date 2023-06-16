import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Header from '../Header/Header';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularTeachers from '../PopularTeachers/PopularTeachers';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <Header />
            <PopularClasses />
            <PopularTeachers />
            <Reviews />
        </section>
    );
};

export default Home;