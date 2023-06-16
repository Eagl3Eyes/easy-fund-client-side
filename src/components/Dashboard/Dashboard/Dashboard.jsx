import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    // useTitle('Dashboard')

    return (
        <div>
            <DashboardSidebar />
        </div>
    );
};

export default Dashboard;