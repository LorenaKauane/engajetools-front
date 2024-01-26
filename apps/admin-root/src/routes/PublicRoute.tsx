import React, { Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Signup from '../pages/Signup';
import PasswordReset from '../pages/PasswordReset';

export function Layout() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <header className="text-4xl mb-9">
        Engaje{' '}
        <span className="border-b-2 border-b-violet-700 border-dashed">
          Tools
        </span>
      </header>
      <Suspense fallback={'LOADING'}>
        <Outlet />
      </Suspense>
    </div>
  );
}
const PublicRoute = () => {
  return {
    element: <Layout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/passwordReset', element: <PasswordReset /> },
      { path: '/forgotPassword', element: <ForgotPassword /> },

      { path: '*', element: <Navigate to="/login" replace /> },
    ],
  };
};

export default PublicRoute;
