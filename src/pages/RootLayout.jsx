import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from 'react-router-dom';

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <div>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}

        <MainNavigation />
      </main>
      <Outlet />
    </div>
  );
};

export default RootLayout;
