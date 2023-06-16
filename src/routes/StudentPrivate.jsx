import React from 'react';
import useStudent from '../hooks/useStudent';
import { Navigate } from 'react-router-dom';

const StudentPrivate = ({ children }) => {
    const [isStudent] = useStudent();
    // console.log('from is student ', isStudent);

    if (!isStudent) {
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default StudentPrivate;