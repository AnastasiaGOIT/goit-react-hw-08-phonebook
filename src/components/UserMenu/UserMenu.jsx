import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, purple } from '@mui/material/colors';

import authSelectors from '../../redux/auth/auth-selector';
import css from './UserMenu.module.css';

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: purple,
  },
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUserName);
  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.title}>
      <p className={css.username}>Welcome, {username} </p>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={handleLogout} type="button">
          Logout
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default UserMenu;
