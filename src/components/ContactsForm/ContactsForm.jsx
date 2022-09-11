import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormInput, Button, Label } from './ContactsForm.styled';

export const ContactsForm = ({ onChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formChangeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const inputSubmitHandler = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setName('');
    setNumber('');

    onChange(contact);
  };

  return (
    <>
      <form onSubmit={inputSubmitHandler}>
        <label>
          <Label>Name</Label>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={formChangeHandler}
            value={name}
          />
        </label>
        <label>
          <Label>Number</Label>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={formChangeHandler}
            value={number}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
};

ContactsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
