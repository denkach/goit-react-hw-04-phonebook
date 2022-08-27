import styled from 'styled-components';

export const Label = styled.span`
  margin-top: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Contacts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 24px;
`;

export const ContactsItem = styled.li``;

export const ContactsButton = styled.button`
  background-color: #f73e4a;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: background-color 250ms linear;

  :hover {
    background-color: #f96670;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
