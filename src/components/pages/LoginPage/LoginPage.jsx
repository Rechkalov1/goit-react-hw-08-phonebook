import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Forms, Input, Label, Button } from './LoginPage.styled';
import * as authOpetation from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailId = nanoid();
  const passwordId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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

    dispatch(authOpetation.logIn({ email, password }));

    setEmail('');
  };
  return (
    <Forms onSubmit={handleSubmit}>
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

      <Button>Login</Button>
    </Forms>
  );
}
