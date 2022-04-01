import React from 'react';
import { removeToDb } from '../../fakeDb/fakeDb';
import { useCart } from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import CartSummary from '../CartSummary/CartSummary';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Orders = () => {
    const [products,useProduct] = useProducts();
    const [carts,setCart] = useCart(products)
    const handleRemoveCart = (product) => {
        const rest = carts.filter(cart => cart.key !== product.key);
        setCart(rest)
        removeToDb(product.key)
    }
    return (
        <div className='flex md:flex-row flex-col justify-around items-start my-10'>
            <div className='bg-slate-200 p-10 rounded-xl m-4 md:order-1 order-2'>
                {
                    carts.map(cart => <ReviewOrder
                    key={cart.key}
                    cart = {cart}
                    handleRemoveCart = {handleRemoveCart}
                    ></ReviewOrder>)
                }
            </div>
            <div className='md:sticky top-[92px] md:m-0 m-auto order-1 md:order-2'>
                <CartSummary carts={carts} className='bg-slate-700 text-white p-4 rounded-md'></CartSummary>
            </div>
        </div>
    );
};

export default Orders;