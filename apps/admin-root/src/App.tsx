import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Button } from '@ui/components/button';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const [count, setCount] = useState(0);

  function checkAuth() {
    // TODO: Redirect /dashboard
    return false;
  }

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    checkAuth() ? PrivateRoute() : {},
    //@ts-ignore
    PublicRoute(),
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
}

export default App;
