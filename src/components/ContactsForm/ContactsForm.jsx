import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormInput, Button, Label } from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  formChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  inputSubmitHandler = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name === '' || number === '') {
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState({ name: '', number: '' });

    this.props.onChange(contact);
  };

  render() {
    return (
      <>
        <form onSubmit={this.inputSubmitHandler}>
          <label>
            <Label>Name</Label>
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.formChangeHandler}
              value={this.state.name}
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
              onChange={this.formChangeHandler}
              value={this.state.number}
            />
          </label>
          <Button type="submit">Add contact</Button>
        </form>
      </>
    );
  }
}
