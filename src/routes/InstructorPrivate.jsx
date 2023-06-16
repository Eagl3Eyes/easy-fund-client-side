import React from 'react';
import useInstructor from '../hooks/useInstructor';
import { Navigate } from 'react-router-dom';

const InstructorPrivate = ({ children }) => {
    const [isInstructor] = useInstructor();
    // console.log(' zzp  ',isInstructor)

    if (!isInstructor) {
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default InstructorPrivate;