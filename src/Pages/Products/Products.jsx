import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {products} = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-5'>
            {
                products.map(product => <Product product={product}></Product>)
            }
            
        </div>
    );
};

export default Products;