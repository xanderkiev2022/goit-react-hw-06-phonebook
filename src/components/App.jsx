import React, { useEffect, useState } from 'react';
import { Container, TitleH1, TitleH2 } from './App.styled';

// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { addFilter, getFilter } from 'redux/filterSlice';

export function App() {
  // const numberOfContacts = useSelector(state => state.contacts.)
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log('contacts.length :>> ', contacts.length);

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem(LS_KEY)) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

  // useEffect(() => {
  //   window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = newContact => {
    console.log('newContact :>> ', newContact);
    dispatch(addContact(newContact));

    // const dublicate = contacts.find(
    //   contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    // );
    // if (dublicate) return alert(`${newContact.name} is already in contacts`);
    // newContact.id = nanoid();
    // setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
    console.log('e.currentTarget.value ', e.currentTarget.value);
    // setFilter(e.currentTarget.value);
  };

  const delContact = id => {
    dispatch(deleteContact(id));

    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== id)
    // );
  };

  const makeListOfContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmitData={handleSubmit} />

      <TitleH2>Contacts</TitleH2>
      <Filter value={filter} changeFilter={changeFilter} />
      {contacts.length ? (
        <ContactList contacts={makeListOfContacts()} deleteContact={delContact} />
      ) : (
        <p>Oh, dear, you have no friends:( Get out of your chair and do something with your life ;)</p>
      )}
    </Container>
  );
}
