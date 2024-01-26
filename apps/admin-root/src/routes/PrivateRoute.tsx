import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Dashboard from '../pages/Dashboard';

// https://github.com/Kiranism/next-shadcn-dashboard-starter/blob/main/app/(dashboard)/dashboard/page.tsx
// https://github.com/Kiranism/next-shadcn-dashboard-starter
export function Layout() {
  return (
    <>
      <header>HEADER ADMIN</header>
      <Suspense fallback={'LOADING'}>
        <Outlet />
      </Suspense>
    </>
  );
}

const PrivateRoute = () => {
  return {
    element: <Layout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  };
};

export default PrivateRoute;
