import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contact_items';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  inputUpdateHandler = contact => {
    for (let { name } of this.state.contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }
    }

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  inputFilterHandler = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactDeleteHandler = e => {
    const { id } = e.currentTarget;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

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
          <ContactsForm onChange={this.inputUpdateHandler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.inputFilterHandler} />
          <ContactsList
            contacts={visibleContacts}
            onClick={this.contactDeleteHandler}
          />
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}
