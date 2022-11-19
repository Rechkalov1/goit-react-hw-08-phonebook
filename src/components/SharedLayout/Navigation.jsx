import React from 'react';
import { NavLink } from 'react-router-dom';
import UserName from './UserName';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/authSelectors';
import { HeaderWrapper } from './AppBar.styled';
import { Div } from './Navigation.styled';
export default function Navigation() {
  const isLogin = useSelector(getIsLogin);
  return (
    <HeaderWrapper>
      <Div>
        <div>{isLogin && <NavLink to="/contacts">Contacts</NavLink>}</div>
        {isLogin ? <UserName /> : <AuthNav />}
      </Div>
    </HeaderWrapper>
  );
}
