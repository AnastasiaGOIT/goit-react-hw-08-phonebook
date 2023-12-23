import { useSelector } from 'react-redux';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selector';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
export default PrivateRoute;
