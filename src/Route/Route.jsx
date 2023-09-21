import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Product from '../Pages/Product/Product';
import DashBoardLayout from '../Layouts/DashBoardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Profile/Profile';
import EditProfile from '../Pages/EditProfile/EditProfile';


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: "/products/:id",
                element: <Product></Product>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: "/dashboard",
                element: <DashBoardLayout></DashBoardLayout>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                    {
                        path: "/dashboard/editProfile",
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])

export default myCreatedRoute;