import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selector';

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to={location.state ?? '/'} />;
};
export default PublicRoute;
