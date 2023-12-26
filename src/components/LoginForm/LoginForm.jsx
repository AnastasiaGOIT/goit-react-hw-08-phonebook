import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import css from './LoginForm.module.css';

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
    <div>
      <form className={css.register_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputEmail"></label>
          <TextField
            type="email"
            label="Email"
            name="email"
            id="inputEmail"
            size="small"
            margin="normal"
            area-aria-describedby="emailHelp"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="inputPassword"></label>
          <TextField
            size="small"
            label="Password"
            type="password"
            name="password"
            margin="normal"
            id="inputPassword"
          />
        </div>
        <Button variant="outlined" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
