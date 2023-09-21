import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const products = useLoaderData();
    const {title, price, images, description } = products;
    
    return (
        <div className='h-screen lg:flex justify-center items-center'>
    <img className="object-cover w-[95%] mx-auto lg:mx-0 rounded-t-lg  lg:w-96 md:rounded-none md:rounded-l-lg" src={images[0]} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">${price}</p>
        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{description}</p>
    </div>


      
    </div>
    );
};

export default Product;