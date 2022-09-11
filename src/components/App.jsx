import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contact_items';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const inputUpdateHandler = contact => {
    for (let { name } of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }
    }

    setContacts(contacts => {
      return [contact, ...contacts];
    });
  };

  const inputFilterHandler = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactDeleteHandler = e => {
    const { id } = e.currentTarget;
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Box padding="24px" backgroundColor="#b9b2ec" height="100vh">
      <Box
        padding="24px"
        border="2px solid #4e2ecf"
        borderRadius="8px"
        width="320px"
        color="#fff"
        backgroundColor="#1d1d42"
      >
        <h1>Phonebook</h1>
        <ContactsForm onChange={inputUpdateHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={inputFilterHandler} />
        <ContactsList
          contacts={visibleContacts}
          onClick={contactDeleteHandler}
        />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
