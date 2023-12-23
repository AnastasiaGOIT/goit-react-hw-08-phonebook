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
      <p>Welcome, {username} </p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
