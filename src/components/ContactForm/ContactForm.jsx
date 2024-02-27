import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selector';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';
import { Alert, Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsList = useSelector(getContacts);

  const onInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExistName = contactsList.some(
      contact =>
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase() === name.toLowerCase()
    );

    const isExistPhone = contactsList.some(
      contact =>
        contact.number &&
        typeof contact.number === 'string' &&
        contact.number === number
    );
    if (isExistName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (isExistPhone) {
      <Alert severity="info">`${number} is already in contacts.`</Alert>;
      alert(`${number} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <input
        className={css.form__input}
        type="text"
        name="name"
        value={name}
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onInputChange}
      />

      <label htmlFor="phone">Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        value={number}
        onChange={onInputChange}
      />

      <Button size="large" className={css.form__btn} type="submit">
        Add contact
      </Button>
    </form>
  );
};
