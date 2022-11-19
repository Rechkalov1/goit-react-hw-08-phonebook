import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Forms, Input, Label, Button } from './RegisterPage.styled';
import * as authOperation from '../../../redux/auth/authOperation';
import { useDispatch } from 'react-redux';

// import getFilterContacts from 'redux/contacts/selectorC';

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  // const isDublicate = contact => {
  //   const result = contacts.some(item => item.name === contact.name);
  //   return result;
  // };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      email: email,
      password: password,
    };

    dispatch(authOperation.register(contact));
    setName('');
    setEmail('');
  };
  return (
    <Forms onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          id={nameId}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor={emailId}>
        Email
        <Input
          id={emailId}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="email number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor={emailId}>
        Password
        <Input
          id={passwordId}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="password be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <Button>Add Contact</Button>
    </Forms>
  );
}
