import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './greeting';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Greeting />} />),
);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
