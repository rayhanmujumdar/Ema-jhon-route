import React from 'react';
import useProducts from '../../hooks/UseProducts';

const Orders = () => {
    const [products,useProduct] = useProducts();
    return (
        <div>
            <h1>this is order section : {products.length}</h1>
        </div>
    );
};

export default Orders;<h1>this is order section</h1>