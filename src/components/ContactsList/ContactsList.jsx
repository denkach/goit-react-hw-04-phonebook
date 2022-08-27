import PropTypes from 'prop-types';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onClick }) => {
  return (
    <>
      <Contacts>
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            />
          );
        })}
      </Contacts>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
