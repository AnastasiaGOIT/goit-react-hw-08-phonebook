import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

import authSelectors from '../../redux/auth/auth-selector';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUserName);
  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.title}>
      <p className={css.username}>Welcome, {username} </p>
      <Button variant="outlined" onClick={handleLogout} type="button">
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
