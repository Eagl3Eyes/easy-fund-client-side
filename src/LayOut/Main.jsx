import React, { useState } from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    const [toggle, setToggle] = useState(true);
    // console.log(toggle);

    return (
        <main>
            <Navbar toggle={toggle} setToggle={setToggle} />
            <section>
                <Outlet />
            </section>
            <Footer toggle={toggle} />
        </main>
    );
};

export default Main;