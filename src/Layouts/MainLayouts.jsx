import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <section className="text-center md:flex  justify-between items-center shadow-lg py-4 px-5 ">
        <div>
          <h1 className="text-3xl font-extrabold">Amazon</h1>
        </div>
        <nav className="ml-16 mt-5 md:ml-0 md:mt-0 ">
          <ul className="font-medium flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-400 text-white py-1 px-3 rounded-lg" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-400 text-white py-1 px-3 rounded-lg" : ""
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-400 text-white py-1 px-3 rounded-lg" : ""
              }
            >
              Dashboard
            </NavLink>

            
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
