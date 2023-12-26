import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, BrowserRouter as Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selector';
import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';

import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LogPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  // const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogPage />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      ></div>
    </>
  );
};
