import { ArrowCircleRightIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ carts, Clear,className }) => {
    const [totalPrice,setTotalPrice] = useState(0);
    const [shippinCharge,setShippingCharge] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const price = (previous,current) => previous + current.price;
        const total = carts.reduce(price,0)
        const totalParse = parseFloat(total.toFixed(2))
        setTotalPrice(totalParse)
    },[carts])
    useEffect(() => {
        const price = (previous,current) => previous + current.shipping;
        const totalShipping = carts.reduce(price,0)
        const totalParse = parseFloat(totalShipping.toFixed(2))
        setShippingCharge(totalParse)
    },[carts])
    const tax = Math.round(totalPrice * 0.1)
    const grandPrice = totalPrice + shippinCharge + tax;
    const reviowOrder = () => {
        const path = '/orders'
        navigate(path)
    }
    return (
        <div className={className}>
            <h1 className='text-4xl my-10'>Order summary</h1>
            <div className='text-left p-4 text-lg min-h-[25vh]'>
                <p>Selected Items: {carts.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippinCharge}</p>
                <p>Tax: ${ tax }</p>
                <p className='text-2xl'>Grand Total: ${grandPrice.toFixed(2)}</p>
            </div>
            <div className='m-4'>
                <button onClick={() => Clear(carts)} className='flex justify-center w-full bg-red-800 py-3 shadow-lg rounded-lg hover:bg-red-500'>Clear Cart <TrashIcon className='w-6 ml-3'></TrashIcon></button>
                <button onClick={reviowOrder} className='flex justify-center w-full bg-yellow-600 py-3 shadow-lg rounded-lg my-4 hover:bg-yellow-400'>Review Order <ArrowCircleRightIcon className='w-6 ml-3'></ArrowCircleRightIcon></button>
            </div>
        </div>
    );
};

export default CartSummary;