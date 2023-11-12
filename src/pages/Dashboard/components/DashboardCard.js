import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardCard = ({ order }) => {
  const { cartList, amount_paid, id } = order;
  return (
    <div className='max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700'>
      <div className='flex justify-between text-sm m-2 font-bold dark:text-slate-200'>
        <span>Order Id: {id}</span>
        <span>Total: ${amount_paid}</span>
      </div>
      {cartList.map((cartItem) => {
        return (
          <div
            className='flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5'
            key={cartItem.id}
          >
            <div className='flex'>
              <Link to={`/products/${cartItem.id}`}>
                <img
                  className='w-32 rounded'
                  src={cartItem.image_local}
                  alt={cartItem.name}
                />
              </Link>
              <div className=''>
                <Link to={`/products/${cartItem.id}`}>
                  <p className='text-lg ml-2 dark:text-slate-200'>
                    {cartItem.name}
                  </p>
                </Link>
                <div className='text-lg m-2 dark:text-slate-200'>
                  <span>${cartItem.price}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
