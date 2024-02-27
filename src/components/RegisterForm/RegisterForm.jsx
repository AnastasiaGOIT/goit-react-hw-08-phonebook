import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: brown,
    secondary: purple,
  },
});
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.register_div}>
      <form className={css.register_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName"></label>
          <ThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              size="small"
              type="text"
              label="Name"
              name="name"
              id="inputName"
              margin="normal"
            />{' '}
          </ThemeProvider>
        </div>
        <div>
          <label htmlFor="inputEmail"></label>
          <ThemeProvider theme={theme}>
            <TextField
              className={css.register_input}
              type="email"
              name="email"
              size="small"
              label="Email"
              id="inputEmail"
              margin="normal"
              area-aria-describedby="emailHelp"
            />
          </ThemeProvider>
        </div>
        <div id="emailHelp">We'll never share your email with anyone else.</div>

        <div>
          <label htmlFor="inputPassword"></label>
          <ThemeProvider theme={theme}>
            <TextField
              label="Password"
              type="password"
              size="small"
              margin="normal"
              name="password"
              id="inputPassword"
            />
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <Button className={css.register_btn} variant="outlined" type="submit">
            Register
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default RegisterForm;
