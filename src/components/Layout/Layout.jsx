import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div
      className={css.container}
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
