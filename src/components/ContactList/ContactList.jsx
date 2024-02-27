import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selector';
import css from './ContactList.module.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  // const contactsList = useSelector(getContacts);

  const dispatch = useDispatch();
  const handleDelete = contactId => dispatch(deleteContact(contactId));
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact._id}>
          {contact.name}: {contact.number}
          <Button
            size="small"
            variant="contained"
            startIcon={<DeleteIcon />}
            className={css.form__delete}
            type="text"
            onClick={() => handleDelete(contact._id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
