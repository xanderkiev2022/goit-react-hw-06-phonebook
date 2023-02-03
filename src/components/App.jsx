import React from 'react';
import { Container, TitleH1, TitleH2 } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { addFilter, getFilter } from 'redux/filterSlice';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleSubmit = newContact => dispatch(addContact(newContact));
  const changeFilter = e => dispatch(addFilter(e.currentTarget.value));
  const delContact = id => dispatch(deleteContact(id));
  const randerContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmitData={handleSubmit} />

      <TitleH2>Contacts</TitleH2>
      <Filter value={filter} changeFilter={changeFilter} />
      {contacts.length ? (
        <ContactList contacts={randerContacts()} deleteContact={delContact} />
      ) : (
        <p>Oh, dear, you have no friends:( Get out of your chair and do something with your life ;)</p>
      )}
    </Container>
  );
}
