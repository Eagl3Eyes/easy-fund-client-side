import { Navigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminPrivate = ({ children }) => {
    const [isAdmin] = useAdmin();
    // console.log('Admin is:', isAdmin);

    if (!isAdmin || isAdmin.length === 0) {
        return <Navigate to='/'></Navigate>
    }
    return children;
};

export default AdminPrivate;