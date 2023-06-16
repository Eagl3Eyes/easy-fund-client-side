import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error 404')

    const navigate = useNavigate();
    const imgURL = 'https://i.ibb.co/6D8gCVr/image.png';

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <button onClick={() => navigate('/')} className="btn text-black bg-slate-300">Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;