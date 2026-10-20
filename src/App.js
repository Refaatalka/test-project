import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppProviders from './context/AppProviders';
import './App.css';
import './assets/styles/theme.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import routes from './routes';
import Layout from './components/layout';



function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: routes,
    },
  ]);

  return (
    <Provider store={store}>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </Provider>
  );
}

export default App;