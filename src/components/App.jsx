import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/auth-operations';
import PrivateRoute from './guards/PrivateRoute';
import { Layout } from './Layout/Layout';
import { RedirectedRoute } from './guards/RedirectedRoutes';
import authSelectors from '../redux/auth/auth-selector';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegistrationPage'));
const LogPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RedirectedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RedirectedRoute component={LogPage} redirectTo="/contacts" />
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
      </Suspense>
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
