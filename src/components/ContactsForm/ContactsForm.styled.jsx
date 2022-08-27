import styled from 'styled-components';

export const FormInput = styled.input`
  margin-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Button = styled.button`
  margin-top: 12px;
  margin-bottom: 24px;
  padding: 8px;
  background-color: #4231c3;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms linear;

  :hover {
    background-color: #4e3ecf;
  }
`;

export const Label = styled.p`
  margin-top: 12px;
`;
