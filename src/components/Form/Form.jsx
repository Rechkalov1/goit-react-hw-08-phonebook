import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Forms, Input, Label, Button } from './Form.styled';
import getFilterContacts from '../../redux/contacts/selectorC';
import { useDispatch, useSelector } from 'react-redux';

import * as contactsOperations from 'redux/contacts/contactsOperations';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const phoneId = nanoid();

  const handleChange = e => {
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
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number: number,
    };
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactsOperations.addContacts(contact));
    setName('');
    setNumber('');
  };
  return (
    <Forms onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor={phoneId}>
        Contact
        <Input
          id={phoneId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </Label>

      <Button>Add Contact</Button>
    </Forms>
  );
}
