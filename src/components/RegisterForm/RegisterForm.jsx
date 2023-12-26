import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import css from './RegisterForm.module.css';

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
    <div>
      <form className={css.login_form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName"></label>
          <TextField
            variant="outlined"
            size="small"
            type="text"
            label="Name"
            name="name"
            id="inputName"
            margin="normal"
          />
        </div>
        <div>
          <label htmlFor="inputEmail"></label>
          <TextField
            type="email"
            name="email"
            size="small"
            label="Email"
            id="inputEmail"
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
            label="Password"
            type="password"
            size="small"
            margin="normal"
            name="password"
            id="inputPassword"
          />
        </div>
        <Button variant="outlined" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
