import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './LayOut/Main.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProviders.jsx'
import Home from './components/Home/Home/Home.jsx'
import Login from './components/Home/Login/Login.jsx'
import Register from './components/Home/Register/Register.jsx'
import axios from 'axios'
import Classes from './components/Classes/Classes'
import ContactUs from './components/ContactUs/ContactUs'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome'
import StudentPrivate from './routes/StudentPrivate'
import SelectedClasses from './components/Dashboard/DashboardStudent/SelectedClasses'
import Payment from './components/Dashboard/DashboardStudent/Payment'
import PaymentHistory from './components/Dashboard/DashboardStudent/PaymentHistory'
import InstructorPrivate from './routes/InstructorPrivate'
import AddNewClass from './components/Dashboard/DashboardInstructor/AddNewClass'
import InstructorsClasses from './components/Dashboard/DashboardInstructor/InstructorsClasses'
import AdminPrivate from './routes/AdminPrivate'
import ManageUsers from './components/Dashboard/DashboardAdmin/ManageUsers'
import ManageClasses from './components/Dashboard/DashboardAdmin/ManageClasses'
import ErrorPage from './components/Shared/ErrorPage/ErrorPage'
import { AnimatePresence } from 'framer-motion'
import Verification from './components/Dashboard/DashboardStudent/Verification'
import ManageVerification from './components/Dashboard/DashboardAdmin/ManageVerification'
import PaidClasses from './components/Dashboard/DashboardStudent/PaidClasses'
import UpdateFund from './components/Dashboard/DashboardInstructor/UpdateFund'
import DonateNow from './components/Classes/DonateNow'
import DonateNowDetails from './components/Classes/DonateNowDetails'
import Withdraw from './components/Dashboard/DashboardInstructor/Withdraw'



const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      // {
      //   path: '/donatenow',
      //   element: <Classes />,
      //   loader: () => axios('https://crowd-funding-server.vercel.app/classes')
      // },
      {
        path: '/donatenow',
        element: <DonateNow />,
        loader: async () => {
          try {
            const donateData = await fetch('https://crowd-funding-server.vercel.app/classes');
            const donates = await donateData.json();

            return {
              donates: donates
            };
          }
          catch (err) {
            console.log(err);
          }
        }
      },
      {
        path: "/donatenow/:id",
        element: <DonateNowDetails></DonateNowDetails>,
        loader: ({ params }) => fetch(`https://crowd-funding-server.vercel.app/classes/${params.id}`)
      },
      {
        path: '/contactus',
        element: <ContactUs />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />
      },
      {
        path: 'selecteddonation',
        element: <StudentPrivate><SelectedClasses /></StudentPrivate>
      },
      {
        path: 'selecteddonation/pay/:id',
        element: <StudentPrivate><Payment /></StudentPrivate>
      },
      {
        path: 'donated',
        element: <StudentPrivate><PaidClasses /></StudentPrivate>
      },
      {
        path: 'paymenthistory',
        element: <StudentPrivate><PaymentHistory /></StudentPrivate>
      },
      {
        path: 'verification',
        element: <StudentPrivate><Verification /></StudentPrivate>
      },
      {
        path: 'requestfund',
        element: <InstructorPrivate><AddNewClass /></InstructorPrivate>
      },
      {
        path: 'raisedfund',
        element: <InstructorPrivate><InstructorsClasses /></InstructorPrivate>
      },
      {
        path: 'raisedfund/updatefund',
        element: <InstructorPrivate><UpdateFund></UpdateFund></InstructorPrivate>
      },
      {
        path: 'raisedfund/withdraw',
        element: <InstructorPrivate><Withdraw></Withdraw></InstructorPrivate>
      },
      {
        path: 'admin/manageUsers',
        element: <AdminPrivate><ManageUsers /></AdminPrivate>
      },
      {
        path: 'admin/managerequestedfund',
        element: <AdminPrivate><ManageClasses /></AdminPrivate>
      },
      {
        path: 'admin/manageverification',
        element: <AdminPrivate><ManageVerification /></AdminPrivate>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </AnimatePresence>
)
