'use client';
import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

  const cartCount = useAppSelector(state=>state.counter.count);
  
  return (
    <div className='flex flex-wrap p-2 gap-2 justify-center items-center'>
      <SimpleWidget 
        title={`${cartCount}`}
        subTitle='Productos en el carrito'
        label='Contador'
        icon={<IoCartOutline size={50} className="text-blue-500"></IoCartOutline>}
        href='/dashboard/counter'
      />
      <SimpleWidget 
        title='Otro titulo'
      />
    </div>
  );
};
