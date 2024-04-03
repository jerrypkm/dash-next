import { WidgetsGrid } from '@/components';
import React from 'react';

const MainPage = () => {
  return (
    <div className='text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información General</span>
      
      <WidgetsGrid />

    </div>
  );
};

export default MainPage;