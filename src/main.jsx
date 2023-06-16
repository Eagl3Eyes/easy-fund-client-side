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
import Instructors from './components/Instructors/Instructors'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome'



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
      {
        path: '/classes',
        element: <Classes />,
        loader: () => axios('http://localhost:5000/classes')
      },
      {
        path: '/instructors',
        element: <Instructors />
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
