import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import authSelectors from '../../redux/auth/auth-selector';

export const Layout = () => {
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //   const userName = useSelector(authSelectors.getUserName);
  //   useEffect(() => {
  //     (!isLoggedIn || !userName) && dispatch(refreshUser());
  //   }, [dispatch, userName, isLoggedIn]);
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
