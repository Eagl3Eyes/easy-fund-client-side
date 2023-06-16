import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Header from '../Header/Header';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <Header />
            <PopularClasses />
        </section>
    );
};

export default Home;