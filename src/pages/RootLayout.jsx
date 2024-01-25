import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <main>
        <MainNavigation />
      </main>
      <Outlet />
    </div>
  );
};

export default RootLayout;
