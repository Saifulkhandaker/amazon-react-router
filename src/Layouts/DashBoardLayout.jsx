import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='flex gap-10 mt-10 w-11/12 mx-auto'>
          <div className='md:w-[20%] bg-white shadow-2xl px-5 py-4'>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/dashboard/editProfile">Edit Profile</Link>
                </li>
            </ul>
           </div>
           <div className='md:w-[80%]'>
            <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default DashBoardLayout;