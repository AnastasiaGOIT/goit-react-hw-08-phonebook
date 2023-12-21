import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selector';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {' '}
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList /> */}
    </div>
  );
};

export default Contacts;
