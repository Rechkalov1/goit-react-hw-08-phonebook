import { nanoid } from 'nanoid';
import { Ul, Li, NavItem } from './Navigation.styled';

const itemsMenu = [
  {
    text: 'Home',
    id: nanoid(),
    to: '/',
  },
  {
    text: 'Login',
    id: nanoid(),
    to: '/login',
  },
  {
    text: 'Register',
    id: nanoid(),
    to: '/register',
  },
];

export default function Navigation() {
  const elements = itemsMenu.map(({ id, to, text }) => {
    return (
      <Li key={id}>
        <NavItem to={to} end>
          {text}
        </NavItem>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}
