import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import css from './LoginForm.module.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: purple,
  },
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.login_div}>
      <form className={css.login_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputEmail"></label>
          <ThemeProvider theme={theme}>
            <TextField
              type="email"
              label="Email"
              name="email"
              id="inputEmail"
              size="small"
              margin="normal"
              area-aria-describedby="emailHelp"
            />
          </ThemeProvider>
        </div>
        <div id="emailHelp">
          <p>We'll never share your email with anyone else.</p>
        </div>

        <div>
          <label htmlFor="inputPassword"></label>
          <ThemeProvider theme={theme}>
            <TextField
              size="small"
              label="Password"
              type="password"
              name="password"
              margin="normal"
              id="inputPassword"
            />
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <Button
            className={css.login_btn}
            variant="outlined"
            type="submit"
            color="primary"
          >
            Log in
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default LoginForm;
