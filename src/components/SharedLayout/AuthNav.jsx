import React from 'react';

import { NavItem } from './Navigation.styled';
import { Nav, DivMenu } from './AppBar.styled';

export default function AuthNav() {
  return (
    <Nav>
      <div>
        <NavItem to="/">Home</NavItem>
      </div>
      <DivMenu>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/register">Register</NavItem>
      </DivMenu>
    </Nav>
  );
}
