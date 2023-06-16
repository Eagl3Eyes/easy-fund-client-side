import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Header from '../Header/Header';

const Home = () => {
    useTitle('Home')
    return (
        <section>
            <Header />
        </section>
    );
};

export default Home;